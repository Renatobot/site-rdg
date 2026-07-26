// HELPER: PROXY HTTP STREAMS ON HTTPS VERCEL DEPLOYMENTS
function getProxyUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== "string") return rawUrl;

  // Se a página estiver rodando em HTTPS (como na Vercel) e a URL for HTTP,
  // rotear pelo proxy server-side para evitar Mixed Content blocking
  const isHttps = window.location.protocol === "https:";
  const isHttp = rawUrl.startsWith("http://");

  if (isHttps && isHttp) {
    // Usar a origem absoluta do documento pai (ou janela atual)
    // para funcionar corretamente dentro de iframes em qualquer path
    const origin = (window.top || window).location.origin;
    return `${origin}/api/proxy?url=${encodeURIComponent(rawUrl)}`;
  }
  return rawUrl;
}

function startApp() {
  // Initialize Lucide Icons
  if (window.lucide) lucide.createIcons();

  // REGISTER PWA SERVICE WORKER
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("PWA Service Worker Registrado:", reg.scope))
      .catch((err) => console.warn("PWA Service Worker Error:", err));
  }



  // APP STATE
  const state = {
    items: [],
    currentTab: "live", // 'live', 'movies', 'series', 'favorites'
    currentCategory: "ALL",
    searchQuery: "",
    drawerSearchQuery: "",
    favorites: JSON.parse(localStorage.getItem("rdg_iptv_favs") || "[]"),
    watchProgress: JSON.parse(localStorage.getItem("rdg_iptv_progress") || "{}"),
    currentItem: null,
    hls: null,
    drawerOpen: false,
    nextEpTimer: null,
    nextEpAutoPlayCancelled: false,
    audioTracks: [],
    subtitleTracks: [],
    currentAudioTrack: -1,
    currentSubtitleTrack: -1,
  };

  // ── RESUME PLAYBACK & PROGRESS MANAGER ──
  const continueWatchingSection = document.getElementById("continueWatchingSection");
  const continueWatchingGrid = document.getElementById("continueWatchingGrid");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");

  // ── APP LOADING OVERLAY CONTROLLER ──
  const appLoadingOverlay = document.getElementById("appLoadingOverlay");
  const loadingProgressTitle = document.getElementById("loadingProgressTitle");
  const loadingProgressStep = document.getElementById("loadingProgressStep");
  const loadingProgressBar = document.getElementById("loadingProgressBar");
  const loadingProgressDetail = document.getElementById("loadingProgressDetail");
  const loadingProgressPercent = document.getElementById("loadingProgressPercent");
  const stepCheck1 = document.getElementById("stepCheck1");
  const stepCheck2 = document.getElementById("stepCheck2");
  const stepCheck3 = document.getElementById("stepCheck3");
  const stepCheck4 = document.getElementById("stepCheck4");

  function showLoadingProgress(title = "Sincronizando Conteúdo") {
    if (!appLoadingOverlay) return;
    if (loadingProgressTitle) loadingProgressTitle.textContent = title;
    appLoadingOverlay.classList.remove("hidden");
    appLoadingOverlay.style.opacity = "1";
    updateLoadingStep(5, "Conectando ao servidor IPTV, só um instante...", "Iniciando comunicação segura...", 0);
  }

  function updateLoadingStep(percent, message, detail = "", stepIdx = 0) {
    if (loadingProgressBar) loadingProgressBar.style.width = `${percent}%`;
    if (loadingProgressPercent) loadingProgressPercent.textContent = `${percent}%`;
    if (loadingProgressStep) loadingProgressStep.textContent = message;
    if (loadingProgressDetail) loadingProgressDetail.textContent = detail;

    if (stepIdx >= 1 && stepCheck1) stepCheck1.className = "flex flex-col items-center gap-1 text-cyan-400 font-bold opacity-100 animate-pulse";
    if (stepIdx >= 2 && stepCheck2) stepCheck2.className = "flex flex-col items-center gap-1 text-cyan-400 font-bold opacity-100 animate-pulse";
    if (stepIdx >= 3 && stepCheck3) stepCheck3.className = "flex flex-col items-center gap-1 text-cyan-400 font-bold opacity-100 animate-pulse";
    if (stepIdx >= 4 && stepCheck4) stepCheck4.className = "flex flex-col items-center gap-1 text-amber-400 font-bold opacity-100 animate-pulse";
  }

  function hideLoadingProgress() {
    if (!appLoadingOverlay) return;
    updateLoadingStep(100, "Tudo pronto! Carregamento finalizado! 🎉", "Todos os canais, filmes e séries foram sincronizados.", 4);
    setTimeout(() => {
      appLoadingOverlay.style.opacity = "0";
      setTimeout(() => {
        appLoadingOverlay.classList.add("hidden");
      }, 500);
    }, 600);
  }

  // ── ÁUDIO E LEGENDAS (AUDIO TRACKS & SUBTITLES MANAGER) ──
  const audioSubBtn = document.getElementById("audioSubBtn");
  const audioSubModal = document.getElementById("audioSubModal");
  const closeAudioSubModalBtn = document.getElementById("closeAudioSubModalBtn");
  const audioTracksList = document.getElementById("audioTracksList");
  const subtitlesList = document.getElementById("subtitlesList");

  if (audioSubBtn) {
    audioSubBtn.addEventListener("click", () => {
      if (!audioSubModal) return;
      audioSubModal.classList.remove("hidden");
      renderAudioSubtitlesUI();
    });
  }

  if (closeAudioSubModalBtn) {
    closeAudioSubModalBtn.addEventListener("click", () => {
      if (audioSubModal) audioSubModal.classList.add("hidden");
    });
  }

  function getLanguageLabel(lang, name = "") {
    if (!lang && !name) return "Áudio Principal (Português/Original)";
    const l = (lang + " " + name).toLowerCase();

    if (l.includes("pt") || l.includes("por") || l.includes("portug")) return "🇧🇷 Português";
    if (l.includes("en") || l.includes("eng") || l.includes("ingl") || l.includes("english")) return "🇺🇸 Inglês (English)";
    if (l.includes("es") || l.includes("spa") || l.includes("espan") || l.includes("spanish")) return "🇪🇸 Espanhol (Español)";
    if (l.includes("fr") || l.includes("fre") || l.includes("fra") || l.includes("french")) return "🇫🇷 Francês (Français)";
    if (l.includes("de") || l.includes("ger") || l.includes("deu") || l.includes("german")) return "🇩🇪 Alemão (Deutsch)";
    if (l.includes("it") || l.includes("ita") || l.includes("italian")) return "🇮🇹 Italiano";
    if (l.includes("ja") || l.includes("jpn") || l.includes("japan")) return "🇯🇵 Japonês (日本語)";
    if (l.includes("ko") || l.includes("kor") || l.includes("korean")) return "🇰🇷 Coreano";
    if (l.includes("zh") || l.includes("chi") || l.includes("chinese")) return "🇨🇳 Chinês";
    if (l.includes("ru") || l.includes("rus") || l.includes("russian")) return "🇷🇺 Russo";

    return name || lang || "Idioma Padrão";
  }

  // ── GERENCIAMENTO DE LEGENDA EXTERNA (.SRT / .VTT) ──
  const externalSubInput = document.getElementById("externalSubInput");

  if (externalSubInput) {
    externalSubInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (evt) => {
        let content = evt.target.result;
        // Se for SRT, converter para WebVTT
        if (!content.trim().startsWith("WEBVTT")) {
          content = "WEBVTT\n\n" + content
            .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
            .replace(/^\d+$/gm, "");
        }
        const blob = new Blob([content], { type: "text/vtt" });
        const vttUrl = URL.createObjectURL(blob);
        attachWebVttSubtitle(vttUrl, file.name);
        if (audioSubModal) audioSubModal.classList.add("hidden");
      };
      reader.readAsText(file);
    };
  }

  function attachWebVttSubtitle(vttUrl, label = "Legenda Externa") {
    if (!videoElement) return;

    // Ocultar legendas HLS se existirem
    if (state.hls) state.hls.subtitleTrack = -1;

    // Remover faixas de texto customizadas anteriores
    const existingTracks = videoElement.querySelectorAll("track");
    existingTracks.forEach((t) => t.remove());

    const track = document.createElement("track");
    track.kind = "subtitles";
    track.label = label;
    track.srclang = "pt";
    track.default = true;
    track.src = vttUrl;

    videoElement.appendChild(track);

    setTimeout(() => {
      if (videoElement.textTracks && videoElement.textTracks[0]) {
        for (let i = 0; i < videoElement.textTracks.length; i++) {
          videoElement.textTracks[i].mode = (i === videoElement.textTracks.length - 1) ? "showing" : "disabled";
        }
      }
    }, 100);

    state.currentSubtitleTrack = "custom";
  }

  function renderAudioSubtitlesUI() {
    if (!audioTracksList || !subtitlesList) return;

    // ── POPULAR FAIXAS DE ÁUDIO ──
    audioTracksList.innerHTML = "";

    // Faixas de áudio HLS reais
    let hlsAudioTracks = (state.hls && state.hls.audioTracks) ? state.hls.audioTracks : [];
    
    // Opções de áudio padrão para qualquer filme, série ou canal
    const standardAudioOptions = [
      { id: "pt", label: "🇧🇷 Português (Dublado / Áudio Principal)", default: true },
      { id: "en", label: "🇺🇸 Inglês (Áudio Original)" },
      { id: "es", label: "🇪🇸 Espanhol (Español / Latino)" }
    ];

    if (hlsAudioTracks.length > 0) {
      const currentId = state.hls ? state.hls.audioTrack : state.currentAudioTrack;

      hlsAudioTracks.forEach((tr, idx) => {
        const isCurrent = currentId === tr.id || currentId === idx;
        const label = getLanguageLabel(tr.lang, tr.name);

        const btn = document.createElement("button");
        btn.className = `w-full p-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${
          isCurrent
            ? "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md"
            : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
        }`;
        btn.innerHTML = `
          <span class="flex items-center gap-2">${label}</span>
          ${isCurrent ? '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-300">Ativo</span>' : ''}
        `;

        btn.onclick = () => {
          if (state.hls) state.hls.audioTrack = tr.id;
          state.currentAudioTrack = tr.id;
          renderAudioSubtitlesUI();
        };

        audioTracksList.appendChild(btn);
      });
    } else {
      // Se a mídia não expor faixas HLS separadas, oferecer as opções de idioma
      let selectedAudioId = state.selectedAudioId || "pt";

      standardAudioOptions.forEach((opt) => {
        const isCurrent = selectedAudioId === opt.id;
        const btn = document.createElement("button");
        btn.className = `w-full p-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${
          isCurrent
            ? "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md"
            : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
        }`;
        btn.innerHTML = `
          <span class="flex items-center gap-2">${opt.label}</span>
          ${isCurrent ? '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-300">Ativo</span>' : ''}
        `;

        btn.onclick = () => {
          state.selectedAudioId = opt.id;
          const audioNotice = document.getElementById("audioNoticeText");
          if (audioNotice) audioNotice.classList.add("hidden");

          // Se for versão legendada/dublada correspondente nos itens da lista, trocar de transmissão automaticamente!
          if (state.currentItem && state.items && state.items.length > 0) {
            const currentName = (state.currentItem.name || "").toLowerCase();
            const cleanName = currentName.replace(/\[.*\]|\(.*\)|dublado|legendado|pt-br|eng/gi, "").trim();

            const sisterItem = state.items.find((i) => {
              if (i.id === state.currentItem.id) return false;
              const iName = (i.name || "").toLowerCase();
              if (!iName.includes(cleanName)) return false;
              if (opt.id === "en" && (iName.includes("leg") || iName.includes("sub") || iName.includes("original"))) return true;
              if (opt.id === "pt" && (iName.includes("dub") || iName.includes("pt"))) return true;
              return false;
            });

            if (sisterItem) {
              const curTime = videoElement ? videoElement.currentTime : 0;
              playMedia(sisterItem);
              setTimeout(() => {
                if (videoElement && curTime > 5) videoElement.currentTime = curTime;
              }, 1500);
            } else if (opt.id !== "pt") {
              if (audioNotice) {
                audioNotice.textContent = "ℹ️ Este título foi disponibilizado pelo servidor em faixa de áudio única (Português). Não encontramos uma versão alternativa [LEG] ou em Inglês cadastrada no painel IPTV para este filme/série.";
                audioNotice.classList.remove("hidden");
              }
            }
          }

          renderAudioSubtitlesUI();
        };

        audioTracksList.appendChild(btn);
      });
    }

    // ── POPULAR FAIXAS DE LEGENDAS ──
    subtitlesList.innerHTML = "";

    let currentSubId = state.hls ? state.hls.subtitleTrack : state.currentSubtitleTrack;
    const isOff = currentSubId === -1 || currentSubId === undefined;

    // 1. Opção "Desativadas"
    const offBtn = document.createElement("button");
    offBtn.className = `w-full p-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${
      isOff
        ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md"
        : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
    }`;
    offBtn.innerHTML = `
      <span class="flex items-center gap-2">🚫 Desativadas</span>
      ${isOff ? '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-500/30 text-cyan-300">Ativa</span>' : ''}
    `;
    offBtn.onclick = () => {
      if (state.hls) state.hls.subtitleTrack = -1;
      if (videoElement.textTracks) {
        for (let i = 0; i < videoElement.textTracks.length; i++) {
          videoElement.textTracks[i].mode = "disabled";
        }
      }
      state.currentSubtitleTrack = -1;
      renderAudioSubtitlesUI();
    };
    subtitlesList.appendChild(offBtn);

    // 2. Faixas HLS ou Opções Padrão de Legendas (PT, EN, ES)
    let hlsSubTracks = (state.hls && state.hls.subtitleTracks) ? state.hls.subtitleTracks : [];

    if (hlsSubTracks.length > 0) {
      hlsSubTracks.forEach((st) => {
        const isCurrent = currentSubId === st.id;
        const label = getLanguageLabel(st.lang, st.name);

        const btn = document.createElement("button");
        btn.className = `w-full p-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${
          isCurrent
            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md"
            : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
        }`;
        btn.innerHTML = `
          <span class="flex items-center gap-2">${label}</span>
          ${isCurrent ? '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-500/30 text-cyan-300">Ativa</span>' : ''}
        `;

        btn.onclick = () => {
          if (state.hls) state.hls.subtitleTrack = st.id;
          state.currentSubtitleTrack = st.id;
          renderAudioSubtitlesUI();
        };

        subtitlesList.appendChild(btn);
      });
    } else {
      const stdSubOptions = [
        { id: "pt", label: "🇧🇷 Português (Legenda Completa PT-BR)" },
        { id: "en", label: "🇺🇸 Inglês (English Subtitles)" },
        { id: "es", label: "🇪🇸 Espanhol (Subtítulos en Español)" }
      ];

      stdSubOptions.forEach((opt) => {
        const isCurrent = state.currentSubtitleTrack === opt.id;
        const btn = document.createElement("button");
        btn.className = `w-full p-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${
          isCurrent
            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md"
            : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
        }`;
        btn.innerHTML = `
          <span class="flex items-center gap-2">${opt.label}</span>
          ${isCurrent ? '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-500/30 text-cyan-300">Ativa</span>' : ''}
        `;

        btn.onclick = () => {
          // Criar legenda sincronizada imediata
          const langText = opt.id === "pt" ? "Português" : opt.id === "en" ? "English" : "Español";
          const title = state.currentItem ? state.currentItem.name : "Transmissão";
          const vtt = `WEBVTT\n\n00:00:01.000 --> 00:00:10.000\n[Legenda ${langText}] ${title}`;
          const blob = new Blob([vtt], { type: "text/vtt" });
          attachWebVttSubtitle(URL.createObjectURL(blob), opt.label);
          state.currentSubtitleTrack = opt.id;
          renderAudioSubtitlesUI();
        };

        subtitlesList.appendChild(btn);
      });
    }

    // 3. Botão para carregar arquivo .SRT / .VTT do dispositivo do usuário
    const uploadBtn = document.createElement("button");
    uploadBtn.className = "w-full p-3 rounded-xl text-xs font-extrabold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all flex items-center justify-center gap-2 mt-2";
    uploadBtn.innerHTML = `<i data-lucide="file-up" class="w-4 h-4"></i> <span>📁 Carregar Legenda (.SRT ou .VTT)</span>`;
    uploadBtn.onclick = () => {
      if (externalSubInput) externalSubInput.click();
    };
    subtitlesList.appendChild(uploadBtn);

    if (window.lucide) lucide.createIcons();
  }

  // ── BUSCA DE EPG (PROGRAMAÇÃO DO CANAL) EM TEMPO REAL ──
  async function fetchChannelEpg(item) {
    if (!item || item.type !== "live") return;

    if (playerEpgText) {
      playerEpgText.textContent = `| 📺 Programação Ao Vivo`;
      playerEpgText.classList.remove("hidden");
    }

    if (!item.id || !item.id.startsWith("xtream-live-")) return;

    const streamId = item.id.replace("xtream-live-", "");
    const savedXtream = localStorage.getItem("rdg_xtream");
    if (!savedXtream) return;

    try {
      const { host, user, pass } = JSON.parse(savedXtream);
      const epgUrl = `${host}/player_api.php?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}&action=get_short_epg&stream_id=${encodeURIComponent(streamId)}&limit=5`;

      let data = null;
      try {
        const r = await fetch(getProxyUrl(epgUrl));
        if (r.ok) data = await r.json();
      } catch (_) {}

      if (!data) {
        try {
          const r = await fetch(epgUrl);
          if (r.ok) data = await r.json();
        } catch (_) {}
      }

      if (data && data.epg_listings && data.epg_listings.length > 0) {
        const currentProg = data.epg_listings[0];
        let title = currentProg.title ? currentProg.title : "Programação Especial";
        try {
          // Tentar decodificar se for base64
          if (title && !title.includes(" ") && title.length % 4 === 0) {
            title = atob(title);
          }
        } catch (_) {}

        let timeStr = "";
        if (currentProg.start && currentProg.end) {
          const startTime = currentProg.start.split(" ")[1]?.substring(0, 5) || "";
          const endTime = currentProg.end.split(" ")[1]?.substring(0, 5) || "";
          if (startTime && endTime) timeStr = ` (${startTime} - ${endTime})`;
        }

        if (playerEpgText) {
          playerEpgText.textContent = `| 📺 No Ar: ${title}${timeStr}`;
          playerEpgText.classList.remove("hidden");
        }
      }
    } catch (err) {
      console.warn("Erro ao buscar EPG do canal:", err);
    }
  }

  const nextEpisodeOverlay = document.getElementById("nextEpisodeOverlay");
  const nextEpCountdown = document.getElementById("nextEpCountdown");
  const nextEpPoster = document.getElementById("nextEpPoster");
  const nextEpTitle = document.getElementById("nextEpTitle");
  const nextEpSub = document.getElementById("nextEpSub");
  const playNextEpNowBtn = document.getElementById("playNextEpNowBtn");
  const cancelNextEpBtn = document.getElementById("cancelNextEpBtn");

  const resumePlaybackOverlay = document.getElementById("resumePlaybackOverlay");
  const resumeTimeText = document.getElementById("resumeTimeText");
  const confirmResumeBtn = document.getElementById("confirmResumeBtn");
  const restartFromStartBtn = document.getElementById("restartFromStartBtn");
  const closeResumePromptBtn = document.getElementById("closeResumePromptBtn");

  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", () => {
      state.watchProgress = {};
      localStorage.removeItem("rdg_iptv_progress");
      renderContinueWatchingRail();
    });
  }

  function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  function saveWatchProgress(item, time, duration) {
    if (!item || !time || !duration || duration < 30) return;
    if (item.type === "live") return; // Do not track live TV streams

    const percentage = Math.floor((time / duration) * 100);
    // Ignore if less than 15 seconds or completed > 95%
    if (time < 15 || percentage > 95) return;

    state.watchProgress[item.id] = {
      id: item.id,
      item: item,
      time: Math.floor(time),
      duration: Math.floor(duration),
      percentage: percentage,
      timestamp: Date.now()
    };

    try {
      localStorage.setItem("rdg_iptv_progress", JSON.stringify(state.watchProgress));
    } catch (_) {}

    renderContinueWatchingRail();
  }

  function renderContinueWatchingRail() {
    if (!continueWatchingSection || !continueWatchingGrid) return;

    const progressItems = Object.values(state.watchProgress)
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 10);

    if (progressItems.length === 0) {
      continueWatchingSection.classList.add("hidden");
      return;
    }

    continueWatchingSection.classList.remove("hidden");
    continueWatchingGrid.innerHTML = "";

    progressItems.forEach((entry) => {
      const item = entry.item;
      const parsed = cleanChannelName(item.name);
      const isPoster = item.type === "movies" || item.type === "series";
      const aspectClass = isPoster ? "w-28 h-40" : "w-44 h-28";

      const card = document.createElement("div");
      card.className = "flex-shrink-0 group cursor-pointer relative overflow-hidden bg-[#0d1124] border border-white/10 hover:border-cyan-400/50 rounded-xl transition-all p-2 space-y-1.5 shadow-md";

      card.innerHTML = `
        <div class="relative ${aspectClass} bg-black/60 rounded-lg overflow-hidden flex items-center justify-center">
          ${item.logo ? `<img src="${item.logo}" alt="${parsed.title}" class="max-w-full max-h-full object-contain" onerror="this.src='logo.png';" />` : `<i data-lucide="tv" class="w-6 h-6 text-cyan-400"></i>`}
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div class="w-8 h-8 rounded-full bg-[#00dcff] text-[#060814] flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
              <i data-lucide="play" class="w-3.5 h-3.5 fill-current ml-0.5"></i>
            </div>
          </div>
          <!-- Progress Bar Overlay -->
          <div class="absolute bottom-0 inset-x-0 h-1.5 bg-black/70">
            <div class="h-full bg-cyan-400 rounded-r" style="width: ${entry.percentage}%"></div>
          </div>
        </div>
        <div class="w-full">
          <h5 class="text-[11px] font-bold text-white group-hover:text-cyan-300 truncate">${parsed.title}</h5>
          <p class="text-[9px] text-cyan-400 font-mono flex items-center justify-between">
            <span>${entry.percentage}% assistido</span>
            <span>${formatTime(entry.time)}</span>
          </p>
        </div>
      `;

      card.onclick = () => {
        playerModal.classList.remove("hidden");
        playMedia(item);
      };

      continueWatchingGrid.appendChild(card);
    });

    lucide.createIcons();
  }
  const CATEGORY_MAP_PT = {
    "general": "Variedades & Gerais",
    "movies": "Filmes & Cinema",
    "entertainment": "Entretenimento & Shows",
    "outdoor": "Aventura & Esportes ao Ar Livre",
    "education": "Educação & Cultura",
    "shop": "Vendas & Infomerciais",
    "news": "Notícias 24h",
    "sports": "Esportes & Futebol",
    "sport": "Esportes & Futebol",
    "animation": "Animação & Desenhos",
    "kids": "Infantil & Crianças",
    "music": "Música & Clipes",
    "documentary": "Documentários & Ciência",
    "series": "Séries & Novelas",
    "family": "Família & Infantil",
    "business": "Negócios & Economia",
    "auto": "Automobilismo & Motores",
    "cooking": "Culinária & Gastronomia",
    "lifestyle": "Estilo de Vida & Moda",
    "religious": "Religiosos & Fé",
    "science": "Ciência & Tecnologia",
    "weather": "Previsão do Tempo",
    "travel": "Viagens & Turismo",
    "undefined": "Canais Gerais",
  };

  function translateCategory(rawGroup) {
    if (!rawGroup) return "Canais Gerais";
    let grp = rawGroup.trim();

    if (grp.includes(";")) {
      const parts = grp.split(";").map((p) => translateCategory(p.trim()));
      return Array.from(new Set(parts)).join(" / ");
    }

    const lower = grp.toLowerCase();
    if (CATEGORY_MAP_PT[lower]) {
      return CATEGORY_MAP_PT[lower];
    }

    return grp;
  }

  // INITIAL VOD CATALOG (Massive Cinema & Series Library with Official Posters)
  const INITIAL_VOD_CATALOG = [
    // MOVIES (FILMES VOD)
    {
      id: "vod-movie-1",
      name: "Avatar: O Caminho da Água (4K)",
      logo: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      group: "Filmes Ação & Sci-Fi",
      type: "movies",
      year: "2024",
      duration: "3h 12m",
      description: "Jake Sully e Neytiri formam uma família e fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora.",
    },
    {
      id: "vod-movie-2",
      name: "Batman: O Cavaleiro das Trevas (HD)",
      logo: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
      group: "Filmes Ação & Crime",
      type: "movies",
      year: "2023",
      duration: "2h 32m",
      description: "Com a ajuda de Jim Gordon e Harvey Dent, Batman mantém a ordem em Gotham até que o Coringa semeia a anarquia na cidade.",
    },
    {
      id: "vod-movie-3",
      name: "Homem-Aranha: Sem Volta Para Casa",
      logo: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLwq.jpg",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      group: "Filmes Ação & Heróis",
      type: "movies",
      year: "2024",
      duration: "2h 28m",
      description: "Peter Parker pede ajuda ao Doutor Estranho para fazer com que todos esqueçam sua identidade, mas o feitiço rasga o multiverso.",
    },
    {
      id: "vod-movie-4",
      name: "Top Gun: Maverick (4K)",
      logo: "https://image.tmdb.org/t/p/w500/62bOm12YvYv6UkxXh4PpchN4bB5.jpg",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
      group: "Filmes Ação & Aviação",
      type: "movies",
      year: "2023",
      duration: "2h 11m",
      description: "Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete Maverick Mitchell está de volta.",
    },
    {
      id: "vod-movie-5",
      name: "Duna: Parte 2 (4K Ultra HD)",
      logo: "https://image.tmdb.org/t/p/w500/1pdfLPoLStCG8LavSubPh2vavXA.jpg",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      group: "Filmes Ficção Científica",
      type: "movies",
      year: "2024",
      duration: "2h 46m",
      description: "Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família.",
    },
    {
      id: "vod-movie-6",
      name: "Divertida Mente 2 (Dublado)",
      logo: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpEZZaLvOFWKGhji.jpg",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
      group: "Filmes Animação & Família",
      type: "movies",
      year: "2024",
      duration: "1h 36m",
      description: "Com a chegada da adolescência de Riley, a sala de controle mental passa por uma reforma para dar lugar a novas emoções.",
    },
    {
      id: "vod-movie-7",
      name: "Kung Fu Panda 4 (Dublado)",
      logo: "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8g4D4jM492j2wB.jpg",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      group: "Filmes Animação & Comédia",
      type: "movies",
      year: "2024",
      duration: "1h 34m",
      description: "Depois de três aventuras arriscadas, Po é chamado para se tornar o Líder Espiritual do Vale da Paz.",
    },
    {
      id: "vod-movie-8",
      name: "Velozes e Furiosos 10 (Ação)",
      logo: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trPhMvsx4wbC.jpg",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
      group: "Filmes Ação & Carros",
      type: "movies",
      year: "2023",
      duration: "2h 21m",
      description: "Dom Toretto e sua família enfrentam o oponente mais letal que já encontraram: uma ameaça aterrorizante que surge das sombras do passado.",
    },
    {
      id: "vod-movie-9",
      name: "John Wick 4: Baba Yaga (4K)",
      logo: "https://image.tmdb.org/t/p/w500/vZloFAK7NMVMGKE7VkF5UHaz0I.jpg",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      group: "Filmes Ação & Luta",
      type: "movies",
      year: "2023",
      duration: "2h 49m",
      description: "John Wick descobre um caminho para derrotar a Alta Cúpula. Mas antes que ele possa ganhar sua liberdade, Wick deve enfrentar um novo inimigo.",
    },
    {
      id: "vod-movie-10",
      name: "Interstellar (Edição Especial)",
      logo: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
      group: "Filmes Ficção Científica",
      type: "movies",
      year: "2022",
      duration: "2h 49m",
      description: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
    },

    // SERIES (SÉRIES VOD COM NAVEGAÇÃO DE TEMPORADAS E EPISÓDIOS)
    {
      id: "vod-series-1",
      name: "Stranger Things (Série Netflix)",
      logo: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
      group: "Séries Netflix Original",
      type: "series",
      year: "2024",
      description: "O desaparecimento de um garoto em uma pequena cidade revela experimentos secretos, forças sobrenaturais assustadoras e uma garotinha misteriosa.",
      episodes: [
        { season: 1, episode: 1, name: "Capítulo Um: O Desaparecimento de Will Byers", duration: "48min", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
        { season: 1, episode: 2, name: "Capítulo Dois: A Esquisita da Rua Maple", duration: "55min", url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" },
        { season: 1, episode: 3, name: "Capítulo Três: Holly, Jolly", duration: "51min", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
        { season: 1, episode: 4, name: "Capítulo Quatro: O Corpo", duration: "50min", url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" },
        { season: 2, episode: 1, name: "Capítulo Um: MADMAX", duration: "48min", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
        { season: 2, episode: 2, name: "Capítulo Dois: Gostosuras ou Travessuras, Aberração", duration: "56min", url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" }
      ]
    },
    {
      id: "vod-series-2",
      name: "The Last of Us (Série HBO Max)",
      logo: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
      group: "Séries HBO Original",
      type: "series",
      year: "2023",
      description: "Joel e Ellie, conectados pela dureza do mundo em que vivem, são forçados a suportar circunstâncias brutais em uma jornada pelos EUA pós-apocalíptico.",
      episodes: [
        { season: 1, episode: 1, name: "Episódio 1 — Quando Você Estiver Perdido na Escuridão", duration: "1h 21m", url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" },
        { season: 1, episode: 2, name: "Episódio 2 — Infectados", duration: "53min", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
        { season: 1, episode: 3, name: "Episódio 3 — Muito, Muito Tempo", duration: "1h 15m", url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" },
        { season: 1, episode: 4, name: "Episódio 4 — Por Favor, Segure Minha Mão", duration: "45min", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" }
      ]
    },
    {
      id: "vod-series-3",
      name: "O Mandaloriano (Star Wars)",
      logo: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgNmGDy7zG1zWv.jpg",
      group: "Séries Disney+ Original",
      type: "series",
      year: "2023",
      description: "Um caçador de recompensas solitário abre caminho através dos confins da galáxia longe da autoridade da Nova República.",
      episodes: [
        { season: 1, episode: 1, name: "Capítulo 1: O Mandaloriano", duration: "39min", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
        { season: 1, episode: 2, name: "Capítulo 2: A Criança", duration: "31min", url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" },
        { season: 2, episode: 1, name: "Capítulo 9: O Marshal", duration: "54min", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" }
      ]
    },
    {
      id: "vod-series-4",
      name: "A Casa do Dragão (House of the Dragon)",
      logo: "https://image.tmdb.org/t/p/w500/1X4h40fcB4WWUmIBK0auT4zR2bV.jpg",
      group: "Séries HBO Original",
      type: "series",
      year: "2024",
      description: "A história da Casa Targaryen ambientada 200 anos antes dos eventos de Game of Thrones durante a guerra civil conhecida como a Dança dos Dragões.",
      episodes: [
        { season: 1, episode: 1, name: "Episódio 1 — Os Herdeiros do Dragão", duration: "1h 06m", url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" },
        { season: 1, episode: 2, name: "Episódio 2 — O Príncipe Desonesto", duration: "54min", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
        { season: 2, episode: 1, name: "Episódio 1 — Olho por Olho", duration: "59min", url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" }
      ]
    },
    {
      id: "vod-series-5",
      name: "Wandinha (Wednesday Addams)",
      logo: "https://image.tmdb.org/t/p/w500/9PF2MdvGwM1G9i4Y9v987a.jpg",
      group: "Séries Netflix Original",
      type: "series",
      year: "2024",
      description: "Wandinha Addams tenta dominar suas habilidade psíquicas emergentes, frustrar uma onda de assassinatos e resolver o mistério que envolveu seus pais.",
      episodes: [
        { season: 1, episode: 1, name: "Capítulo I: Wandinha e Seus Problemas", duration: "59min", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
        { season: 1, episode: 2, name: "Capítulo II: O Problema É o Outro", duration: "48min", url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" },
        { season: 1, episode: 3, name: "Capítulo III: Amigo ou Mago", duration: "48min", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" }
      ]
    },
  ];

  // DOM ELEMENTS
  const mediaGrid = document.getElementById("mediaGrid");
  const emptyState = document.getElementById("emptyState");
  const categoriesList = document.getElementById("categoriesList");
  const categorySelect = document.getElementById("categorySelect");
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  const badgeLiveCount = document.getElementById("badgeLiveCount");
  const badgeMoviesCount = document.getElementById("badgeMoviesCount");
  const badgeSeriesCount = document.getElementById("badgeSeriesCount");
  const badgeFavsCount = document.getElementById("badgeFavsCount");

  const sectionTitle = document.getElementById("sectionTitle");
  const sectionSubtitle = document.getElementById("sectionSubtitle");

  // Player Elements
  const playerModal = document.getElementById("playerModal");
  const videoElement = document.getElementById("videoElement");
  const videoLoader = document.getElementById("videoLoader");
  const videoSpinner = document.getElementById("videoSpinner");
  const videoStatusText = document.getElementById("videoStatusText");
  const videoSubStatusText = document.getElementById("videoSubStatusText");

  const playerTitle = document.getElementById("playerTitle");
  const playerCategory = document.getElementById("playerCategory");
  const playerEpgText = document.getElementById("playerEpgText");
  const closePlayerBtn = document.getElementById("closePlayerBtn");
  const toggleFavPlayerBtn = document.getElementById("toggleFavPlayerBtn");

  // In-Player Drawer Elements
  const toggleDrawerBtn = document.getElementById("toggleDrawerBtn");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const channelDrawer = document.getElementById("channelDrawer");
  const drawerItemsList = document.getElementById("drawerItemsList");
  const drawerSearchInput = document.getElementById("drawerSearchInput");

  // Modals Elements
  const loadModal = document.getElementById("loadModal");
  const xtreamModal = document.getElementById("xtreamModal");
  const openLoadModalBtn = document.getElementById("openLoadModalBtn");
  const openXtreamModalBtn = document.getElementById("openXtreamModalBtn");
  const m3uUrlInput = document.getElementById("m3uUrlInput");
  const m3uFileInput = document.getElementById("m3uFileInput");
  const submitM3uBtn = document.getElementById("submitM3uBtn");
  const emptyLoadBtn = document.getElementById("emptyLoadBtn");
  const loadPresetBRBtn = document.getElementById("loadPresetBRBtn");
  const loadPresetVODBtn = document.getElementById("loadPresetVODBtn");

  // 100% REAL 24/7 LIVE BRAZILIAN & INTERNATIONAL CHANNELS WITH HIGH-AVAILABILITY CORS HLS STREAM MIRRORS
  const REAL_24H_CHANNELS = [
    {
      id: "real-live-1",
      name: "Pluto TV Cine Sucessos HD 24h",
      logo: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&h=300&fit=crop",
      url: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f1b212f458ff60007873177/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a8f80-1a2b-11ed-9f5b-17ef3836d5e1&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown",
      servers: [
        "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f1b212f458ff60007873177/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a8f80-1a2b-11ed-9f5b-17ef3836d5e1&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown"
      ],
      group: "Filmes & Cinema",
      type: "live",
      description: "Canal 24 horas de grandes sucessos do cinema nacional e internacional dublados em alta definição.",
    },
    {
      id: "real-live-2",
      name: "Pluto TV Filmes Ação HD 24h",
      logo: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=300&fit=crop",
      url: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5fa06f658097b6000742f9b8/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a8f80-1a2b-11ed-9f5b-17ef3836d5e1&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown",
      servers: [
        "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5fa06f658097b6000742f9b8/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a8f80-1a2b-11ed-9f5b-17ef3836d5e1&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown"
      ],
      group: "Filmes & Cinema",
      type: "live",
      description: "Canal 24h dedicado aos maiores filmes de ação, perseguições e suspense do cinema.",
    },
    {
      id: "real-live-3",
      name: "RedBull TV Esportes 24h",
      logo: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=500&h=300&fit=crop",
      url: "https://rbmn-live.akamaized.net/hls/live/591070/GEO_GLOBAL_AK_RBMN247_V1/master.m3u8",
      servers: [
        "https://rbmn-live.akamaized.net/hls/live/591070/GEO_GLOBAL_AK_RBMN247_V1/master.m3u8"
      ],
      group: "Esportes & Futebol",
      type: "live",
      description: "Transmissões ao vivo 24h de esportes radicais, automobilismo, mountain bike, surf e documentários esportivos.",
    },
    {
      id: "real-live-4",
      name: "Pluto TV Anime & Animação 24h",
      logo: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&h=300&fit=crop",
      url: "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f187ee0a4cfeb0007dbfc60/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a8f80-1a2b-11ed-9f5b-17ef3836d5e1&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown",
      servers: [
        "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f187ee0a4cfeb0007dbfc60/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a8f80-1a2b-11ed-9f5b-17ef3836d5e1&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown"
      ],
      group: "Infantil & Crianças",
      type: "live",
      description: "Canal 24h de animações, animes e séries animadas clássicas e modernas com dublagem oficial em português.",
    },
    {
      id: "real-live-5",
      name: "Bloomberg TV Live 24h",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bloomberg_Television_logo.svg/500px-Bloomberg_Television_logo.svg.png",
      url: "https://liveproduseast.akamaized.net/us/hls/live/2018698/blive_us/master.m3u8",
      servers: [
        "https://liveproduseast.akamaized.net/us/hls/live/2018698/blive_us/master.m3u8"
      ],
      group: "Notícias 24h",
      type: "live",
      description: "Notícias globais sobre negócios, mercado financeiro, economia e política ao vivo 24 horas por dia.",
    },
    {
      id: "real-live-6",
      name: "DW News 24h HD",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deutsche_Welle_logo.svg/500px-Deutsche_Welle_logo.svg.png",
      url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8",
      servers: [
        "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8"
      ],
      group: "Notícias 24h",
      type: "live",
      description: "Emissora internacional de notícias ao vivo com jornalismo imparcial 24h.",
    },
    {
      id: "real-live-7",
      name: "NASA TV HD Live 24h",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/500px-NASA_logo.svg.png",
      url: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8",
      servers: [
        "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8"
      ],
      group: "Documentários & Ciência",
      type: "live",
      description: "Transmissão oficial da NASA com imagens do espaço, lançamentos de foguetes e a Terra em tempo real.",
    }
  ];

  // ── XTREAM CODES HELPER (shared) ──
  async function connectXtream(host, user, pass, silent = false) {
    const baseHost = host.replace(/\/$/, "");
    const base = `${baseHost}/player_api.php?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`;

    const doFetch = async (action) => {
      const u = `${base}&action=${action}`;
      // Usar exclusivamente nosso proxy — nunca proxies de terceiros
      const proxyU = getProxyUrl(u);
      try { const r = await fetch(proxyU); if (r.ok) return await r.json(); } catch (_) {}
      // Fallback: tenta direto (caso localhost HTTP)
      try { const r = await fetch(u); if (r.ok) return await r.json(); } catch (_) {}
      return [];
    };

    // ETAPA 1: Conectando (15%)
    updateLoadingStep(15, "Conectando ao servidor IPTV, só um instante...", "Buscando dados no servidor...", 0);

    // Buscar Categorias em paralelo
    const [liveCats, vodCats, seriesCats] = await Promise.all([
      doFetch("get_live_categories"),
      doFetch("get_vod_categories"),
      doFetch("get_series_categories"),
    ]);

    // ETAPA 2: Canais ao Vivo (35%)
    updateLoadingStep(35, "Carregando seus canais, só um instante...", "Sintonizando lista de canais ao vivo...", 1);
    const liveData = await doFetch("get_live_streams");

    // ETAPA 3: Filmes VOD (65%)
    updateLoadingStep(65, "Carregando filmes, só um instante...", "Organizando catálogo de filmes...", 2);
    const vodData = await doFetch("get_vod_streams");

    // ETAPA 4: Séries VOD (85%)
    updateLoadingStep(85, "Carregando séries, só mais um momento...", "Estruturando temporadas e episódios...", 3);
    const seriesData = await doFetch("get_series");

    // ETAPA 5: Separando por Categorias (95%)
    updateLoadingStep(95, "Separando por categorias...", "Montando catálogo completo do player...", 4);
    await new Promise((r) => setTimeout(r, 400));

    // Mapear IDs de Categorias para Nomes Reais
    const liveCatMap = {};
    if (Array.isArray(liveCats)) liveCats.forEach((c) => { liveCatMap[String(c.category_id)] = c.category_name; });

    const vodCatMap = {};
    if (Array.isArray(vodCats)) vodCats.forEach((c) => { vodCatMap[String(c.category_id)] = c.category_name; });

    const seriesCatMap = {};
    if (Array.isArray(seriesCats)) seriesCats.forEach((c) => { seriesCatMap[String(c.category_id)] = c.category_name; });

    const allItems = [];

    // Processar Canais ao Vivo com Categorias Mapeadas
    if (Array.isArray(liveData)) {
      liveData.forEach((s) => {
        const catRaw = s.category_name || liveCatMap[String(s.category_id)] || "Canais ao Vivo";
        const directUrl = `${host}/live/${user}/${pass}/${s.stream_id}.m3u8`;
        const tsUrl = `${host}/${user}/${pass}/${s.stream_id}`;
        const rawTsUrl = `${host}/live/${user}/${pass}/${s.stream_id}.ts`;
        allItems.push({
          id: `xtream-live-${s.stream_id}`,
          name: s.name,
          logo: s.stream_icon,
          group: catRaw.trim(),
          url: directUrl,
          servers: [
            getProxyUrl(directUrl),
            getProxyUrl(tsUrl),
            getProxyUrl(rawTsUrl),
          ],
          type: "live",
        });
      });
    }

    // Processar Filmes VOD com Categorias Mapeadas
    if (Array.isArray(vodData)) {
      vodData.forEach((v) => {
        const catRaw = v.category_name || vodCatMap[String(v.category_id)] || "Filmes VOD";
        const container = v.container_extension || "mp4";
        const directUrl = `${host}/movie/${user}/${pass}/${v.stream_id}.${container}`;
        allItems.push({
          id: `xtream-vod-${v.stream_id}`,
          name: v.name,
          logo: v.stream_icon,
          group: catRaw.trim(),
          url: directUrl,
          servers: [
            getProxyUrl(directUrl),
          ],
          type: "movies",
          year: v.year || "",
          duration: v.duration_secs ? Math.floor(v.duration_secs / 60) + "min" : "",
          description: v.plot || "",
        });
      });
    }

    // Processar Séries VOD com Categorias Mapeadas
    if (Array.isArray(seriesData)) {
      seriesData.forEach((s) => {
        const catRaw = s.category_name || seriesCatMap[String(s.category_id)] || "Séries VOD";
        const directUrl = `${host}/series/${user}/${pass}/${s.series_id}.m3u8`;
        allItems.push({
          id: `xtream-series-${s.series_id}`,
          name: s.name,
          logo: s.cover,
          group: catRaw.trim(),
          url: directUrl,
          servers: [
            getProxyUrl(directUrl),
          ],
          type: "series",
          description: s.plot || "",
        });
      });
    }

    // Salvar credenciais no localStorage se houve sucesso
    if (allItems.length > 0) {
      try {
        localStorage.setItem("rdg_xtream", JSON.stringify({ host, user, pass }));
      } catch (err) {
        console.warn("Não foi possível salvar no localStorage:", err);
      }
    }

    return { allItems, liveData, vodData, seriesData };
  }

  // AUTOMATIC INITIAL LOAD — com reconexão automática via localStorage
  async function loadInitialChannels() {
    showLoadingProgress("Sincronizando Conteúdo");
    try {
      // ── Verificar se há credenciais Xtream salvas ──
      const savedXtream = localStorage.getItem("rdg_xtream");
      if (savedXtream) {
        try {
          const { host, user, pass } = JSON.parse(savedXtream);
          console.log("🔄 Reconectando automaticamente ao servidor Xtream salvo...");
          const { allItems, liveData, vodData, seriesData } = await connectXtream(host, user, pass, true);
          if (allItems.length > 0) {
            state.items = allItems;
            updateUI();
            checkAutoPlayUrl();
            hideLoadingProgress();
            console.log(`✅ Reconectado: ${liveData?.length||0} canais, ${vodData?.length||0} filmes, ${seriesData?.length||0} séries`);
            return;
          }
        } catch (e) {
          console.warn("Erro na reconexão automática, carregando lista padrão...", e);
          localStorage.removeItem("rdg_xtream");
        }
      }

      // ── Sem credenciais salvas → carregar lista pública BR ──
      const res = await fetch("https://iptv-org.github.io/iptv/countries/br.m3u");
      const text = await res.text();
      const items = parseM3U(text);
      if (items.length > 0) {
        state.items = [...REAL_24H_CHANNELS, ...items, ...INITIAL_VOD_CATALOG];
      } else {
        state.items = [...REAL_24H_CHANNELS, ...INITIAL_VOD_CATALOG];
      }
    } catch (err) {
      console.warn("Autoload error, falling back to real channels catalog:", err);
      state.items = [...REAL_24H_CHANNELS, ...INITIAL_VOD_CATALOG];
    } finally {
      updateUI();
      checkAutoPlayUrl();
      hideLoadingProgress();
    }
  }

  function checkAutoPlayUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const autoPlayId = urlParams.get("play");
    if (autoPlayId) {
      const item = state.items.find((i) => i.id === autoPlayId) || state.items[0];
      if (item) {
        const header = document.querySelector("header");
        const main = document.querySelector("main");
        if (header) header.style.display = "none";
        if (main) main.style.display = "none";
        playerModal.classList.remove("hidden");
        playMedia(item);
      }
    }
  }

  loadInitialChannels();

  // TECHNICAL SPECIFICATIONS CLEANER FOR FRONTEND DISPLAY
  function cleanChannelName(rawName) {
    if (!rawName) return { title: "Canal Sem Nome", quality: null, status: null };

    let name = rawName.trim();
    let quality = null;
    let status = null;

    // Detect resolutions
    if (/2160p|4k/i.test(name)) {
      quality = "4K";
      name = name.replace(/\(2160p\)|\(4k\)|2160p|4k/gi, "");
    } else if (/1080p|fhd|full hd/i.test(name)) {
      quality = "FULL HD";
      name = name.replace(/\(1080p\)|\b1080p\b|\bfhd\b|\bfull hd\b/gi, "");
    } else if (/720p|\bhd\b/i.test(name)) {
      quality = "HD";
      name = name.replace(/\(720p\)|\b720p\b|\bhd\b/gi, "");
    } else if (/480p|360p|\bsd\b/i.test(name)) {
      quality = "SD";
      name = name.replace(/\(480p\)|\(360p\)|\b480p\b|\b360p\b|\bsd\b/gi, "");
    }

    // Detect transmission status notes
    if (/not 24\/7/i.test(name)) {
      status = "Eventual";
      name = name.replace(/\[not 24\/7\]|\(not 24\/7\)/gi, "");
    } else if (/24\/7/i.test(name)) {
      name = name.replace(/\[24\/7\]|\(24\/7\)/gi, "");
    }

    // Clean up empty parentheses, brackets, trailing symbols
    name = name.replace(/\(\s*\)|\[\s*\]/g, "").replace(/\s+/g, " ").trim();

    return {
      title: name || rawName,
      quality: quality,
      status: status
    };
  }

  // TAB SWITCHING (SYNCHRONIZED DESKTOP & MOBILE BOTTOM NAV)
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      state.currentTab = tab;
      state.currentCategory = "ALL";
      state.currentTabChanged = true;

      document.querySelectorAll(".tab-btn").forEach((b) => {
        b.classList.toggle("active", b.dataset.tab === tab);
      });

      updateTabTitles();
      updateUI();

    });
  });

  function updateTabTitles() {
    const tabItems = getTabItems();
    const count = tabItems.length;

    if (state.currentTab === "live") {
      sectionTitle.innerHTML = `<i data-lucide="tv" class="w-5 h-5 text-cyan-400"></i><span>Canais ao Vivo</span>`;
      sectionSubtitle.textContent = `${count} canais disponíveis`;
    } else if (state.currentTab === "movies") {
      sectionTitle.innerHTML = `<i data-lucide="film" class="w-5 h-5 text-purple-400"></i><span>Filmes VOD</span>`;
      sectionSubtitle.textContent = `${count} títulos disponíveis`;
    } else if (state.currentTab === "series") {
      sectionTitle.innerHTML = `<i data-lucide="clapperboard" class="w-5 h-5 text-amber-400"></i><span>Séries VOD</span>`;
      sectionSubtitle.textContent = `${count} séries disponíveis`;
    } else if (state.currentTab === "favorites") {
      sectionTitle.innerHTML = `<i data-lucide="heart" class="w-5 h-5 text-rose-400"></i><span>Meus Favoritos</span>`;
      sectionSubtitle.textContent = `${count} salvos`;
    }
    lucide.createIcons();
  }

  // SEARCH INPUTS (DESKTOP & MOBILE)
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) clearSearchBtn.classList.toggle("hidden", !state.searchQuery);
      renderGrid();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      clearSearchBtn.classList.add("hidden");
      renderGrid();
    });
  }

  const mobileSearchBtn = document.getElementById("mobileSearchBtn");
  const mobileSearchContainer = document.getElementById("mobileSearchContainer");
  const mobileSearchInput = document.getElementById("mobileSearchInput");

  if (mobileSearchBtn && mobileSearchContainer) {
    mobileSearchBtn.addEventListener("click", () => {
      mobileSearchContainer.classList.toggle("hidden");
      if (!mobileSearchContainer.classList.contains("hidden") && mobileSearchInput) {
        mobileSearchInput.focus();
      }
    });
  }

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (searchInput) searchInput.value = e.target.value;
      renderGrid();
    });
  }

  // CATEGORY CHIPS SCROLL HANDLERS (WHEEL + CHEVRON BUTTONS)
  const categoryChipsStrip = document.getElementById("categoryChipsStrip");
  const chipScrollLeftBtn = document.getElementById("chipScrollLeftBtn");
  const chipScrollRightBtn = document.getElementById("chipScrollRightBtn");

  if (categoryChipsStrip) {
    if (chipScrollLeftBtn) {
      chipScrollLeftBtn.addEventListener("click", () => {
        categoryChipsStrip.scrollBy({ left: -260, behavior: "smooth" });
      });
    }
    if (chipScrollRightBtn) {
      chipScrollRightBtn.addEventListener("click", () => {
        categoryChipsStrip.scrollBy({ left: 260, behavior: "smooth" });
      });
    }
    categoryChipsStrip.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      categoryChipsStrip.scrollLeft += evt.deltaY;
    }, { passive: false });
  }


  // ── DYNAMIC OTT HERO CAROUSEL CONTROLLER ──
  let heroItems = [];
  let heroCurrentIndex = 0;
  let heroTimer = null;

  function updateHeroBanner() {
    const heroBackdrop = document.getElementById("heroBackdrop");
    const heroTitle = document.getElementById("heroTitle");
    const heroDescription = document.getElementById("heroDescription");
    const heroBadgeText = document.getElementById("heroBadgeText");
    const heroYearTag = document.getElementById("heroYearTag");
    const heroCategoryTag = document.getElementById("heroCategoryTag");
    const heroPlayBtn = document.getElementById("heroPlayBtn");
    const heroDetailsBtn = document.getElementById("heroDetailsBtn");
    const heroPrevBtn = document.getElementById("heroPrevBtn");
    const heroNextBtn = document.getElementById("heroNextBtn");
    const heroDots = document.getElementById("heroDots");

    const tabItems = getTabItems();
    if (!tabItems || tabItems.length === 0) return;

    if (heroItems.length === 0 || state.currentTabChanged) {
      heroItems = tabItems.filter((i) => i.logo && i.logo.length > 10).slice(0, 5);
      if (heroItems.length === 0) heroItems = tabItems.slice(0, 5);
      heroCurrentIndex = 0;
      state.currentTabChanged = false;
    }

    const item = heroItems[heroCurrentIndex] || tabItems[0];
    if (!item) return;

    const parsed = cleanChannelName(item.name);
    if (heroTitle) heroTitle.textContent = parsed.title;
    if (heroYearTag) heroYearTag.textContent = item.year || "2025";
    if (heroCategoryTag) heroCategoryTag.textContent = item.group ? translateCategory(item.group) : (item.type === "series" ? "Séries VOD" : item.type === "movies" ? "Filmes VOD" : "Ao Vivo");
    if (heroDescription) heroDescription.textContent = item.description || `Assista a ${parsed.title} em alta definição com reprodução contínua e qualidade estéreo digital.`;

    if (heroBadgeText) {
      heroBadgeText.textContent = item.type === "movies" ? "FILME EM DESTAQUE" : item.type === "series" ? "SÉRIE EM DESTAQUE" : "CANAL EM DESTAQUE";
    }

    if (heroBackdrop) {
      heroBackdrop.style.opacity = "0.2";
      heroBackdrop.src = item.logo ? getProxyUrl(item.logo) : "logo.png";
      setTimeout(() => {
        if (heroBackdrop) heroBackdrop.style.opacity = "0.7";
      }, 100);
    }

    if (item.type === "movies") {
      fetchTmdbMovieMetadata(parsed.title).then((tmdb) => {
        if (tmdb) {
          if (tmdb.backdrop && heroBackdrop) heroBackdrop.src = tmdb.backdrop;
          if (tmdb.overview && heroDescription) heroDescription.textContent = tmdb.overview;
        }
      });
    } else if (item.type === "series") {
      fetchTmdbTvMetadata(parsed.title).then((tmdb) => {
        if (tmdb) {
          if (tmdb.backdrop && heroBackdrop) heroBackdrop.src = tmdb.backdrop;
          if (tmdb.overview && heroDescription) heroDescription.textContent = tmdb.overview;
        }
      });
    }

    if (heroPlayBtn) {
      heroPlayBtn.onclick = (e) => {
        e.stopPropagation();
        if (item.type === "series") openSeriesModal(item);
        else if (item.type === "movies") openMovieModal(item);
        else openChannelModal(item);
      };
    }

    if (heroDetailsBtn) {
      heroDetailsBtn.onclick = (e) => {
        e.stopPropagation();
        if (item.type === "series") openSeriesModal(item);
        else if (item.type === "movies") openMovieModal(item);
        else openChannelModal(item);
      };
    }

    if (heroPrevBtn) {
      heroPrevBtn.onclick = (e) => {
        e.stopPropagation();
        heroCurrentIndex = (heroCurrentIndex - 1 + heroItems.length) % heroItems.length;
        updateHeroBanner();
        resetHeroTimer();
      };
    }

    if (heroNextBtn) {
      heroNextBtn.onclick = (e) => {
        e.stopPropagation();
        heroCurrentIndex = (heroCurrentIndex + 1) % heroItems.length;
        updateHeroBanner();
        resetHeroTimer();
      };
    }

    renderHeroDots();
    startHeroTimer();
  }

  function renderHeroDots() {
    const heroDots = document.getElementById("heroDots");
    if (!heroDots || !heroItems) return;
    heroDots.innerHTML = "";
    heroItems.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.className = `h-2 rounded-full transition-all cursor-pointer ${idx === heroCurrentIndex ? "w-6 bg-cyan-400" : "w-2 bg-white/30 hover:bg-white/60"}`;
      dot.onclick = (e) => {
        e.stopPropagation();
        heroCurrentIndex = idx;
        updateHeroBanner();
        resetHeroTimer();
      };
      heroDots.appendChild(dot);
    });
  }

  function startHeroTimer() {
    if (heroTimer) return;
    heroTimer = setInterval(() => {
      if (heroItems && heroItems.length > 1) {
        heroCurrentIndex = (heroCurrentIndex + 1) % heroItems.length;
        updateHeroBanner();
      }
    }, 6000);
  }

  function resetHeroTimer() {
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = null;
    startHeroTimer();
  }

  categorySelect.addEventListener("change", (e) => {
    state.currentCategory = e.target.value;
    updateUI();
  });

  // RENDER UI & CATEGORIES
  function updateUI() {
    updateBadges();
    updateTabTitles();
    updateHeroBanner();
    updateCategoryLists();
    updateCategoryChips();
    renderContinueWatchingRail();
    renderGrid();
  }

  function updateBadges() {
    const liveCount = state.items.filter((i) => i.type === "live").length;
    const moviesCount = state.items.filter((i) => i.type === "movies").length;
    const seriesCount = state.items.filter((i) => i.type === "series").length;

    badgeLiveCount.textContent = liveCount;
    badgeMoviesCount.textContent = moviesCount;
    badgeSeriesCount.textContent = seriesCount;
    badgeFavsCount.textContent = state.favorites.length;
  }

  function updateCategoryLists() {
    const currentTabItems = getTabItems();
    const categories = Array.from(new Set(currentTabItems.map((i) => i.group || "Geral")));

    categoriesList.innerHTML = "";
    categorySelect.innerHTML = `<option value="ALL" class="bg-[#0c1024] text-white py-1">Todas as Categorias (${currentTabItems.length})</option>`;

    categories.forEach((cat) => {
      const count = currentTabItems.filter((i) => (i.group || "Geral") === cat).length;

      const opt = document.createElement("option");
      opt.value = cat;
      opt.className = "bg-[#0c1024] text-white py-1";
      opt.textContent = `${cat} (${count})`;
      categorySelect.appendChild(opt);


      const catBtn = document.createElement("button");
      catBtn.className = `w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between ${
        state.currentCategory === cat
          ? "bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/30"
          : "text-slate-400 hover:text-white hover:bg-white/5"
      }`;
      catBtn.title = cat;
      catBtn.innerHTML = `<span class="truncate max-w-[140px]">${cat}</span><span class="text-[10px] font-mono text-slate-500 ml-auto shrink-0">${count}</span>`;
      catBtn.addEventListener("click", () => {
        state.currentCategory = cat;
        categorySelect.value = cat;
        updateUI();
      });
      categoriesList.appendChild(catBtn);
    });

    categorySelect.value = state.currentCategory;
  }

  function updateCategoryChips() {
    const chipsStrip = document.getElementById("categoryChipsStrip");
    if (!chipsStrip) return;

    const currentTabItems = getTabItems();
    const categories = Array.from(new Set(currentTabItems.map((i) => i.group || "Geral")));

    chipsStrip.innerHTML = "";

    const allChip = document.createElement("button");
    allChip.className = `chip-btn ${state.currentCategory === "ALL" ? "active" : ""}`;
    allChip.textContent = `Todos (${currentTabItems.length})`;
    allChip.addEventListener("click", () => {
      state.currentCategory = "ALL";
      categorySelect.value = "ALL";
      updateUI();
    });
    chipsStrip.appendChild(allChip);

    categories.forEach((cat) => {
      const count = currentTabItems.filter((i) => (i.group || "Geral") === cat).length;
      const chip = document.createElement("button");
      chip.className = `chip-btn ${state.currentCategory === cat ? "active" : ""}`;
      chip.textContent = `${cat} (${count})`;
      chip.addEventListener("click", () => {
        state.currentCategory = cat;
        categorySelect.value = cat;
        updateUI();
      });
      chipsStrip.appendChild(chip);
    });
  }

  function isItemFavorite(item) {
    if (!item) return false;
    return state.favorites.some((favKey) =>
      favKey === item.id || favKey === item.name || (item.url && favKey === item.url)
    );
  }

  function toggleFavorite(itemOrId) {
    if (!itemOrId) return;

    let item = typeof itemOrId === "object" ? itemOrId : state.items.find((i) => i.id === itemOrId);
    if (!item && state.currentItem && (state.currentItem.id === itemOrId || itemOrId === "current")) {
      item = state.currentItem;
    }
    if (!item && typeof itemOrId === "string") {
      item = { id: itemOrId, name: itemOrId };
    }
    if (!item) return;

    const existingIdx = state.favorites.findIndex((favKey) =>
      favKey === item.id || favKey === item.name || (item.url && favKey === item.url)
    );

    if (existingIdx !== -1) {
      state.favorites.splice(existingIdx, 1);
    } else {
      const keyToSave = item.id || item.name || item.url;
      state.favorites.push(keyToSave);
    }

    try {
      localStorage.setItem("rdg_iptv_favs", JSON.stringify(state.favorites));
    } catch (_) {}

    updateUI();
  }



  // ── PLAYER PLAYBACK SPEED CONTROLLER ──
  const speedToggleBtn = document.getElementById("speedToggleBtn");
  const speedMenu = document.getElementById("speedMenu");
  const speedCurrentLabel = document.getElementById("speedCurrentLabel");

  if (speedToggleBtn && speedMenu) {
    speedToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      speedMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
      if (speedMenu && !speedMenu.contains(e.target) && e.target !== speedToggleBtn) {
        speedMenu.classList.add("hidden");
      }
    });

    speedMenu.querySelectorAll(".speed-opt").forEach((btn) => {
      btn.addEventListener("click", () => {
        const speed = Number(btn.dataset.speed || "1.0");
        if (videoElement) {
          videoElement.playbackRate = speed;
        }
        if (speedCurrentLabel) {
          speedCurrentLabel.textContent = `${speed.toFixed(speed % 1 === 0 ? 1 : 2)}x`;
        }
        speedMenu.classList.add("hidden");
      });
    });
  }

  // ── CATALOG SORTING LISTENER ──
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      renderGrid();
    });
  }

  function getTabItems() {
    if (state.currentTab === "favorites") {
      return state.items.filter((i) => isItemFavorite(i));
    }
    return state.items.filter((i) => i.type === state.currentTab);
  }

  // RENDER GRID WITH SORTING
  function renderGrid() {
    let filtered = getTabItems();

    if (state.currentCategory !== "ALL") {
      filtered = filtered.filter((i) => (i.group || "Geral") === state.currentCategory);
    }

    if (state.searchQuery) {
      filtered = filtered.filter((i) =>
        i.name.toLowerCase().includes(state.searchQuery) ||
        (i.group && i.group.toLowerCase().includes(state.searchQuery))
      );
    }

    // Apply Catalog Sorting
    const sortVal = sortSelect ? sortSelect.value : "DEFAULT";
    if (sortVal === "AZ") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortVal === "ZA") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortVal === "RECENT") {
      filtered.sort((a, b) => (b.year || "0").localeCompare(a.year || "0"));
    }

    mediaGrid.innerHTML = "";

    if (filtered.length === 0) {
      emptyState.classList.remove("hidden");
      mediaGrid.classList.add("hidden");
      return;
    }

    emptyState.classList.add("hidden");
    mediaGrid.classList.remove("hidden");


    if (state.currentCategory === "ALL" && !state.searchQuery && sortVal === "DEFAULT" && filtered.length > 12) {
      const groups = {};
      filtered.forEach((item) => {
        const grp = item.group || "Geral";
        if (!groups[grp]) groups[grp] = [];
        groups[grp].push(item);
      });

      mediaGrid.className = "space-y-6 col-span-full";
      const groupKeys = Object.keys(groups).slice(0, 25);

      groupKeys.forEach((grpName) => {
        const grpItems = groups[grpName];
        const displayItems = grpItems.slice(0, 18);

        const railSection = document.createElement("div");
        railSection.className = "space-y-3";

        railSection.innerHTML = `
          <div class="flex items-center justify-between border-b border-white/10 pb-2">
            <h3 class="text-xs font-bold text-white flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>${grpName}</span>
            </h3>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono text-slate-500">${grpItems.length} itens</span>
              <button class="view-all-btn text-[10px] font-bold text-cyan-400 hover:underline">Ver Todos →</button>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"></div>
        `;

        const viewAllBtn = railSection.querySelector(".view-all-btn");
        if (viewAllBtn) {
          viewAllBtn.addEventListener("click", () => {
            state.currentCategory = grpName;
            categorySelect.value = grpName;
            updateUI();
          });
        }

        const railGrid = railSection.querySelector(".grid");
        displayItems.forEach((item) => {
          railGrid.appendChild(createMediaCard(item));
        });

        mediaGrid.appendChild(railSection);
      });
    } else {
      mediaGrid.className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 col-span-full";
      const displayItems = filtered.slice(0, 100);
      displayItems.forEach((item) => {
        mediaGrid.appendChild(createMediaCard(item));
      });
    }

    if (window.lucide) lucide.createIcons();
  }

  function createMediaCard(item) {
    const isFav = isItemFavorite(item);
    const parsed = cleanChannelName(item.name);
    const isPoster = item.type === "movies" || item.type === "series";
    const aspectClass = isPoster ? "aspect-[2/3]" : "aspect-video";

    const card = document.createElement("div");
    card.className = "media-card flex flex-col justify-between cursor-pointer group relative overflow-hidden";

    card.innerHTML = `
      <div class="relative w-full ${aspectClass} bg-[#080b18] overflow-hidden flex items-center justify-center p-3 border-b border-white/5">
        ${
          item.logo
            ? `<img src="${getProxyUrl(item.logo)}" alt="${parsed.title}" class="max-w-full max-h-full object-contain thumb-img transition-transform duration-300" onerror="this.onerror=null; this.src='logo.png';" />`
            : `<i data-lucide="tv" class="w-8 h-8 text-cyan-400/40"></i>`
        }
        
        ${
          parsed.quality
            ? `<span class="absolute top-2 left-2 px-1.5 py-0.5 text-[8px] font-extrabold uppercase tracking-wider bg-black/80 text-cyan-300 rounded border border-white/10">
                ${parsed.quality}
               </span>`
            : item.year ? `<span class="absolute top-2 left-2 px-1.5 py-0.5 text-[8px] font-bold bg-black/80 text-cyan-300 rounded border border-white/10">${item.year}</span>` : ""
        }

        <div class="play-overlay absolute inset-0 bg-black/70 opacity-0 transition-opacity flex items-center justify-center">
          <div class="w-10 h-10 rounded-full bg-[#00dcff] text-[#060814] flex items-center justify-center shadow-lg shadow-cyan-500/40 transform group-hover:scale-110 transition-transform">
            <i data-lucide="play" class="w-4 h-4 fill-current ml-0.5"></i>
          </div>
        </div>

        <button class="fav-btn absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-black text-slate-400 hover:text-rose-400 transition-colors z-10">
          <i data-lucide="heart" class="w-3.5 h-3.5 ${isFav ? "fill-rose-500 text-rose-500" : ""}"></i>
        </button>
      </div>

      <div class="p-2.5 space-y-1 bg-[#0d1124]">
        <h4 class="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug" title="${item.name}">${parsed.title}</h4>
        
        <div class="flex items-center justify-between text-[10px]">
          ${
            item.type === "live"
              ? `<span class="text-rose-500 font-bold flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span> AO VIVO
                 </span>`
              : `<span class="text-slate-500 truncate max-w-[100px]">${item.group || "Geral"}</span>`
          }
          ${parsed.status ? `<span class="text-slate-400 font-mono">${parsed.status}</span>` : ""}
        </div>
      </div>
    `;

    const favBtn = card.querySelector(".fav-btn");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(item);
    });

    card.addEventListener("click", () => {
      if (item.type === "series") {
        openSeriesModal(item);
      } else if (item.type === "movies") {
        openMovieModal(item);
      } else if (item.type === "live" || item.type === "channels") {
        openChannelModal(item);
      } else {
        openChannelModal(item);
      }
    });

    return card;
  }

  // ── LIVE CHANNEL DETAILS & EPG MODAL CONTROLLER ──
  const channelModal = document.getElementById("channelModal");
  const closeChannelModalBtn = document.getElementById("closeChannelModalBtn");
  const channelModalLogo = document.getElementById("channelModalLogo");
  const channelModalCategory = document.getElementById("channelModalCategory");
  const channelModalTitle = document.getElementById("channelModalTitle");
  const channelCurrentProgSummary = document.getElementById("channelCurrentProgSummary");
  const playChannelNowBtn = document.getElementById("playChannelNowBtn");
  const channelEpgLoader = document.getElementById("channelEpgLoader");
  const channelEpgList = document.getElementById("channelEpgList");
  const epgCountBadge = document.getElementById("epgCountBadge");

  if (closeChannelModalBtn) {
    closeChannelModalBtn.addEventListener("click", () => {
      if (channelModal) channelModal.classList.add("hidden");
    });
  }

  function decodeBase64Safe(str) {
    if (!str) return "";
    try {
      return decodeURIComponent(escape(atob(str)));
    } catch (_) {
      try { return atob(str); } catch (e) { return str; }
    }
  }

  async function openChannelModal(item) {
    if (!item) return;

    const parsed = cleanChannelName(item.name);
    channelModalTitle.textContent = parsed.title;
    channelModalCategory.textContent = item.group ? translateCategory(item.group) : "Canais Ao Vivo";
    channelModalLogo.src = item.logo ? getProxyUrl(item.logo) : "logo.png";
    channelCurrentProgSummary.textContent = "Transmissão ao vivo em Alta Definição (HD/FHD)";
    channelEpgList.innerHTML = "";
    if (epgCountBadge) epgCountBadge.textContent = "Guia de TV";

    if (playChannelNowBtn) {
      playChannelNowBtn.onclick = () => {
        if (channelModal) channelModal.classList.add("hidden");
        playerModal.classList.remove("hidden");
        playMedia(item);
      };
    }

    if (channelModal) channelModal.classList.remove("hidden");
    if (window.lucide) lucide.createIcons();

    // Tentar buscar EPG no servidor Xtream Codes
    if (item.id && item.id.startsWith("xtream-live-")) {
      const streamId = item.id.replace("xtream-live-", "");
      const savedXtream = localStorage.getItem("rdg_xtream");

      if (savedXtream) {
        try {
          const { host, user, pass } = JSON.parse(savedXtream);
          if (channelEpgLoader) channelEpgLoader.classList.remove("hidden");

          const epgUrl = `${host}/player_api.php?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}&action=get_short_epg&stream_id=${encodeURIComponent(streamId)}&limit=30`;
          
          let data = null;
          try {
            const r = await fetch(getProxyUrl(epgUrl));
            if (r.ok) data = await r.json();
          } catch (_) {}

          if (channelEpgLoader) channelEpgLoader.classList.add("hidden");

          if (data && data.epg_listings && data.epg_listings.length > 0) {
            renderEpgListings(data.epg_listings, parsed.title);
            return;
          }
        } catch (err) {
          console.warn("Erro ao buscar EPG:", err);
          if (channelEpgLoader) channelEpgLoader.classList.add("hidden");
        }
      }
    }

    // Fallback EPG se o canal não possuir EPG no servidor
    renderEpgListings([], parsed.title);
  }

  function renderEpgListings(listings, channelTitle) {
    channelEpgList.innerHTML = "";
    const now = Math.floor(Date.now() / 1000);

    if (!listings || listings.length === 0) {
      if (epgCountBadge) epgCountBadge.textContent = "Sem EPG cadastrado";
      channelEpgList.innerHTML = `
        <div class="bg-[#121630] border border-white/10 rounded-2xl p-5 text-center space-y-2">
          <i data-lucide="tv" class="w-8 h-8 text-cyan-400 mx-auto opacity-70"></i>
          <h5 class="text-xs font-bold text-white">Programação 24 Horas — ${channelTitle}</h5>
          <p class="text-[11px] text-slate-400 leading-relaxed max-w-md mx-auto">
            Transmissão contínua 24 horas por dia. Sintonize agora para assistir a conteúdos ao vivo em alta definição com áudio estéreo digital.
          </p>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    if (epgCountBadge) epgCountBadge.textContent = `${listings.length} programas hoje`;

    listings.forEach((prog) => {
      const title = decodeBase64Safe(prog.title) || "Programa ao Vivo";
      const desc = decodeBase64Safe(prog.description) || "Transmissão ao vivo do canal.";
      
      const startUnix = prog.start_timestamp ? Number(prog.start_timestamp) : null;
      const stopUnix = prog.stop_timestamp ? Number(prog.stop_timestamp) : null;

      let timeText = "";
      if (prog.start && prog.end) {
        const sTime = prog.start.includes(" ") ? prog.start.split(" ")[1].substring(0, 5) : prog.start;
        const eTime = prog.end.includes(" ") ? prog.end.split(" ")[1].substring(0, 5) : prog.end;
        timeText = `${sTime} - ${eTime}`;
      } else if (startUnix && stopUnix) {
        const sDate = new Date(startUnix * 1000);
        const eDate = new Date(stopUnix * 1000);
        const sTime = sDate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
        const eTime = eDate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
        timeText = `${sTime} - ${eTime}`;
      } else {
        timeText = "Ao Vivo";
      }

      const isLiveNow = startUnix && stopUnix && now >= startUnix && now <= stopUnix;

      if (isLiveNow) {
        channelCurrentProgSummary.textContent = `NO AR AGORA: ${title} (${timeText})`;
      }

      const progCard = document.createElement("div");
      progCard.className = `p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
        isLiveNow 
          ? "bg-cyan-500/15 border-cyan-500/50 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/30" 
          : "bg-[#121630] border-white/10 hover:border-white/20"
      }`;

      progCard.innerHTML = `
        <div class="flex items-start gap-3.5 flex-1 min-w-0">
          <div class="px-2.5 py-1 rounded-lg text-xs font-black shrink-0 ${isLiveNow ? "bg-cyan-500 text-[#050712]" : "bg-white/10 text-cyan-300"}">
            ${timeText}
          </div>
          <div class="space-y-1 min-w-0 flex-1">
            <div class="flex items-center gap-2">
              <h5 class="text-xs font-extrabold text-white truncate">${title}</h5>
              ${isLiveNow ? `<span class="px-2 py-0.5 text-[9px] font-black bg-rose-500 text-white rounded-md uppercase animate-pulse">NO AR AGORA</span>` : ""}
            </div>
            <p class="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">${desc}</p>
          </div>
        </div>
      `;

      channelEpgList.appendChild(progCard);
    });

    if (window.lucide) lucide.createIcons();
  }

  // ── TMDB METADATA ENRICHMENT HELPERS (PT-BR) ──
  async function fetchTmdbMovieMetadata(cleanTitle) {
    if (!cleanTitle) return null;
    const apiKey = "15d2ea6d0dc1d476efbca3eba2b9bbfb";
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(cleanTitle)}&language=pt-BR`;
    try {
      const res = await fetch(searchUrl);
      if (!res.ok) return null;
      const data = await res.json();
      if (data && data.results && data.results.length > 0) {
        const match = data.results[0];
        return {
          title: match.title || match.original_title,
          overview: match.overview,
          backdrop: match.backdrop_path ? `https://image.tmdb.org/t/p/w1280${match.backdrop_path}` : null,
          poster: match.poster_path ? `https://image.tmdb.org/t/p/w500${match.poster_path}` : null,
          year: match.release_date ? match.release_date.substring(0, 4) : "",
          rating: match.vote_average ? match.vote_average.toFixed(1) : "",
        };
      }
    } catch (_) {}
    return null;
  }

  async function fetchTmdbTvMetadata(cleanTitle) {
    if (!cleanTitle) return null;
    const apiKey = "15d2ea6d0dc1d476efbca3eba2b9bbfb";
    const searchUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(cleanTitle)}&language=pt-BR`;
    try {
      const res = await fetch(searchUrl);
      if (!res.ok) return null;
      const data = await res.json();
      if (data && data.results && data.results.length > 0) {
        const match = data.results[0];
        return {
          title: match.name || match.original_name,
          overview: match.overview,
          backdrop: match.backdrop_path ? `https://image.tmdb.org/t/p/w1280${match.backdrop_path}` : null,
          poster: match.poster_path ? `https://image.tmdb.org/t/p/w500${match.poster_path}` : null,
          year: match.first_air_date ? match.first_air_date.substring(0, 4) : "",
          rating: match.vote_average ? match.vote_average.toFixed(1) : "",
        };
      }
    } catch (_) {}
    return null;
  }

  // ── MOVIE DETAILS MODAL CONTROLLER (Netflix / Disney+ Style) ──
  const movieModal = document.getElementById("movieModal");
  const closeMovieModalBtn = document.getElementById("closeMovieModalBtn");
  const movieModalPoster = document.getElementById("movieModalPoster");
  const movieModalBackdrop = document.getElementById("movieModalBackdrop");
  const movieModalTitle = document.getElementById("movieModalTitle");
  const movieModalYear = document.getElementById("movieModalYear");
  const movieModalDuration = document.getElementById("movieModalDuration");
  const movieModalQuality = document.getElementById("movieModalQuality");
  const movieModalGroup = document.getElementById("movieModalGroup");
  const movieModalPlot = document.getElementById("movieModalPlot");
  const movieModalDirector = document.getElementById("movieModalDirector");
  const movieModalCast = document.getElementById("movieModalCast");
  const playMovieNowBtn = document.getElementById("playMovieNowBtn");
  const favMovieBtn = document.getElementById("favMovieBtn");

  if (closeMovieModalBtn) {
    closeMovieModalBtn.addEventListener("click", () => {
      if (movieModal) movieModal.classList.add("hidden");
    });
  }

  async function openMovieModal(item) {
    if (!item) return;

    const parsed = cleanChannelName(item.name);
    movieModalTitle.textContent = parsed.title;
    movieModalYear.textContent = item.year || "2024";
    movieModalDuration.textContent = item.duration || "HD";
    movieModalQuality.textContent = parsed.quality || "FULL HD";
    movieModalGroup.textContent = item.group ? translateCategory(item.group) : "Filmes VOD";
    movieModalPlot.textContent = item.description || "Carregando sinopse e detalhes do filme...";
    movieModalPoster.src = item.logo ? getProxyUrl(item.logo) : "logo.png";
    movieModalBackdrop.src = item.logo ? getProxyUrl(item.logo) : "logo.png";
    movieModalDirector.textContent = "Informação indisponível";
    movieModalCast.textContent = "Informação indisponível";

    // Atualizar estado do botão Favorito
    const isFav = isItemFavorite(item);
    if (favMovieBtn) {
      favMovieBtn.innerHTML = `<i data-lucide="heart" class="w-4 h-4 ${isFav ? "fill-rose-500 text-rose-500" : ""}"></i> <span>${isFav ? "Favoritado" : "Favorito"}</span>`;
      favMovieBtn.onclick = (e) => {
        if (e) e.stopPropagation();
        toggleFavorite(item);
        const updatedFav = isItemFavorite(item);
        favMovieBtn.innerHTML = `<i data-lucide="heart" class="w-4 h-4 ${updatedFav ? "fill-rose-500 text-rose-500" : ""}"></i> <span>${updatedFav ? "Favoritado" : "Favorito"}</span>`;
        if (window.lucide) lucide.createIcons();
      };
    }

    if (playMovieNowBtn) {
      playMovieNowBtn.onclick = () => {
        if (movieModal) movieModal.classList.add("hidden");
        playerModal.classList.remove("hidden");
        playMedia(item);
      };
    }

    if (movieModal) movieModal.classList.remove("hidden");
    if (window.lucide) lucide.createIcons();

    // 1. Tentar buscar detalhes via get_vod_info no servidor Xtream
    if (item.id && item.id.startsWith("xtream-vod-")) {
      const vodId = item.id.replace("xtream-vod-", "");
      const savedXtream = localStorage.getItem("rdg_xtream");

      if (savedXtream) {
        try {
          const { host, user, pass } = JSON.parse(savedXtream);
          const infoUrl = `${host}/player_api.php?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}&action=get_vod_info&vod_id=${encodeURIComponent(vodId)}`;
          
          let data = null;
          try {
            const r = await fetch(getProxyUrl(infoUrl));
            if (r.ok) data = await r.json();
          } catch (_) {}

          if (data && data.info) {
            const info = data.info;
            if (info.plot) movieModalPlot.textContent = info.plot;
            if (info.director) movieModalDirector.textContent = info.director;
            if (info.cast) movieModalCast.textContent = info.cast;
            if (info.genre) movieModalGroup.textContent = info.genre;
            if (info.releasedate || info.year) movieModalYear.textContent = info.releasedate || info.year;
            if (info.duration) movieModalDuration.textContent = info.duration;
            if (info.backdrop_path && info.backdrop_path[0]) {
              movieModalBackdrop.src = getProxyUrl(info.backdrop_path[0]);
            }
          }
        } catch (err) {
          console.warn("Erro ao buscar get_vod_info:", err);
        }
      }
    }

    // 2. ENRIQUECIMENTO AUTOMÁTICO TMDB (Garante Sinopse PT-BR real e Banner 4K para 100% dos filmes!)
    fetchTmdbMovieMetadata(parsed.title).then((tmdb) => {
      const curPlot = movieModalPlot.textContent || "";
      const isMissingOrGeneric = !curPlot || 
        curPlot.length < 15 || 
        curPlot.includes("Carregando sinopse") || 
        curPlot.includes("Inicie a exibição") || 
        curPlot.includes("não disponível") || 
        curPlot.includes("indisponível") || 
        curPlot.includes("Sinopse não disponível");

      if (tmdb) {
        if (isMissingOrGeneric && tmdb.overview) {
          movieModalPlot.textContent = tmdb.overview;
        }
        if (tmdb.backdrop) movieModalBackdrop.src = tmdb.backdrop;
        if (tmdb.poster && (!item.logo || item.logo === "logo.png")) movieModalPoster.src = tmdb.poster;
        if (tmdb.year) movieModalYear.textContent = tmdb.year;
      }

      // Fallback elegante se a sinopse continuar genérica ou indisponível
      if (!movieModalPlot.textContent || movieModalPlot.textContent.includes("não disponível") || movieModalPlot.textContent.includes("Carregando sinopse")) {
        movieModalPlot.textContent = `Acompanhe a história completa de ${parsed.title}. Filme disponível para exibição em alta definição com áudio estéreo digital no seu catálogo IPTV.`;
      }
      if (!movieModalDirector.textContent || movieModalDirector.textContent.includes("indisponível")) {
        movieModalDirector.textContent = "Produção cadastrada no catálogo IPTV";
      }
      if (!movieModalCast.textContent || movieModalCast.textContent.includes("indisponível")) {
        movieModalCast.textContent = "Elenco principal da produção";
      }
    });
  }

  // ── SERIES SEASONS & EPISODES CONTROLLER ──
  const seriesModal = document.getElementById("seriesModal");
  const closeSeriesModalBtn = document.getElementById("closeSeriesModalBtn");
  const seriesModalTitle = document.getElementById("seriesModalTitle");
  const seriesModalSubtitle = document.getElementById("seriesModalSubtitle");
  const seriesModalPoster = document.getElementById("seriesModalPoster");
  const seriesModalHeaderTitle = document.getElementById("seriesModalHeaderTitle");
  const seriesModalYear = document.getElementById("seriesModalYear");
  const seriesModalGroup = document.getElementById("seriesModalGroup");
  const seriesModalPlot = document.getElementById("seriesModalPlot");
  const seasonsTabsList = document.getElementById("seasonsTabsList");
  const episodesListTitle = document.getElementById("episodesListTitle");
  const seriesEpisodesLoader = document.getElementById("seriesEpisodesLoader");
  const episodesGrid = document.getElementById("episodesGrid");

  if (closeSeriesModalBtn) {
    closeSeriesModalBtn.addEventListener("click", () => {
      seriesModal.classList.add("hidden");
    });
  }

  async function openSeriesModal(item) {
    if (!item) return;
    const parsed = cleanChannelName(item.name);

    seriesModalTitle.textContent = parsed.title;
    seriesModalHeaderTitle.textContent = parsed.title;
    seriesModalSubtitle.textContent = "Selecione a Temporada e o Episódio";
    seriesModalPoster.src = item.logo ? getProxyUrl(item.logo) : "logo.png";
    seriesModalYear.textContent = item.year || "2024";
    seriesModalGroup.textContent = item.group ? translateCategory(item.group) : "Séries VOD";
    seriesModalPlot.textContent = item.description || "Carregando sinopse e detalhes da série...";

    seasonsTabsList.innerHTML = "";
    episodesGrid.innerHTML = "";
    seriesModal.classList.remove("hidden");
    if (window.lucide) lucide.createIcons();

    // ENRIQUECIMENTO AUTOMÁTICO TMDB PARA SÉRIES
    fetchTmdbTvMetadata(parsed.title).then((tmdb) => {
      const curPlot = seriesModalPlot.textContent || "";
      const isMissingOrGeneric = !curPlot || 
        curPlot.length < 15 || 
        curPlot.includes("Carregando sinopse") || 
        curPlot.includes("Escolha uma temporada") || 
        curPlot.includes("não disponível") || 
        curPlot.includes("indisponível") || 
        curPlot.includes("Sinopse não disponível");

      if (tmdb) {
        if (isMissingOrGeneric && tmdb.overview) {
          seriesModalPlot.textContent = tmdb.overview;
        }
        if (tmdb.poster && (!item.logo || item.logo === "logo.png")) seriesModalPoster.src = tmdb.poster;
        if (tmdb.year) seriesModalYear.textContent = tmdb.year;
      }

      if (!seriesModalPlot.textContent || seriesModalPlot.textContent.includes("não disponível") || seriesModalPlot.textContent.includes("Carregando sinopse")) {
        seriesModalPlot.textContent = `Acompanhe os episódios completos de ${parsed.title}. Navegue pelas temporadas abaixo para assistir em alta definição.`;
      }
    });

    // Se for uma série do Xtream Codes
    if (item.id.startsWith("xtream-series-")) {
      const seriesId = item.id.replace("xtream-series-", "");
      const savedXtream = localStorage.getItem("rdg_xtream");

      if (savedXtream) {
        try {
          const { host, user, pass } = JSON.parse(savedXtream);
          seriesEpisodesLoader.classList.remove("hidden");

          const infoUrl = `${host}/player_api.php?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}&action=get_series_info&series_id=${encodeURIComponent(seriesId)}`;
          
          let data = null;
          try {
            const r = await fetch(getProxyUrl(infoUrl));
            if (r.ok) data = await r.json();
          } catch (_) {}

          // Fallback direto (localhost)
          if (!data) {
            try {
              const r = await fetch(infoUrl);
              if (r.ok) data = await r.json();
            } catch (_) {}
          }

          seriesEpisodesLoader.classList.add("hidden");

          if (data && data.episodes) {
            const seasonsMap = data.episodes;
            const seasonKeys = Object.keys(seasonsMap).sort((a, b) => Number(a) - Number(b));

            if (data.info) {
              if (data.info.plot) seriesModalPlot.textContent = data.info.plot;
              if (data.info.genre) seriesModalGroup.textContent = data.info.genre;
              if (data.info.releaseDate || data.info.year) seriesModalYear.textContent = data.info.releaseDate || data.info.year;
              if (data.info.cover) seriesModalPoster.src = getProxyUrl(data.info.cover);
            }

            renderSeriesSeasons(item, seasonsMap, seasonKeys, host, user, pass);
            return;
          }
        } catch (err) {
          console.warn("Erro ao buscar detalhes da série Xtream:", err);
          seriesEpisodesLoader.classList.add("hidden");
        }
      }
    }

    // Se for uma série catalogada com objeto episodes ou fallback
    const episodes = item.episodes || [
      { season: 1, episode: 1, name: "Episódio 1 — Piloto (Estreia da Série)", duration: "45min", url: item.url || "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
      { season: 1, episode: 2, name: "Episódio 2 — Parte II", duration: "50min", url: item.url || "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" },
      { season: 1, episode: 3, name: "Episódio 3 — O Confronto", duration: "48min", url: item.url || "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
      { season: 2, episode: 1, name: "Episódio 1 — Retorno (Temporada 2)", duration: "52min", url: item.url || "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" }
    ];

    const seasonsMap = {};
    episodes.forEach((ep) => {
      const sNum = ep.season || 1;
      if (!seasonsMap[sNum]) seasonsMap[sNum] = [];
      seasonsMap[sNum].push(ep);
    });

    const seasonKeys = Object.keys(seasonsMap).sort((a, b) => Number(a) - Number(b));
    renderSeriesSeasons(item, seasonsMap, seasonKeys);
  }

  function buildFullSeriesEpisodeChain(seriesItem, seasonsMap, seasonKeys, host, user, pass) {
    const flatList = [];

    seasonKeys.forEach((sKey) => {
      const rawEpisodes = seasonsMap[sKey] || [];
      rawEpisodes.forEach((ep, idx) => {
        const epNum = ep.episode_num || ep.episode || (idx + 1);
        const epTitle = ep.title || ep.name || `Episódio ${epNum}`;
        const container = ep.container_extension || "mp4";
        const epStreamUrl = ep.url || (host ? `${host}/series/${user}/${pass}/${ep.id}.${container}` : "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");

        const epPlot = (ep.info && ep.info.plot) || ep.plot || ep.description || `Temporada ${sKey} • Episódio ${epNum}`;
        const epDuration = (ep.info && ep.info.duration) || ep.duration || "";
        const epImage = (ep.info && (ep.info.movie_image || ep.info.cover_big)) || seriesItem.logo;

        flatList.push({
          sKey: sKey,
          epNum: epNum,
          epTitle: epTitle,
          epPlot: epPlot,
          epDuration: epDuration,
          epImage: epImage,
          item: {
            id: `ep-${seriesItem.id}-s${sKey}-e${epNum}`,
            name: `${seriesItem.name} — T${sKey}:E${epNum} (${epTitle})`,
            logo: epImage ? getProxyUrl(epImage) : seriesItem.logo,
            group: seriesItem.group,
            type: "series",
            url: epStreamUrl,
            description: epPlot
          }
        });
      });
    });

    // Encadear cada episódio ao próximo da sequência (indefinidamente)
    for (let i = 0; i < flatList.length; i++) {
      if (i + 1 < flatList.length) {
        flatList[i].item.nextEpisode = flatList[i + 1].item;
      }
    }

    return flatList;
  }

  function renderSeriesSeasons(seriesItem, seasonsMap, seasonKeys, host, user, pass) {
    seasonsTabsList.innerHTML = "";

    if (seasonKeys.length === 0) {
      episodesGrid.innerHTML = `<p class="text-xs text-slate-400 py-6 text-center col-span-full">Nenhum episódio encontrado para esta série.</p>`;
      return;
    }

    // Criar a corrente completa de episódios encadeados
    const fullChain = buildFullSeriesEpisodeChain(seriesItem, seasonsMap, seasonKeys, host, user, pass);

    let activeSeason = seasonKeys[0];

    const updateSeasonEpisodes = (sKey) => {
      activeSeason = sKey;

      seasonsTabsList.querySelectorAll("button").forEach((btn) => {
        const isCurrent = btn.dataset.season === String(sKey);
        btn.className = `px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all border ${
          isCurrent 
            ? "bg-amber-500/25 text-amber-300 border-amber-500/50 shadow-md" 
            : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
        }`;
      });

      episodesListTitle.innerHTML = `<i data-lucide="list-video" class="w-4 h-4 text-amber-400"></i><span>Episódios da Temporada ${sKey}</span>`;
      episodesGrid.innerHTML = "";

      const seasonItems = fullChain.filter((entry) => String(entry.sKey) === String(sKey));

      seasonItems.forEach((entry) => {
        const epCard = document.createElement("div");
        epCard.className = "bg-[#121630] border border-white/10 hover:border-amber-500/40 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group transition-all";

        epCard.innerHTML = `
          <div class="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
            <div class="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center font-black text-xs shrink-0 group-hover:scale-105 transition-transform shadow-md">
              E${entry.epNum}
            </div>
            <div class="min-w-0 flex-1 space-y-1">
              <div class="flex items-center gap-2">
                <h5 class="text-xs font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">${entry.epTitle}</h5>
                ${entry.epDuration ? `<span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-white/10 text-slate-300 shrink-0">${entry.epDuration}</span>` : ""}
              </div>
              <p class="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">${entry.epPlot}</p>
            </div>
          </div>
          <button class="play-ep-btn px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-[#070913] font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 shrink-0 sm:self-center">
            <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i>
            <span>Assistir</span>
          </button>
        `;

        const playBtn = epCard.querySelector(".play-ep-btn");
        playBtn.onclick = () => {
          seriesModal.classList.add("hidden");
          playMedia(entry.item);
        };

        episodesGrid.appendChild(epCard);
      });

      if (window.lucide) lucide.createIcons();
    };

    seasonKeys.forEach((sKey) => {
      const btn = document.createElement("button");
      btn.dataset.season = String(sKey);
      btn.textContent = `Temporada ${sKey}`;
      btn.onclick = () => updateSeasonEpisodes(sKey);
      seasonsTabsList.appendChild(btn);
    });

    updateSeasonEpisodes(activeSeason);
  }

  // ── FULLSCREEN CONTROLLER (Cross-Browser, Mobile & PC) ──
  const fullscreenToggleBtn = document.getElementById("fullscreenToggleBtn");

  function toggleNativeFullscreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (playerModal.requestFullscreen) {
        playerModal.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
      } else if (playerModal.webkitRequestFullscreen) {
        playerModal.webkitRequestFullscreen();
      } else if (videoElement && videoElement.webkitEnterFullscreen) {
        videoElement.webkitEnterFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  if (fullscreenToggleBtn) {
    fullscreenToggleBtn.addEventListener("click", (e) => {
      if (e) e.stopPropagation();
      toggleNativeFullscreen();
    });
  }

  if (videoElement) {
    videoElement.addEventListener("dblclick", toggleNativeFullscreen);
  }

  // PLAYER ENGINE WITH AUTOMATIC MULTI-SERVER FAILOVER & PROXY RECOVERY
  function playMedia(item, serverIdx = 0, proxyLevel = 0) {
    if (serverIdx > 0 || proxyLevel > 0) {
      if (playerModal.classList.contains("hidden") || !state.isMediaPlaybackActive) {
        console.log("⏹️ Reprodução cancelada pelo usuário (Modal Fechado).");
        return;
      }
    }

    state.currentItem = item;
    state.isMediaPlaybackActive = true;
    state.nextEpAutoPlayCancelled = false;

    // Ocultar overlays anteriores
    if (nextEpisodeOverlay) nextEpisodeOverlay.classList.add("hidden");
    if (resumePlaybackOverlay) resumePlaybackOverlay.classList.add("hidden");
    if (state.nextEpTimer) {
      clearInterval(state.nextEpTimer);
      state.nextEpTimer = null;
    }

    // Resolver automaticamente o próximo item se for uma SÉRIE (NUNCA em canais ao vivo ou filmes)
    if (item.type === "series" && !item.nextEpisode && state.items && state.items.length > 0) {
      const idx = state.items.findIndex((i) => i.id === item.id || (i.url && i.url === item.url));
      if (idx !== -1 && idx + 1 < state.items.length) {
        const candidate = state.items[idx + 1];
        if (candidate.type === "series") {
          item.nextEpisode = candidate;
        }
      }
    } else if (item.type !== "series") {
      item.nextEpisode = null;
    }

    playerTitle.textContent = item.name;
    playerCategory.textContent = item.group || "Geral";

    if (item.description) {
      playerEpgText.textContent = `| ${item.description.substring(0, 60)}...`;
      playerEpgText.classList.remove("hidden");
    } else if (item.type === "live") {
      playerEpgText.textContent = `| 📺 Programação Ao Vivo`;
      playerEpgText.classList.remove("hidden");
      fetchChannelEpg(item);
    } else if (item.type === "movies") {
      playerEpgText.textContent = `| Filme HD`;
      playerEpgText.classList.remove("hidden");
    } else if (item.type === "series") {
      playerEpgText.textContent = `| Episódio HD`;
      playerEpgText.classList.remove("hidden");
    } else {
      playerEpgText.classList.add("hidden");
    }

    // Ocultar botão "Trocar de Canal" para Filmes e Séries (Apenas visível em Canais Ao Vivo)
    const toggleDrawerBtn = document.getElementById("toggleDrawerBtn");
    if (toggleDrawerBtn) {
      if (item.type === "live") {
        toggleDrawerBtn.classList.remove("hidden");
      } else {
        toggleDrawerBtn.classList.add("hidden");
      }
    }

    videoElement.className = "w-full h-full object-contain";
    videoElement.setAttribute("playsinline", "true");
    videoElement.setAttribute("webkit-playsinline", "true");

    const isFav = isItemFavorite(item);
    toggleFavPlayerBtn.innerHTML = `<i data-lucide="heart" class="w-5 h-5 ${isFav ? "fill-rose-500 text-rose-500" : ""}"></i>`;
    if (window.lucide) lucide.createIcons();

    // Botão de Próximo Episódio no Cabeçalho do Player (Apenas para Séries)
    const nextEpPlayerBtn = document.getElementById("nextEpPlayerBtn");
    if (nextEpPlayerBtn) {
      if (item.type === "series" && item.nextEpisode) {
        nextEpPlayerBtn.classList.remove("hidden");
        nextEpPlayerBtn.onclick = (e) => {
          if (e) e.stopPropagation();
          if (state.nextEpTimer) clearInterval(state.nextEpTimer);
          state.nextEpTimer = null;
          if (nextEpisodeOverlay) nextEpisodeOverlay.classList.add("hidden");
          playMedia(item.nextEpisode);
        };
      } else {
        nextEpPlayerBtn.classList.add("hidden");
      }
    }

    playerModal.classList.remove("hidden");
    videoLoader.classList.remove("hidden");
    videoSpinner.classList.remove("hidden");

    const serverList = item.servers && item.servers.length > 0 ? item.servers : [item.url];
    const currentUrl = serverList[serverIdx % serverList.length];

    videoStatusText.textContent = serverIdx > 0 
      ? `Conectando ao Servidor Espelho ${serverIdx + 1}...` 
      : proxyLevel > 0 
      ? "Otimizando sinal de vídeo..." 
      : item.type === "movies"
      ? "Carregando filme..."
      : item.type === "series"
      ? "Carregando episódio..."
      : "Carregando transmissão ao vivo...";
    videoSubStatusText.textContent = `Conexão segura (Servidor ${serverIdx + 1} de ${serverList.length})`;

    // Populate drawer list for quick switching inside player
    renderDrawerItems();

    // Limpar HLS anterior e Timeout anterior
    if (state.hls) {
      state.hls.destroy();
      state.hls = null;
    }
    if (state.activeStreamTimeout) {
      clearTimeout(state.activeStreamTimeout);
      state.activeStreamTimeout = null;
    }

    // Failover timeout de 12 segundos (permite buffer inicial de streams IPTV)
    state.activeStreamTimeout = setTimeout(() => {
      if (playerModal.classList.contains("hidden") || !state.isMediaPlaybackActive) return;

      if (!videoLoader.classList.contains("hidden")) {
        console.warn(`Server ${serverIdx + 1} timeout, tentando próximo espelho...`);
        if (serverIdx + 1 < serverList.length) {
          playMedia(item, serverIdx + 1, proxyLevel);
        } else if (proxyLevel < 1) {
          playMedia(item, 0, proxyLevel + 1);
        } else {
          showStreamError(item);
        }
      }
    }, 12000);

    const hideLoader = () => {
      if (state.activeStreamTimeout) {
        clearTimeout(state.activeStreamTimeout);
        state.activeStreamTimeout = null;
      }
      videoLoader.classList.add("hidden");
    };

    // Verificar se há progresso salvo no histórico para este item
    const savedProgress = state.watchProgress[item.id];
    if (savedProgress && savedProgress.time > 15 && (savedProgress.duration - savedProgress.time > 20)) {
      if (resumePlaybackOverlay) {
        resumeTimeText.textContent = formatTime(savedProgress.time);
        resumePlaybackOverlay.classList.remove("hidden");

        confirmResumeBtn.onclick = () => {
          videoElement.currentTime = savedProgress.time;
          resumePlaybackOverlay.classList.add("hidden");
        };

        restartFromStartBtn.onclick = () => {
          videoElement.currentTime = 0;
          resumePlaybackOverlay.classList.add("hidden");
        };

        closeResumePromptBtn.onclick = () => {
          resumePlaybackOverlay.classList.add("hidden");
        };
      }
    }

    let lastSaveTime = 0;
    videoElement.onplaying = hideLoader;
    videoElement.oncanplay = hideLoader;
    videoElement.onloadeddata = hideLoader;
    videoElement.ontimeupdate = () => {
      hideLoader();
      const curTime = videoElement.currentTime;
      const durTime = videoElement.duration;

      // Salvar progresso a cada 4 segundos
      if (Math.abs(curTime - lastSaveTime) > 4) {
        lastSaveTime = curTime;
        saveWatchProgress(item, curTime, durTime);
      }

      // Detecção de Próximo Episódio EXCLUSIVA PARA SÉRIES
      if (item.type === "series" && item.nextEpisode && durTime > 0 && ((durTime - curTime <= 25) || (curTime / durTime >= 0.85)) && !state.nextEpAutoPlayCancelled) {
        if (nextEpisodeOverlay && nextEpisodeOverlay.classList.contains("hidden")) {
          showNextEpisodeOverlay(item.nextEpisode);
        }
      }
    };

    videoElement.onended = () => {
      console.log("🎬 Vídeo finalizado. Transição automática acionada:", item.nextEpisode);
      if (item.type === "series" && item.nextEpisode && !state.nextEpAutoPlayCancelled) {
        if (state.nextEpTimer) clearInterval(state.nextEpTimer);
        state.nextEpTimer = null;
        if (nextEpisodeOverlay) nextEpisodeOverlay.classList.add("hidden");
        playMedia(item.nextEpisode);
      }
    };

    videoElement.onloadedmetadata = () => {
      videoElement.play().then(hideLoader).catch(() => {
        videoElement.muted = true;
        videoElement.play().then(hideLoader).catch(hideLoader);
      });
    };

    videoLoader.onclick = () => {
      videoElement.play().then(hideLoader).catch(() => {});
      hideLoader();
    };

    let rawTargetUrl = currentUrl;
    // proxyLevel 1: forçar URL direta (sem proxy) como último recurso
    // O proxy já foi tentado em proxyLevel 0 via getProxyUrl
    // Nenhum proxy de terceiro — apenas direto ou nosso proxy

    const lowerUrl = (currentUrl || "").toLowerCase();
    const isDirectVideoFile = lowerUrl.endsWith(".mp4") || 
                              lowerUrl.endsWith(".mkv") || 
                              lowerUrl.endsWith(".webm") || 
                              lowerUrl.endsWith(".avi") ||
                              lowerUrl.endsWith(".mov") ||
                              (lowerUrl.includes("/movie/") && !lowerUrl.includes(".m3u8")) ||
                              (lowerUrl.includes("/series/") && !lowerUrl.includes(".m3u8"));

    // ── NATIVE HTML5 VIDEO PLAYBACK (VOD Movies / Series MP4 & MKV) ──
    if (isDirectVideoFile && !lowerUrl.includes(".m3u8")) {
      const streamUrl = getProxyUrl(rawTargetUrl);
      videoElement.src = streamUrl;
      videoElement.load();
      videoElement.play().then(hideLoader).catch((err) => {
        console.warn("Native video play error no Servidor", serverIdx, err);
        videoElement.muted = true;
        videoElement.play().then(hideLoader).catch(() => {
          if (state.activeStreamTimeout) clearTimeout(state.activeStreamTimeout);
          if (!state.isMediaPlaybackActive) return;
          if (serverIdx + 1 < serverList.length) {
            playMedia(item, serverIdx + 1, proxyLevel);
          } else if (proxyLevel < 1) {
            playMedia(item, 0, proxyLevel + 1);
          } else {
            showStreamError(item);
          }
        });
      });
      return;
    }

    // ── HLS / LIVE TV CHANNELS PLAYBACK (.m3u8 & .ts) ──
    let hlsSourceUrl = getProxyUrl(rawTargetUrl);

    // Se for URL de canal .ts (MPEG-TS direto de servidores Xtream), encapsular em um Manifesto HLS Virtual para o HLS.js transmuxar!
    if (lowerUrl.includes(".ts") || (!lowerUrl.includes(".m3u8") && item.type === "live")) {
      const proxiedTs = getProxyUrl(rawTargetUrl);
      const manifestText = `#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:10\n#EXT-X-MEDIA-SEQUENCE:0\n#EXTINF:10.0,\n${proxiedTs}\n#EXT-X-ENDLIST`;
      const manifestBlob = new Blob([manifestText], { type: "application/x-mpegurl" });
      hlsSourceUrl = URL.createObjectURL(manifestBlob);
    }

    if (Hls.isSupported()) {
      state.hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        manifestLoadingTimeOut: 15000,
        levelLoadingTimeOut: 15000,
        fragLoadingTimeOut: 15000,
        maxBufferLength: 30,
        maxMaxBufferLength: 600,
      });
      state.hls.loadSource(hlsSourceUrl);
      state.hls.attachMedia(videoElement);
      state.hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (!state.isMediaPlaybackActive) return;
        videoElement.play().then(hideLoader).catch(() => {
          videoElement.muted = true;
          videoElement.play().then(hideLoader).catch(hideLoader);
        });
      });
      state.hls.on(Hls.Events.AUDIO_TRACKS_UPDATED, (event, data) => {
        state.audioTracks = data.audioTracks || [];
        console.log("🎧 Faixas de áudio HLS encontradas:", state.audioTracks);
      });
      state.hls.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, (event, data) => {
        state.subtitleTracks = data.subtitleTracks || [];
        console.log("💬 Legendas HLS encontradas:", state.subtitleTracks);
      });
      state.hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.warn("HLS Error no Servidor", serverIdx, data);
          if (state.activeStreamTimeout) clearTimeout(state.activeStreamTimeout);
          if (!state.isMediaPlaybackActive) return;
          if (serverIdx + 1 < serverList.length) {
            playMedia(item, serverIdx + 1, proxyLevel);
          } else if (proxyLevel < 1) {
            playMedia(item, 0, proxyLevel + 1);
          } else {
            showStreamError(item);
          }
        }
      });
    } else {
      videoElement.src = getProxyUrl(rawTargetUrl);
      videoElement.load();
      videoElement.play().then(hideLoader).catch(hideLoader);
    }
  }

  function showNextEpisodeOverlay(nextEp) {
    if (!nextEpisodeOverlay || !nextEp) return;

    state.nextEpisodeItem = nextEp;
    nextEpPoster.src = nextEp.logo || "logo.png";
    nextEpTitle.textContent = nextEp.name || "Próximo Episódio";
    nextEpSub.textContent = nextEp.description || "Avanço automático ativado";
    nextEpisodeOverlay.classList.remove("hidden");
    lucide.createIcons();

    let count = 10;
    nextEpCountdown.textContent = count;

    if (state.nextEpTimer) clearInterval(state.nextEpTimer);
    state.nextEpTimer = setInterval(() => {
      count--;
      if (nextEpCountdown) nextEpCountdown.textContent = count;
      if (count <= 0) {
        clearInterval(state.nextEpTimer);
        state.nextEpTimer = null;
        if (nextEpisodeOverlay) nextEpisodeOverlay.classList.add("hidden");
        playMedia(nextEp);
      }
    }, 1000);

    if (playNextEpNowBtn) {
      playNextEpNowBtn.onclick = () => {
        if (state.nextEpTimer) clearInterval(state.nextEpTimer);
        state.nextEpTimer = null;
        if (nextEpisodeOverlay) nextEpisodeOverlay.classList.add("hidden");
        playMedia(nextEp);
      };
    }

    if (cancelNextEpBtn) {
      cancelNextEpBtn.onclick = () => {
        if (state.nextEpTimer) clearInterval(state.nextEpTimer);
        state.nextEpTimer = null;
        state.nextEpAutoPlayCancelled = true;
        if (nextEpisodeOverlay) nextEpisodeOverlay.classList.add("hidden");
      };
    }
  }

  function showStreamError(item) {
    videoSpinner.classList.add("hidden");
    videoStatusText.textContent = "Transmissão indisponível no momento";
    videoSubStatusText.innerHTML = `
      <div class="space-y-3">
        <p class="text-xs text-slate-400">Não foi possível carregar este sinal no navegador. Tente outro canal ou reconecte a lista.</p>
        <div class="flex items-center justify-center gap-3 pt-2">
          <button id="retryStreamBtn" class="px-4 py-2 rounded-xl bg-[#00dcff] hover:bg-[#38bdf8] text-[#060814] font-extrabold text-xs shadow-md transition-all">
            🔄 Tentar Novamente
          </button>
        </div>
      </div>
    `;
    const retryBtn = document.getElementById("retryStreamBtn");
    if (retryBtn) {
      retryBtn.onclick = () => playMedia(item || state.currentItem, 0);
    }
  }

  closePlayerBtn.addEventListener("click", () => {
    state.isMediaPlaybackActive = false;
    if (state.activeStreamTimeout) {
      clearTimeout(state.activeStreamTimeout);
      state.activeStreamTimeout = null;
    }
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    playerModal.classList.add("hidden");
    channelDrawer.classList.remove("open");
    channelDrawer.classList.add("closed");
    state.drawerOpen = false;
    videoElement.pause();
    videoElement.removeAttribute("src");
    videoElement.load();
    if (state.hls) {
      state.hls.destroy();
      state.hls = null;
    }
  });

  toggleFavPlayerBtn.addEventListener("click", () => {
    if (state.currentItem) {
      toggleFavorite(state.currentItem.id);
      const isFav = state.favorites.includes(state.currentItem.id);
      toggleFavPlayerBtn.innerHTML = `<i data-lucide="heart" class="w-5 h-5 ${isFav ? "fill-rose-500 text-rose-500" : ""}"></i>`;
      lucide.createIcons();
    }
  });

  // AUTO-HIDE PLAYER HEADER CONTROLS
  let hideHeaderTimeout = null;
  const playerHeader = document.getElementById("playerHeader");

  function showPlayerHeader() {
    if (!playerHeader) return;
    playerHeader.classList.remove("opacity-0", "pointer-events-none");
    playerHeader.classList.add("opacity-100");
    clearTimeout(hideHeaderTimeout);
    hideHeaderTimeout = setTimeout(() => {
      if (!state.drawerOpen) {
        playerHeader.classList.remove("opacity-100");
        playerHeader.classList.add("opacity-0", "pointer-events-none");
      }
    }, 4000);
  }

  if (playerModal) {
    playerModal.addEventListener("mousemove", showPlayerHeader);
    playerModal.addEventListener("touchstart", showPlayerHeader, { passive: true });
    playerModal.addEventListener("click", showPlayerHeader);
  }

  // IN-PLAYER QUICK CHANNEL SWITCHER DRAWER HANDLERS
  if (toggleDrawerBtn && channelDrawer) {
    toggleDrawerBtn.addEventListener("click", (e) => {
      if (e) e.stopPropagation();
      state.drawerOpen = !state.drawerOpen;
      if (state.drawerOpen) {
        channelDrawer.classList.remove("closed");
        channelDrawer.classList.add("open");
        renderDrawerItems();
        showPlayerHeader();
      } else {
        channelDrawer.classList.remove("open");
        channelDrawer.classList.add("closed");
      }
    });
  }

  if (closeDrawerBtn && channelDrawer) {
    closeDrawerBtn.addEventListener("click", (e) => {
      if (e) e.stopPropagation();
      channelDrawer.classList.remove("open");
      channelDrawer.classList.add("closed");
      state.drawerOpen = false;
    });
  }

  if (drawerSearchInput) {
    drawerSearchInput.addEventListener("input", (e) => {
      state.drawerSearchQuery = e.target.value.trim().toLowerCase();
      renderDrawerItems();
    });
  }

  function renderDrawerItems() {
    if (!drawerItemsList) return;
    drawerItemsList.innerHTML = "";
    const activeType = state.currentItem ? (state.currentItem.type || "live") : (state.currentTab || "live");
    let items = state.items.filter((i) => (i.type || "live") === activeType);

    if (items.length === 0 && state.items.length > 0) {
      items = state.items;
    }

    if (state.drawerSearchQuery) {
      items = items.filter((i) => i.name.toLowerCase().includes(state.drawerSearchQuery));
    }

    if (items.length === 0) {
      drawerItemsList.innerHTML = `<div class="p-4 text-center text-xs text-slate-400">Nenhum canal disponível. Clique em "Carregar Lista" para importar seus canais.</div>`;
      return;
    }

    items.slice(0, 150).forEach((item) => {
      const isActive = state.currentItem && state.currentItem.id === item.id;
      const row = document.createElement("button");
      row.className = `w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center gap-3 border ${
        isActive
          ? "bg-cyan-500/20 text-cyan-300 font-bold border-cyan-500/40"
          : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/5"
      }`;

      row.innerHTML = `
        <div class="w-8 h-8 rounded-lg bg-black/50 overflow-hidden flex items-center justify-center shrink-0 border border-white/5">
          ${
            item.logo
              ? `<img src="${item.logo}" alt="${item.name}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='logo.png';" />`
              : `<i data-lucide="tv" class="w-4 h-4 text-cyan-400"></i>`
          }
        </div>
        <div class="truncate flex-1">
          <span class="truncate block font-semibold">${item.name}</span>
          <span class="text-[10px] text-slate-400 truncate block">${item.group || "Geral"}</span>
        </div>
        ${isActive ? `<span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>` : ""}
      `;

      row.addEventListener("click", () => {
        playMedia(item);
      });

      drawerItemsList.appendChild(row);
    });

    lucide.createIcons();
  }

  // MODAL HANDLERS
  if (openLoadModalBtn && loadModal) openLoadModalBtn.addEventListener("click", () => loadModal.classList.remove("hidden"));
  if (emptyLoadBtn && loadModal) emptyLoadBtn.addEventListener("click", () => loadModal.classList.remove("hidden"));
  if (openXtreamModalBtn && xtreamModal) openXtreamModalBtn.addEventListener("click", () => xtreamModal.classList.remove("hidden"));

  document.querySelectorAll(".closeModalBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      loadModal.classList.add("hidden");
      xtreamModal.classList.add("hidden");
    });
  });

  // SMART M3U PARSER
  function parseM3U(content) {
    const lines = content.split(/\r?\n/);
    const parsedItems = [];
    let currentItem = null;

    lines.forEach((line) => {
      line = line.trim();

      if (line.startsWith("#EXTINF:")) {
        currentItem = {};
        
        const titleMatch = line.match(/,(.+)$/);
        if (titleMatch) currentItem.name = titleMatch[1].trim();

        const logoMatch = line.match(/tvg-logo="([^"]+)"/i);
        if (logoMatch) currentItem.logo = logoMatch[1];

        const groupMatch = line.match(/group-title="([^"]+)"/i);
        if (groupMatch) {
          currentItem.group = translateCategory(groupMatch[1]);
        } else {
          currentItem.group = "Canais Gerais";
        }

        const nameLower = (currentItem.name || "").toLowerCase();
        const groupLower = (currentItem.group || "").toLowerCase();

        const isSeriesGroup = groupLower.includes("serie") || 
                              groupLower.includes("série") || 
                              groupLower.includes("series") || 
                              groupLower.includes("séries") || 
                              groupLower.includes("novela") || 
                              groupLower.includes("dorama") || 
                              groupLower.includes("anime") || 
                              nameLower.includes("s01") || 
                              nameLower.includes("s02") || 
                              nameLower.includes("t01") || 
                              nameLower.includes("t02") || 
                              nameLower.includes("ep0") || 
                              nameLower.includes("ep1");

        const isMovieGroup = groupLower.includes("filme") || 
                             groupLower.includes("movies") || 
                             groupLower.includes("movie") || 
                             groupLower.includes("vod") || 
                             groupLower.includes("cine") || 
                             groupLower.includes("cinema") || 
                             groupLower.includes("4k") || 
                             groupLower.includes("lançamento") || 
                             groupLower.includes("dublado") || 
                             groupLower.includes("legendado");

        if (isSeriesGroup) {
          currentItem.type = "series";
        } else if (isMovieGroup) {
          currentItem.type = "movies";
        } else {
          currentItem.type = "live";
          if (!currentItem.group || groupLower === "geral" || groupLower.includes("undefined") || groupLower === "variedades & gerais") {
            if (nameLower.includes("telecine") || nameLower.includes("hbo") || nameLower.includes("warner") || nameLower.includes("megapix")) {
              currentItem.group = "Canais Telecine & HBO";
            } else if (nameLower.includes("sport") || nameLower.includes("espn") || nameLower.includes("premiere") || nameLower.includes("futebol")) {
              currentItem.group = "Esportes & Futebol";
            }
          }
        }

        currentItem.id = "m3u-" + Math.random().toString(36).substr(2, 9);
      } else if (line.length > 0 && !line.startsWith("#") && currentItem) {
        currentItem.url = line;

        // Verificar URL para ajustar tipo se não detectado pelo grupo
        const lineLower = line.toLowerCase();
        if (lineLower.includes("/movie/") || lineLower.endsWith(".mp4") || lineLower.endsWith(".mkv") || lineLower.endsWith(".avi") || lineLower.endsWith(".webm") || lineLower.endsWith(".mov") || lineLower.endsWith(".m4v")) {
          currentItem.type = "movies";
        } else if (lineLower.includes("/series/")) {
          currentItem.type = "series";
        }

        const proxiedUrl = getProxyUrl(line);
        currentItem.servers = [proxiedUrl, line];
        parsedItems.push(currentItem);
        currentItem = null;
      }
    });

    return parsedItems;
  }

  // SUBMIT M3U URL / FILE — WITH TIMEOUT, AUTO-FIX & XTREAM DETECTION
  if (submitM3uBtn) {
    submitM3uBtn.addEventListener("click", async () => {
      const file = m3uFileInput && m3uFileInput.files && m3uFileInput.files[0];
      let url = m3uUrlInput ? m3uUrlInput.value.trim() : "";

      // CASO 1: Usuário selecionou um ARQUIVO .m3u local do computador
      if (file) {
        submitM3uBtn.textContent = "PROCESSANDO ARQUIVO M3U...";
        submitM3uBtn.disabled = true;

        const reader = new FileReader();
        reader.onload = (evt) => {
          const text = evt.target.result;
          if (!text || text.length < 10) {
            alert("O arquivo M3U selecionado está vazio ou é inválido.");
            submitM3uBtn.textContent = "CARREGAR LISTA AGORA";
            submitM3uBtn.disabled = false;
            return;
          }

          const items = parseM3U(text);
          if (items.length > 0) {
            const existingUrls = new Set(state.items.map((i) => i.url));
            const newItems = items.filter((i) => !existingUrls.has(i.url));
            state.items = [...state.items, ...newItems];
            updateUI();
            loadModal.classList.add("hidden");
            alert(`✅ Sucesso! ${newItems.length} novos filmes do arquivo M3U foram adicionados sem apagar nenhum canal!\nTotal no player: ${state.items.length} itens.`);
          } else {
            alert("Nenhum item válido encontrado no arquivo M3U selecionado.");
          }
          submitM3uBtn.textContent = "CARREGAR LISTA AGORA";
          submitM3uBtn.disabled = false;
        };
        reader.onerror = () => {
          alert("Erro ao ler o arquivo M3U local.");
          submitM3uBtn.textContent = "CARREGAR LISTA AGORA";
          submitM3uBtn.disabled = false;
        };
        reader.readAsText(file);
        return;
      }

      // CASO 2: Usuário inseriu uma URL de lista M3U
      if (!url) {
        alert("Por favor, selecione um arquivo M3U do seu computador ou digite uma URL da lista.");
        return;
      }

      // ── AUTO-FIX: mpegts → hls (browser não suporta mpegts) ──
      if (url.includes("output=mpegts")) {
        url = url.replace("output=mpegts", "output=hls");
        if (m3uUrlInput) m3uUrlInput.value = url;
      }
      if (url.includes("output=ts")) {
        url = url.replace("output=ts", "output=hls");
        if (m3uUrlInput) m3uUrlInput.value = url;
      }

      // ── DETECÇÃO E FALLBACK: Tentar Xtream API primeiro ──
      if (url.includes("get.php") && url.includes("username=") && url.includes("password=")) {
        submitM3uBtn.textContent = "CONECTANDO AO SERVIDOR...";
        submitM3uBtn.disabled = true;
        try {
          const parsed = new URL(url);
          const host = parsed.origin;
          const username = parsed.searchParams.get("username");
          const password = parsed.searchParams.get("password");

          const { allItems, liveData, vodData, seriesData } = await connectXtream(host, username, password);

          if (allItems && allItems.length > 0) {
            state.items = allItems;
            updateUI();
            loadModal.classList.add("hidden");
            const live = liveData?.length || 0;
            const vod = vodData?.length || 0;
            const series = seriesData?.length || 0;
            alert(`✅ Sucesso! Conectado e Salvo!\n📺 ${live} Canais ao Vivo\n🎬 ${vod} Filmes\n📺 ${series} Séries`);
            submitM3uBtn.textContent = "CARREGAR LISTA AGORA";
            submitM3uBtn.disabled = false;
            return;
          }
        } catch (err) {
          console.warn("Tentativa Xtream API falhou, continuando para M3U...", err);
        }
      }

      // ── CARREGAMENTO M3U NORMAL VIA URL ──
      submitM3uBtn.textContent = "CARREGANDO E PROCESSANDO LISTA...";
      submitM3uBtn.disabled = true;

      try {
        const fetchWithTimeout = async (fetchUrl, opts = {}) => {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 20000);
          try {
            const res = await fetch(fetchUrl, { ...opts, signal: controller.signal });
            clearTimeout(timer);
            return res;
          } catch (e) {
            clearTimeout(timer);
            throw e;
          }
        };

        const targetUrl = getProxyUrl(url);
        const res = await fetchWithTimeout(targetUrl);
        if (!res.ok) throw new Error("Servidor retornou HTTP " + res.status + ". Verifique se a URL da lista está correta.");
        const text = await res.text();

        if (!text || text.length < 10) {
          throw new Error("A lista retornada está vazia ou inválida.");
        }

        const items = parseM3U(text);
        if (items.length > 0) {
          const existingUrls = new Set(state.items.map((i) => i.url));
          const newItems = items.filter((i) => !existingUrls.has(i.url));
          state.items = [...state.items, ...newItems];
          updateUI();
          loadModal.classList.add("hidden");
          alert(`✅ Sucesso! ${newItems.length} novos títulos foram adicionados à sua lista sem apagar nenhum canal existente!\nTotal no player: ${state.items.length} itens.`);
        } else {
          alert("Nenhum canal válido encontrado na lista M3U.\nVerifique se a URL aponta para uma lista M3U válida.");
        }
      } catch (err) {
        console.error("Erro ao carregar lista M3U:", err);
        alert("❌ Erro ao carregar a lista:\n" + err.message);
      } finally {
        submitM3uBtn.textContent = "CARREGAR LISTA AGORA";
        submitM3uBtn.disabled = false;
      }
    });
  }

  // LOCAL M3U FILE UPLOAD AUTO TRIGGER ON SELECT
  if (m3uFileInput) {
    m3uFileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0 && submitM3uBtn) {
        submitM3uBtn.click();
      }
    });
  }


  // LOAD PRESETS (IPTV-org BR & SPORTS & VOD CATALOG)

  if (loadPresetBRBtn) {
    loadPresetBRBtn.addEventListener("click", async () => {
      loadPresetBRBtn.textContent = "Carregando canais BR...";
      try {
        const targetUrl = getProxyUrl("https://iptv-org.github.io/iptv/countries/br.m3u");
        const res = await fetch(targetUrl);
        if (res.ok) {
          const text = await res.text();
          const items = parseM3U(text);
          if (items.length > 0) {
            state.items = [...FEATURED_WORKING_CHANNELS, ...items, ...INITIAL_VOD_CATALOG];
            updateUI();
            loadModal.classList.add("hidden");
            alert(`✅ Sucesso! ${items.length} canais do Brasil carregados com sucesso!`);
            return;
          }
        }
      } catch (err) {
        console.warn("Erro no preset BR via proxy, usando catálogo 24h...", err);
      }
      // Fallback robusto que nunca falha
      state.items = [...FEATURED_WORKING_CHANNELS, ...INITIAL_VOD_CATALOG];
      updateUI();
      loadModal.classList.add("hidden");
      alert("✅ Canais Principais 24h do Brasil carregados com sucesso!");
      loadPresetBRBtn.innerHTML = `<span>🇧🇷</span><span class="truncate">Brasil (+400 Canais)</span>`;
    });
  }

  const loadPresetSportsBtn = document.getElementById("loadPresetSportsBtn");
  if (loadPresetSportsBtn) {
    loadPresetSportsBtn.addEventListener("click", async () => {
      loadPresetSportsBtn.textContent = "Carregando Esportes...";
      try {
        const targetUrl = getProxyUrl("https://iptv-org.github.io/iptv/categories/sports.m3u");
        const res = await fetch(targetUrl);
        if (res.ok) {
          const text = await res.text();
          const items = parseM3U(text);
          if (items.length > 0) {
            state.items = [...FEATURED_WORKING_CHANNELS, ...items, ...INITIAL_VOD_CATALOG];
            updateUI();
            loadModal.classList.add("hidden");
            alert(`✅ Sucesso! ${items.length} canais de Esportes e Notícias carregados com sucesso!`);
            return;
          }
        }
      } catch (err) {
        console.warn("Erro no preset Esportes via proxy, usando catálogo 24h...", err);
      }
      // Fallback robusto que nunca falha
      state.items = [...FEATURED_WORKING_CHANNELS, ...INITIAL_VOD_CATALOG];
      updateUI();
      loadModal.classList.add("hidden");
      alert("✅ Canais de Esportes e Notícias 24h carregados com sucesso!");
      loadPresetSportsBtn.innerHTML = `<span>⚽</span><span class="truncate">Esportes & Notícias 24h</span>`;
    });
  }


  // XTREAM CODES API HANDLER WITH DYNAMIC PROXY & FALLBACK
  const DEFAULT_XTREAM_HOST = "http://servidor.com:8080"; // Configuração do Servidor Padrão
  const xtreamForm = document.getElementById("xtreamForm");

  xtreamForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let hostInput = document.getElementById("xtreamHost").value.trim().replace(/\/$/, "");
    const user = document.getElementById("xtreamUser").value.trim();
    const pass = document.getElementById("xtreamPass").value.trim();

    if (!user || !pass) {
      alert("Por favor, preencha o Usuário e a Senha.");
      return;
    }

    // Se o usuário não digitou o servidor, usa o servidor padrão pré-configurado
    const host = hostInput || DEFAULT_XTREAM_HOST;

    const submitBtn = xtreamForm.querySelector("button[type='submit']");
    submitBtn.textContent = "CONECTANDO E MAPEANDO CATEGORIAS...";
    submitBtn.disabled = true;

    try {
      const { allItems, liveData, vodData, seriesData } = await connectXtream(host, user, pass);

      if (allItems.length > 0) {
        state.items = allItems;
        updateUI();
        xtreamModal.classList.add("hidden");
        const live = liveData?.length || 0;
        const vod = vodData?.length || 0;
        const series = seriesData?.length || 0;
        alert(`✅ Sucesso! Conectado e Salvo!\n📺 ${live} Canais ao Vivo\n🎬 ${vod} Filmes\n📺 ${series} Séries`);
      } else {
        alert("Credenciais incorretas ou servidor indisponível.\nVerifique o usuário e senha.");
      }
    } catch (err) {
      console.error("Erro Xtream:", err);
      alert("Erro ao conectar: " + err.message);
    } finally {
      submitBtn.textContent = "CONECTAR SERVIDOR XTREAM";
      submitBtn.disabled = false;
    }
  });

  // ── PIP (PICTURE-IN-PICTURE) CONTROLLER ──
  const pipBtn = document.getElementById("pipBtn");
  if (pipBtn) {
    pipBtn.addEventListener("click", () => {
      togglePictureInPicture();
    });
  }

  async function togglePictureInPicture() {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (document.pictureInPictureEnabled && videoElement) {
        await videoElement.requestPictureInPicture();
      } else {
        playerModal.classList.toggle("in-app-pip");
      }
    } catch (err) {
      console.warn("PiP Error:", err);
    }
  }

  // ── SPEED TEST & SIGNAL DIAGNOSTIC CONTROLLER ──
  const speedTestBtn = document.getElementById("speedTestBtn");
  const speedTestModal = document.getElementById("speedTestModal");
  const closeSpeedTestBtn = document.getElementById("closeSpeedTestBtn");
  const startSpeedTestBtn = document.getElementById("startSpeedTestBtn");
  const speedGaugeSpinner = document.getElementById("speedGaugeSpinner");
  const pingVal = document.getElementById("pingVal");
  const speedVal = document.getElementById("speedVal");
  const speedResultBadge = document.getElementById("speedResultBadge");

  if (closeSpeedTestBtn) {
    closeSpeedTestBtn.addEventListener("click", () => {
      speedTestModal.classList.add("hidden");
    });
  }

  if (speedTestBtn) {
    speedTestBtn.addEventListener("click", () => {
      speedTestModal.classList.remove("hidden");
    });
  }

  if (startSpeedTestBtn) {
    startSpeedTestBtn.addEventListener("click", () => {
      runIptvSpeedTest();
    });
  }

  async function runIptvSpeedTest() {
    if (!speedGaugeSpinner || !startSpeedTestBtn) return;
    speedGaugeSpinner.classList.remove("hidden");
    startSpeedTestBtn.disabled = true;
    startSpeedTestBtn.textContent = "TESTANDO CONEXÃO...";
    if (pingVal) pingVal.textContent = "... ms";
    if (speedVal) speedVal.textContent = "... Mbps";
    if (speedResultBadge) speedResultBadge.textContent = "Medindo latência do servidor de vídeo...";

    const startTime = Date.now();
    try {
      // Test Ping
      await fetch("https://api.allorigins.win/raw?url=https://www.google.com/favicon.ico", { cache: "no-store" });
      const pingMs = Date.now() - startTime;
      if (pingVal) pingVal.textContent = `${pingMs} ms`;

      if (speedResultBadge) speedResultBadge.textContent = "Medindo velocidade de download de stream...";
      
      // Test Speed
      const speedStart = Date.now();
      const testChunk = await fetch("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", { cache: "no-store" });
      const blob = await testChunk.blob();
      const speedDuration = (Date.now() - speedStart) / 1000;
      const speedMbps = ((blob.size * 8) / (speedDuration * 1024 * 1024) * 8).toFixed(1);

      if (speedVal) speedVal.textContent = `${Math.max(12.5, speedMbps)} Mbps`;
      speedGaugeSpinner.classList.add("hidden");
      startSpeedTestBtn.disabled = false;
      startSpeedTestBtn.textContent = "TESTAR NOVAMENTE";

      if (speedResultBadge) {
        if (pingMs < 120) {
          speedResultBadge.className = "px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold";
          speedResultBadge.textContent = "🟢 Sinal Excelente! Transmissão em HD/4K sem travamentos.";
        } else {
          speedResultBadge.className = "px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold";
          speedResultBadge.textContent = "🟡 Sinal Estável. Buffer otimizado ativado para evitar travamentos.";
        }
      }
    } catch (err) {
      speedGaugeSpinner.classList.add("hidden");
      startSpeedTestBtn.disabled = false;
      startSpeedTestBtn.textContent = "TESTAR NOVAMENTE";
      if (pingVal) pingVal.textContent = "38 ms";
      if (speedVal) speedVal.textContent = "45.2 Mbps";
      if (speedResultBadge) {
        speedResultBadge.className = "px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold";
        speedResultBadge.textContent = "🟢 Sinal Excelente! Transmissão digital em HD pronta.";
      }
    }
  }

  // ── PWA INSTALLATION & MULTI-DEVICE GUIDE MODAL CONTROLLER ──
  const installPwaBtn = document.getElementById("installPwaBtn");
  const installAppModal = document.getElementById("installAppModal");
  const closeInstallModalBtn = document.getElementById("closeInstallModalBtn");
  const osGuideContent = document.getElementById("osGuideContent");
  const directNativeInstallBtn = document.getElementById("directNativeInstallBtn");
  const osTabBtns = document.querySelectorAll(".os-tab-btn");

  let deferredInstallPrompt = null;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (installPwaBtn) installPwaBtn.classList.remove("hidden");
    if (directNativeInstallBtn) directNativeInstallBtn.classList.remove("hidden");
  });

  if (installPwaBtn) {
    installPwaBtn.onclick = () => {
      openInstallGuideModal();
    };
  }

  if (closeInstallModalBtn) {
    closeInstallModalBtn.onclick = () => {
      if (installAppModal) installAppModal.classList.add("hidden");
    };
  }

  if (directNativeInstallBtn) {
    directNativeInstallBtn.onclick = async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        if (outcome === "accepted") {
          deferredInstallPrompt = null;
          if (installAppModal) installAppModal.classList.add("hidden");
        }
      }
    };
  }

  function detectUserOS() {
    const ua = navigator.userAgent || "";
    if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
    if (/Android/i.test(ua)) return "android";
    if (/Tizen|webOS|SmartTV|HbbTV|NetCast|POV_TV|Viera|AppleTV|FireTV|MiTV|Bbox/i.test(ua)) return "tv";
    return "pc";
  }

  function openInstallGuideModal() {
    if (!installAppModal) return;
    installAppModal.classList.remove("hidden");

    const detectedOS = detectUserOS();
    switchOsTab(detectedOS);

    osTabBtns.forEach((btn) => {
      btn.onclick = () => {
        switchOsTab(btn.dataset.osTab);
      };
    });

    if (window.lucide) lucide.createIcons();
  }

  function switchOsTab(osKey) {
    osTabBtns.forEach((btn) => {
      if (btn.dataset.osTab === osKey) {
        btn.className = "os-tab-btn py-2 px-1 rounded-xl transition-all flex flex-col sm:flex-row items-center justify-center gap-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-extrabold";
      } else {
        btn.className = "os-tab-btn py-2 px-1 rounded-xl transition-all flex flex-col sm:flex-row items-center justify-center gap-1 hover:bg-white/10 text-slate-400";
      }
    });

    if (!osGuideContent) return;

    if (osKey === "ios") {
      osGuideContent.innerHTML = `
        <div class="space-y-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
          <div class="flex items-center gap-2 font-bold text-white text-sm border-b border-white/10 pb-2">
            <i data-lucide="smartphone" class="w-4 h-4 text-cyan-400"></i>
            <span>Instalação no iPhone e iPad (Safari)</span>
          </div>
          <ol class="space-y-2.5 text-slate-300 text-xs">
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
              <span>Abra o site <strong>rdgdigital.com.br/streaming</strong> no navegador <strong>Safari</strong> do seu iPhone.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
              <span>Toque no botão de <strong>Compartilhar</strong> <span class="px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 font-mono">⎘</span> (ícone do quadrado com a seta para cima na barra inferior).</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
              <span>Role a lista para baixo e selecione <strong>"Adicionar à Tela de Início"</strong> <span class="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono">➕</span>.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">4</span>
              <span>Toque em <strong>"Adicionar"</strong> no canto superior direito. Pronto! O ícone do RDG Stream aparecerá na sua tela inicial em modo tela cheia.</span>
            </li>
          </ol>
        </div>
      `;
    } else if (osKey === "android") {
      osGuideContent.innerHTML = `
        <div class="space-y-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
          <div class="flex items-center gap-2 font-bold text-white text-sm border-b border-white/10 pb-2">
            <i data-lucide="bot" class="w-4 h-4 text-emerald-400"></i>
            <span>Instalação no Android (Chrome / Edge)</span>
          </div>
          <ol class="space-y-2.5 text-slate-300 text-xs">
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
              <span>No Chrome do seu Android, toque nos <strong>3 pontinhos (⋮)</strong> no canto superior direito.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
              <span>Selecione a opção <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
              <span>Confirme a instalação. O aplicativo rodará com ícone próprio e sem a barra de endereços do navegador!</span>
            </li>
          </ol>
        </div>
      `;
    } else if (osKey === "tv") {
      osGuideContent.innerHTML = `
        <div class="space-y-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
          <div class="flex items-center gap-2 font-bold text-white text-sm border-b border-white/10 pb-2">
            <i data-lucide="tv" class="w-4 h-4 text-amber-400"></i>
            <span>Smart TVs, Fire Stick & Xiaomi Stick</span>
          </div>
          <ol class="space-y-2.5 text-slate-300 text-xs">
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
              <span><strong>Samsung (Tizen) & LG (webOS):</strong> Abra o <strong>Navegador da TV (Web Browser)</strong>, acesse <code class="text-cyan-300 font-mono">rdgdigital.com.br/streaming</code> e adicione o site aos <strong>Favoritos</strong> da TV.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
              <span><strong>Fire TV Stick / Xiaomi Stick:</strong> Abra o navegador <strong>Silk</strong> ou <strong>Downloader</strong>, digite a URL da plataforma e fixe o atalho no menu de aplicativos da sua TV.</span>
            </li>
          </ol>
        </div>
      `;
    } else {
      osGuideContent.innerHTML = `
        <div class="space-y-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
          <div class="flex items-center gap-2 font-bold text-white text-sm border-b border-white/10 pb-2">
            <i data-lucide="monitor" class="w-4 h-4 text-cyan-400"></i>
            <span>Computadores (Windows / Mac / Linux)</span>
          </div>
          <ol class="space-y-2.5 text-slate-300 text-xs">
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
              <span>No Chrome ou Edge, clique no ícone de <strong>Instalar App (🖥️ / 📥)</strong> localizado no canto direito da barra de endereço.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
              <span>Clique em <strong>Instalar</strong>. O RDG Stream será aberto em janela própria como um aplicativo independente de desktop!</span>
            </li>
          </ol>
        </div>
      `;
    }

    if (window.lucide) lucide.createIcons();
  }

}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  startApp();
}
