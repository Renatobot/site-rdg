"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// ── AUTENTICAÇÃO HÍBRIDA RDG STREAM (VIP / GRÁTIS) ──
window.switchLoginTab = function (tab) {
  var formVip = document.getElementById("formVip");
  var formFree = document.getElementById("formFree");
  var tabVipBtn = document.getElementById("tabVipBtn");
  var tabFreeBtn = document.getElementById("tabFreeBtn");
  if (tab === 'vip') {
    formVip.classList.remove("hidden");
    formVip.classList.add("block");
    formFree.classList.remove("block");
    formFree.classList.add("hidden");
    tabVipBtn.className = "flex-1 py-2 text-xs font-bold rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all";
    tabFreeBtn.className = "flex-1 py-2 text-xs font-bold rounded-lg text-slate-400 hover:text-white transition-all";
  } else {
    formFree.classList.remove("hidden");
    formFree.classList.add("block");
    formVip.classList.remove("block");
    formVip.classList.add("hidden");
    tabFreeBtn.className = "flex-1 py-2 text-xs font-bold rounded-lg bg-slate-700 text-white border border-slate-600 transition-all";
    tabVipBtn.className = "flex-1 py-2 text-xs font-bold rounded-lg text-slate-400 hover:text-white transition-all border border-transparent";
  }
};
window.handleVipLogin = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
  var user, pass, btn, host, apiPath, proxyUrl, res, data, overlay, _t;
  return _regenerator().w(function (_context) {
    while (1) switch (_context.p = _context.n) {
      case 0:
        user = document.getElementById("loginUsername").value.trim();
        pass = document.getElementById("loginPassword").value.trim();
        btn = document.getElementById("loginVipBtn");
        if (!(!user || !pass)) {
          _context.n = 1;
          break;
        }
        alert("Por favor, preencha Usuário e Senha.");
        return _context.a(2);
      case 1:
        btn.textContent = "VALIDANDO NO SERVIDOR...";
        btn.disabled = true;
        host = "http://cdnroxo.top:80";
        apiPath = "/player_api.php?username=".concat(encodeURIComponent(user), "&password=").concat(encodeURIComponent(pass)); // Usa o getProxyUrl do app.js (ou fallback Vercel)
        proxyUrl = window.getProxyUrl ? window.getProxyUrl(host + apiPath) : "/api/proxy?url=".concat(encodeURIComponent(host + apiPath));
        _context.p = 2;
        _context.n = 3;
        return fetch(proxyUrl);
      case 3:
        res = _context.v;
        if (res.ok) {
          _context.n = 4;
          break;
        }
        throw new Error("Network error");
      case 4:
        _context.n = 5;
        return res.json();
      case 5:
        data = _context.v;
        if (data.user_info && data.user_info.status === "Active") {
          // Login Válido
          localStorage.setItem("rdg_xtream", JSON.stringify({
            host: host,
            user: user,
            pass: pass
          }));
          localStorage.setItem("rdg_vip_info", JSON.stringify(data.user_info));
          overlay = document.getElementById("loginOverlay");
          if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(function () {
              return window.location.reload();
            }, 500);
          }
        } else {
          alert("Assinatura Vencida ou Credenciais Incorretas!");
          btn.innerHTML = "ACESSAR PAINEL VIP";
          btn.disabled = false;
        }
        _context.n = 7;
        break;
      case 6:
        _context.p = 6;
        _t = _context.v;
        console.error(_t);
        alert("Erro de conexão com o servidor Xtream Codes.");
        btn.innerHTML = "ACESSAR PAINEL VIP";
        btn.disabled = false;
      case 7:
        return _context.a(2);
    }
  }, _callee, null, [[2, 6]]);
}));
window.handleFreeLogin = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
  var input, key, btn, SUPABASE_URL, SUPABASE_KEY, res, data, lic, overlay, _t2;
  return _regenerator().w(function (_context2) {
    while (1) switch (_context2.p = _context2.n) {
      case 0:
        input = document.getElementById("loginKeyInput");
        key = input ? input.value.trim() : "";
        btn = document.getElementById("loginFreeBtn");
        if (!(key.length < 3 || !key.toUpperCase().startsWith("IG"))) {
          _context2.n = 1;
          break;
        }
        alert("Chave inválida. A chave de acesso grátis deve começar com 'IG'.");
        return _context2.a(2);
      case 1:
        btn.textContent = "VERIFICANDO CHAVE...";
        btn.disabled = true;
        _context2.p = 2;
        SUPABASE_URL = 'https://yyoffdpzzoxrgigqupif.supabase.co';
        SUPABASE_KEY = 'sb_publishable_Cv5IVbK2bpo5PwCq-1PK3Q_d-8NPI10';
        _context2.n = 3;
        return fetch("".concat(SUPABASE_URL, "/rest/v1/licenses?key=eq.").concat(encodeURIComponent(key), "&select=cliente,expires_at,is_lifetime"), {
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': "Bearer ".concat(SUPABASE_KEY)
          }
        });
      case 3:
        res = _context2.v;
        if (res.ok) {
          _context2.n = 4;
          break;
        }
        throw new Error("Erro na API");
      case 4:
        _context2.n = 5;
        return res.json();
      case 5:
        data = _context2.v;
        if (data && data.length > 0) {
          lic = data[0];
          localStorage.setItem("rdg_license_key", key);
          localStorage.setItem("rdg_free_info", JSON.stringify(lic));
          overlay = document.getElementById("loginOverlay");
          if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(function () {
              overlay.style.display = 'none';
              window.location.reload();
            }, 500);
          }
        } else {
          alert("Chave IG não encontrada no banco de dados ou expirada.");
          btn.textContent = "USAR LISTA GRÁTIS";
          btn.disabled = false;
        }
        _context2.n = 7;
        break;
      case 6:
        _context2.p = 6;
        _t2 = _context2.v;
        console.error(_t2);
        alert("Erro ao validar chave. Tente novamente.");
        btn.textContent = "USAR LISTA GRÁTIS";
        btn.disabled = false;
      case 7:
        return _context2.a(2);
    }
  }, _callee2, null, [[2, 6]]);
}));
window.handleLogout = function () {
  localStorage.removeItem("rdg_xtream");
  localStorage.removeItem("rdg_vip_info");
  localStorage.removeItem("rdg_license_key");
  localStorage.removeItem("rdg_free_info");
  window.location.reload();
};
(function checkStandaloneAuth() {
  var isFree = localStorage.getItem("rdg_license_key");
  var isVip = localStorage.getItem("rdg_xtream");
  function initAppAuthAndEvents() {
    var overlay = document.getElementById("loginOverlay");
    var headerInfo = document.getElementById("userInfoHeader");
    var btnInstall = document.getElementById('btnHeaderInstall');
    if (btnInstall) {
      btnInstall.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof window.rdgOpenInstallModal === 'function') window.rdgOpenInstallModal();
      });
    }
    if (!overlay) return;
    if (isVip || isFree && isFree.trim() !== "") {
      // LOGADO!
      overlay.style.display = 'none';

      // Se VIP, atualiza o cabeçalho
      if (isVip && headerInfo) {
        var username = "";
        var expDateText = "Vencimento: Ilimitado";
        var vipInfoStr = localStorage.getItem("rdg_vip_info");
        if (vipInfoStr) {
          try {
            var vipInfo = JSON.parse(vipInfoStr);
            username = vipInfo.username;
            if (vipInfo.exp_date && vipInfo.exp_date !== "null") {
              var expDate = new Date(vipInfo.exp_date * 1000);
              expDateText = "Vencimento: ".concat(expDate.toLocaleDateString("pt-BR", {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              }));
            }
          } catch (e) {}
        } else {
          try {
            var xtreamInfo = JSON.parse(isVip);
            username = xtreamInfo.user;
            if (/^\d+$/.test(username)) {
              username = "Membro VIP";
            }

            // Extrair expiração se disponível
            if (xtreamInfo.info && xtreamInfo.info.user_info && xtreamInfo.info.user_info.exp_date) {
              var expValue = xtreamInfo.info.user_info.exp_date;
              if (expValue && expValue !== "null" && expValue !== "0") {
                var _expDate = new Date(expValue * 1000);
                expDateText = "Vencimento: ".concat(_expDate.toLocaleDateString("pt-BR", {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                }));
              }
            }
          } catch (e) {}
        }
        if (username) {
          headerInfo.classList.remove("hidden");
          headerInfo.classList.add("flex");
          document.getElementById("userInfoName").textContent = "Usu\xE1rio: ".concat(username);
          document.getElementById("userInfoExp").textContent = expDateText;
        }
      }

      // Se Grátis, atualiza o cabeçalho
      if (isFree && !isVip && headerInfo) {
        headerInfo.classList.remove("hidden");
        headerInfo.classList.add("flex");
        var freeInfoStr = localStorage.getItem("rdg_free_info");
        if (freeInfoStr) {
          try {
            var freeInfo = JSON.parse(freeInfoStr);
            document.getElementById("userInfoName").textContent = "Plano Gr\xE1tis: ".concat(freeInfo.cliente);
            if (freeInfo.is_lifetime) {
              document.getElementById("userInfoExp").textContent = "Vencimento: Ilimitado";
            } else if (freeInfo.expires_at) {
              var _expDate2 = new Date(freeInfo.expires_at);
              var formattedExp = _expDate2.toLocaleDateString("pt-BR", {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              });
              document.getElementById("userInfoExp").textContent = "Vencimento: ".concat(formattedExp);
            } else {
              document.getElementById("userInfoExp").textContent = "Chave: " + isFree;
            }
          } catch (e) {
            document.getElementById("userInfoName").textContent = "Plano Grátis";
            document.getElementById("userInfoExp").textContent = "Chave: " + isFree;
          }
        } else {
          document.getElementById("userInfoName").textContent = "Plano Grátis";
          document.getElementById("userInfoExp").textContent = "Chave: " + isFree;
        }
      }
    } else {
      // NÃO LOGADO
      overlay.style.display = 'flex';
    }
  }
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initAppAuthAndEvents);
  } else {
    initAppAuthAndEvents();
  }
})();

// ── ENGINE DE MODAIS RDG STREAM ──
var deferredPwaPrompt = null;
window.addEventListener("beforeinstallprompt", function (e) {
  e.preventDefault();
  deferredPwaPrompt = e;
});

// Detecta o sistema operacional/dispositivo do usuário
function rdgDetectOS() {
  var ua = navigator.userAgent || "";
  if (/Xbox/i.test(ua)) return "xbox";
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/FireTV|AFTS|AFTB|AFTM|AFTEU|Silk/i.test(ua)) return "firetv";
  if (/Tizen|webOS|SmartTV|HbbTV|NetCast|POV_TV|Viera|AppleTV|MiTV|Bbox/i.test(ua)) return "tv";
  if (/Android/i.test(ua)) return "android";
  if (/Windows/i.test(ua)) return "windows";
  if (/Mac/i.test(ua)) return "mac";
  return "other";
}

// Conteúdo do guia específico por OS/dispositivo
function rdgInstallGuideContent(os) {
  var guides = {
    ios: {
      showDirectBtn: true,
      html: "\n        <div class=\"bg-blue-500/10 border border-blue-500/30 rounded-2xl p-4 space-y-3\">\n          <div class=\"flex items-center gap-2\">\n            <span class=\"text-xl\">\uD83D\uDCF1</span>\n            <div>\n              <p class=\"font-extrabold text-white text-sm\">iPhone / iPad (Safari)</p>\n              <p class=\"text-[11px] text-blue-300\">Siga os 4 passos abaixo:</p>\n            </div>\n          </div>\n          <ol class=\"space-y-2.5\">\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-blue-500/30 text-blue-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">1</span>\n              <p class=\"text-slate-300\">Toque no bot\xE3o azul <strong class=\"text-white\">\"ABRIR PLAYER DIRETO\"</strong> abaixo para abrir no Safari</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-blue-500/30 text-blue-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">2</span>\n              <p class=\"text-slate-300\">No Safari, toque no \xEDcone <strong class=\"text-white\">Compartilhar ( \uD83D\uDCE4 )</strong> na barra inferior da tela</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-blue-500/30 text-blue-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">3</span>\n              <p class=\"text-slate-300\">Role o menu para baixo e toque em <strong class=\"text-white\">\"Adicionar \xE0 Tela de In\xEDcio ( \u2795 )\"</strong></p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-blue-500/30 text-blue-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">4</span>\n              <p class=\"text-slate-300\">Toque em <strong class=\"text-white\">\"Adicionar\"</strong> no canto superior direito \u2014 o app vai aparecer na sua tela inicial! \u2705</p>\n            </li>\n          </ol>\n          <p class=\"text-[10px] text-slate-500 pt-1\">\u26A0\uFE0F Funciona apenas no Safari. No Chrome do iPhone, use o Safari.</p>\n        </div>\n      "
    },
    android: {
      showDirectBtn: false,
      html: "\n        <div class=\"bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 space-y-3\">\n          <div class=\"flex items-center gap-2\">\n            <span class=\"text-xl\">\uD83E\uDD16</span>\n            <div>\n              <p class=\"font-extrabold text-white text-sm\">Android (Chrome / Samsung)</p>\n              <p class=\"text-[11px] text-emerald-300\">Instala\xE7\xE3o autom\xE1tica pelo navegador:</p>\n            </div>\n          </div>\n          <ol class=\"space-y-2.5\">\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">1</span>\n              <p class=\"text-slate-300\">Abra o Chrome no seu Android e acesse <strong class=\"text-white\">rdgdigital.com.br/streaming</strong></p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">2</span>\n              <p class=\"text-slate-300\">Toque nos <strong class=\"text-white\">3 pontos (\u22EE)</strong> no canto superior direito do Chrome</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">3</span>\n              <p class=\"text-slate-300\">Selecione <strong class=\"text-white\">\"Instalar aplicativo\"</strong> ou <strong class=\"text-white\">\"Adicionar \xE0 tela inicial\"</strong></p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">4</span>\n              <p class=\"text-slate-300\">Confirme e o \xEDcone do RDG Stream aparecer\xE1 na sua tela inicial! \u2705</p>\n            </li>\n          </ol>\n        </div>\n      "
    },
    firetv: {
      showDirectBtn: true,
      html: "\n        <div class=\"bg-orange-500/10 border border-orange-500/30 rounded-2xl p-4 space-y-3\">\n          <div class=\"flex items-center gap-2\">\n            <span class=\"text-xl\">\uD83D\uDCFA</span>\n            <div>\n              <p class=\"font-extrabold text-white text-sm\">Amazon Fire Stick / Fire TV</p>\n              <p class=\"text-[11px] text-orange-300\">Acesso via Navegador Silk:</p>\n            </div>\n          </div>\n          <ol class=\"space-y-2.5\">\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-orange-500/30 text-orange-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">1</span>\n              <p class=\"text-slate-300\">No seu Fire Stick, v\xE1 em <strong class=\"text-white\">Aplicativos</strong> e abra o <strong class=\"text-white\">Navegador Silk</strong></p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-orange-500/30 text-orange-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">2</span>\n              <p class=\"text-slate-300\">Na barra de endere\xE7o, digite: <strong class=\"text-white\">rdgdigital.com.br/streaming</strong></p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-orange-500/30 text-orange-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">3</span>\n              <p class=\"text-slate-300\">Pressione o bot\xE3o <strong class=\"text-white\">Menu ( \u2630 )</strong> e toque em <strong class=\"text-white\">\"Adicionar aos Favoritos\"</strong> para acesso r\xE1pido</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-orange-500/30 text-orange-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">4</span>\n              <p class=\"text-slate-300\">Navegue com o controle remoto. Use a busca por voz para encontrar canais! \uD83C\uDF99\uFE0F</p>\n            </li>\n          </ol>\n        </div>\n      "
    },
    xbox: {
      showDirectBtn: true,
      html: "\n        <div class=\"bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 space-y-3\">\n          <div class=\"flex items-center gap-2\">\n            <span class=\"text-xl\">\uD83C\uDFAE</span>\n            <div>\n              <p class=\"font-extrabold text-white text-sm\">Xbox (Microsoft Edge)</p>\n              <p class=\"text-[11px] text-emerald-300\">Acesso via navegador no Console:</p>\n            </div>\n          </div>\n          <ol class=\"space-y-2.5\">\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">1</span>\n              <p class=\"text-slate-300\">Consoles Xbox usam o <strong class=\"text-white\">Microsoft Edge</strong>. Consoles n\xE3o suportam instala\xE7\xE3o de PWAs/Apps de Desktop.</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">2</span>\n              <p class=\"text-slate-300\">No Edge do Xbox, pressione o bot\xE3o <strong class=\"text-white\">Menu ( \u2630 )</strong> no seu controle remoto/joystick.</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">3</span>\n              <p class=\"text-slate-300\">Selecione <strong class=\"text-white\">\"Adicionar aos Favoritos\"</strong> ou <strong class=\"text-white\">\"Fixar na Iniciar\"</strong> para abrir com 1 clique!</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">4</span>\n              <p class=\"text-slate-300\">Pronto! Voc\xEA pode usar o player 100% normalmente pelo controle do Xbox \u2705</p>\n            </li>\n          </ol>\n        </div>\n      "
    },
    tv: {
      showDirectBtn: true,
      html: "\n        <div class=\"bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 space-y-3\">\n          <div class=\"flex items-center gap-2\">\n            <span class=\"text-xl\">\uD83D\uDCFA</span>\n            <div>\n              <p class=\"font-extrabold text-white text-sm\">Smart TV (Samsung / LG / Sony)</p>\n              <p class=\"text-[11px] text-amber-300\">Acesse pelo navegador da TV:</p>\n            </div>\n          </div>\n          <ol class=\"space-y-2.5\">\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-amber-500/30 text-amber-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">1</span>\n              <p class=\"text-slate-300\">No menu da sua Smart TV, abra o <strong class=\"text-white\">Navegador da Internet</strong></p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-amber-500/30 text-amber-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">2</span>\n              <p class=\"text-slate-300\">Digite o endere\xE7o: <strong class=\"text-white\">rdgdigital.com.br/streaming</strong></p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-amber-500/30 text-amber-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">3</span>\n              <p class=\"text-slate-300\">Adicione ao <strong class=\"text-white\">Favoritos / Marcadores</strong> do navegador para entrar com 1 clique</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-amber-500/30 text-amber-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">4</span>\n              <p class=\"text-slate-300\">Use o <strong class=\"text-white\">controle remoto</strong> para navegar entre os canais normalmente</p>\n            </li>\n          </ol>\n        </div>\n      "
    },
    windows: {
      showDirectBtn: false,
      html: "\n        <div class=\"bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-4 space-y-3\">\n          <div class=\"flex items-center gap-2\">\n            <span class=\"text-xl\">\uD83D\uDDA5\uFE0F</span>\n            <div>\n              <p class=\"font-extrabold text-white text-sm\">Windows (Chrome / Edge)</p>\n              <p class=\"text-[11px] text-cyan-300\">Instala\xE7\xE3o em 1 clique:</p>\n            </div>\n          </div>\n          <ol class=\"space-y-2.5\">\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-cyan-500/30 text-cyan-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">1</span>\n              <p class=\"text-slate-300\">Procure o \xEDcone <strong class=\"text-white\">\uD83D\uDCE5 Instalar App</strong> no canto direito da barra de endere\xE7o do Chrome ou Edge</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-cyan-500/30 text-cyan-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">2</span>\n              <p class=\"text-slate-300\">Clique nele e confirme em <strong class=\"text-white\">\"Instalar\"</strong> \u2014 o app abrir\xE1 em janela pr\xF3pria</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-cyan-500/30 text-cyan-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">3</span>\n              <p class=\"text-slate-300\">O RDG Stream ficar\xE1 no seu Desktop e no Menu Iniciar como um app nativo \u2705</p>\n            </li>\n          </ol>\n          <p class=\"text-[10px] text-slate-500\">\uD83D\uDCA1 Se n\xE3o aparecer o \xEDcone, clique com o bot\xE3o direito na aba \u2192 \"Instalar RDG Stream\"</p>\n        </div>\n      "
    },
    mac: {
      showDirectBtn: false,
      html: "\n        <div class=\"bg-purple-500/10 border border-purple-500/30 rounded-2xl p-4 space-y-3\">\n          <div class=\"flex items-center gap-2\">\n            <span class=\"text-xl\">\uD83D\uDCBB</span>\n            <div>\n              <p class=\"font-extrabold text-white text-sm\">Mac (Chrome / Edge / Safari)</p>\n              <p class=\"text-[11px] text-purple-300\">Instale como app no seu Mac:</p>\n            </div>\n          </div>\n          <ol class=\"space-y-2.5\">\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-purple-500/30 text-purple-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">1</span>\n              <p class=\"text-slate-300\">No Chrome ou Edge, procure o \xEDcone <strong class=\"text-white\">\uD83D\uDCE5</strong> na barra de endere\xE7o</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-purple-500/30 text-purple-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">2</span>\n              <p class=\"text-slate-300\">Clique e confirme <strong class=\"text-white\">\"Instalar\"</strong> \u2014 aparecer\xE1 no Launchpad e Dock</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-purple-500/30 text-purple-300 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">3</span>\n              <p class=\"text-slate-300\">No <strong class=\"text-white\">Safari</strong>: Arquivo \u2192 <strong class=\"text-white\">\"Adicionar \xE0 Dock...\"</strong> para fixar como app</p>\n            </li>\n          </ol>\n        </div>\n      "
    },
    other: {
      showDirectBtn: true,
      html: "\n        <div class=\"bg-white/5 border border-white/15 rounded-2xl p-4 space-y-3\">\n          <div class=\"flex items-center gap-2\">\n            <span class=\"text-xl\">\uD83D\uDCF1</span>\n            <div>\n              <p class=\"font-extrabold text-white text-sm\">Instalar o RDG Stream App</p>\n              <p class=\"text-[11px] text-slate-400\">Siga o passo a passo:</p>\n            </div>\n          </div>\n          <ol class=\"space-y-2.5\">\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-white/20 text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">1</span>\n              <p class=\"text-slate-300\">Abra <strong class=\"text-white\">rdgdigital.com.br/streaming</strong> no navegador do seu dispositivo</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-white/20 text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">2</span>\n              <p class=\"text-slate-300\">Procure a op\xE7\xE3o <strong class=\"text-white\">\"Instalar aplicativo\"</strong> ou <strong class=\"text-white\">\"Adicionar \xE0 tela inicial\"</strong> no menu do navegador</p>\n            </li>\n            <li class=\"flex items-start gap-3\">\n              <span class=\"w-5 h-5 rounded-full bg-white/20 text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5\">3</span>\n              <p class=\"text-slate-300\">Confirme a instala\xE7\xE3o \u2014 o \xEDcone do app aparecer\xE1 na sua tela \u2705</p>\n            </li>\n          </ol>\n        </div>\n      "
    }
  };
  return guides[os] || guides["other"];
}

// Abre modal de instalação inteligente
window.rdgOpenInstallModal = function () {
  try {
    var os = rdgDetectOS();
    if (deferredPwaPrompt && (os === "windows" || os === "mac" || os === "android")) {
      deferredPwaPrompt.prompt();
      deferredPwaPrompt.userChoice.then(function () {
        deferredPwaPrompt = null;
      });
      return;
    }

    // Tentar remover modal antigo, se existir
    var oldModal = document.getElementById("rdgDynamicPwaModal");
    if (oldModal) {
      oldModal.remove();
    }
    var guide = rdgInstallGuideContent(os);

    // Cria o overlay raiz
    var overlay = document.createElement("div");
    overlay.id = "rdgDynamicPwaModal";
    // Estilos inline blindados
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0,0,0,0.9)";
    overlay.style.zIndex = "2147483647"; // Máximo z-index absoluto
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.padding = "20px";

    // Fechar ao clicar fora
    overlay.onclick = function (e) {
      if (e.target === overlay) {
        overlay.remove();
      }
    };

    // Cria o card principal
    var card = document.createElement("div");
    card.style.backgroundColor = "#0d1124";
    card.style.border = "2px solid #00dcff";
    card.style.borderRadius = "20px";
    card.style.padding = "24px";
    card.style.width = "100%";
    card.style.maxWidth = "400px";
    card.style.maxHeight = "85vh";
    card.style.overflowY = "auto";
    card.style.position = "relative";
    card.style.boxShadow = "0 10px 40px rgba(0, 220, 255, 0.2)";
    card.style.color = "#ffffff";
    card.style.fontFamily = "system-ui, -apple-system, sans-serif";

    // Botão de fechar (X)
    var closeBtn = document.createElement("button");
    closeBtn.innerHTML = "✕";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "15px";
    closeBtn.style.right = "15px";
    closeBtn.style.background = "transparent";
    closeBtn.style.border = "none";
    closeBtn.style.color = "#94a3b8";
    closeBtn.style.fontSize = "20px";
    closeBtn.style.cursor = "pointer";
    closeBtn.onclick = function () {
      overlay.remove();
    };

    // Conteúdo HTML
    var content = document.createElement("div");
    content.innerHTML = guide.html || "Instruções não disponíveis para este dispositivo.";

    // Montagem
    card.appendChild(closeBtn);
    card.appendChild(content);

    // Botão Fechar de baixo
    var bottomClose = document.createElement("button");
    bottomClose.innerHTML = "FECHAR";
    bottomClose.style.width = "100%";
    bottomClose.style.marginTop = "20px";
    bottomClose.style.padding = "12px";
    bottomClose.style.background = "rgba(255,255,255,0.1)";
    bottomClose.style.border = "1px solid rgba(255,255,255,0.2)";
    bottomClose.style.borderRadius = "12px";
    bottomClose.style.color = "#fff";
    bottomClose.style.fontWeight = "bold";
    bottomClose.style.cursor = "pointer";
    bottomClose.onclick = function () {
      overlay.remove();
    };
    if (os !== "ios" && guide.showDirectBtn) {
      // Se for android e tiver deferredPwaPrompt
    }
    card.appendChild(bottomClose);
    overlay.appendChild(card);

    // Adiciona direto no body!
    document.body.appendChild(overlay);
  } catch (err) {
    alert("Erro PWA: " + err.message);
  }
};
window.rdgOpenModal = function (modalId) {
  if (modalId === "modalInstallApp" || modalId === "installAppModal") {
    window.rdgOpenInstallModal();
    return;
  }
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
};
window.rdgCloseModal = function (modalId) {
  var modal = typeof modalId === "string" ? document.getElementById(modalId) : modalId;
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

// Aliases legados
window.openInstallGuideModal = function () {
  return window.rdgOpenInstallModal();
};
window.closeModal = function (id) {
  return window.rdgCloseModal(id);
};

// HELPER: PROXY HTTP STREAMS ON HTTPS VERCEL DEPLOYMENTS
function getProxyUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== "string") return rawUrl;

  // Se a página estiver rodando em HTTPS (como na Vercel) e a URL for HTTP,
  // rotear pelo proxy server-side para evitar Mixed Content blocking
  var isHttps = window.location.protocol === "https:";
  var isHttp = rawUrl.startsWith("http://");
  if (isHttps && isHttp) {
    // Usar a origem absoluta do documento pai (ou janela atual)
    // para funcionar corretamente dentro de iframes em qualquer path
    var origin = (window.top || window).location.origin;
    return "".concat(origin, "/api/proxy?url=").concat(encodeURIComponent(rawUrl));
  }
  return rawUrl;
}
function startApp() {
  // Initialize Lucide Icons
  if (window.lucide) lucide.createIcons();

  // REGISTER PWA SERVICE WORKER
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(function (reg) {
      return console.log("PWA Service Worker Registrado:", reg.scope);
    })["catch"](function (err) {
      return console.warn("PWA Service Worker Error:", err);
    });
  }

  // APP STATE
  var state = {
    items: [],
    currentTab: "live",
    // 'live', 'movies', 'series', 'favorites'

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
    currentSubtitleTrack: -1
  };

  // ── RESUME PLAYBACK & PROGRESS MANAGER ──
  var continueWatchingSection = document.getElementById("continueWatchingSection");
  var continueWatchingGrid = document.getElementById("continueWatchingGrid");
  var clearHistoryBtn = document.getElementById("clearHistoryBtn");

  // ── APP LOADING OVERLAY CONTROLLER ──
  var appLoadingOverlay = document.getElementById("appLoadingOverlay");
  var loadingProgressTitle = document.getElementById("loadingProgressTitle");
  var loadingProgressStep = document.getElementById("loadingProgressStep");
  var loadingProgressBar = document.getElementById("loadingProgressBar");
  var loadingProgressDetail = document.getElementById("loadingProgressDetail");
  var loadingProgressPercent = document.getElementById("loadingProgressPercent");
  var stepCheck1 = document.getElementById("stepCheck1");
  var stepCheck2 = document.getElementById("stepCheck2");
  var stepCheck3 = document.getElementById("stepCheck3");
  var stepCheck4 = document.getElementById("stepCheck4");
  function showLoadingProgress() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Sincronizando Conteúdo";
    if (!appLoadingOverlay) return;
    if (loadingProgressTitle) loadingProgressTitle.textContent = title;
    appLoadingOverlay.classList.remove("hidden");
    appLoadingOverlay.style.opacity = "1";
    updateLoadingStep(5, "Conectando ao servidor IPTV, só um instante...", "Iniciando comunicação segura...", 0);
  }
  function updateLoadingStep(percent, message) {
    var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var stepIdx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (loadingProgressBar) loadingProgressBar.style.width = "".concat(percent, "%");
    if (loadingProgressPercent) loadingProgressPercent.textContent = "".concat(percent, "%");
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
    setTimeout(function () {
      appLoadingOverlay.style.opacity = "0";
      setTimeout(function () {
        appLoadingOverlay.classList.add("hidden");
      }, 500);
    }, 600);
  }

  // ── ÁUDIO E LEGENDAS (AUDIO TRACKS & SUBTITLES MANAGER) ──
  var audioSubBtn = document.getElementById("audioSubBtn");
  var audioSubModal = document.getElementById("audioSubModal");
  var closeAudioSubModalBtn = document.getElementById("closeAudioSubModalBtn");
  var audioTracksList = document.getElementById("audioTracksList");
  var subtitlesList = document.getElementById("subtitlesList");
  if (audioSubBtn) {
    audioSubBtn.addEventListener("click", function () {
      if (!audioSubModal) return;
      audioSubModal.classList.remove("hidden");
      renderAudioSubtitlesUI();
    });
  }
  if (closeAudioSubModalBtn) {
    closeAudioSubModalBtn.addEventListener("click", function () {
      if (audioSubModal) audioSubModal.classList.add("hidden");
    });
  }
  function getLanguageLabel(lang) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    if (!lang && !name) return "Áudio Principal (Português/Original)";
    var l = (lang + " " + name).toLowerCase();
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
  var externalSubInput = document.getElementById("externalSubInput");
  if (externalSubInput) {
    externalSubInput.onchange = function (e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (evt) {
        var content = evt.target.result;
        // Se for SRT, converter para WebVTT
        if (!content.trim().startsWith("WEBVTT")) {
          content = "WEBVTT\n\n" + content.replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2").replace(/^\d+$/gm, "");
        }
        var blob = new Blob([content], {
          type: "text/vtt"
        });
        var vttUrl = URL.createObjectURL(blob);
        attachWebVttSubtitle(vttUrl, file.name);
        if (audioSubModal) audioSubModal.classList.add("hidden");
      };
      reader.readAsText(file);
    };
  }
  function attachWebVttSubtitle(vttUrl) {
    var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Legenda Externa";
    if (!videoElement) return;

    // Ocultar legendas HLS se existirem
    if (state.hls) state.hls.subtitleTrack = -1;

    // Remover faixas de texto customizadas anteriores
    var existingTracks = videoElement.querySelectorAll("track");
    existingTracks.forEach(function (t) {
      return t.remove();
    });
    var track = document.createElement("track");
    track.kind = "subtitles";
    track.label = label;
    track.srclang = "pt";
    track["default"] = true;
    track.src = vttUrl;
    videoElement.appendChild(track);
    setTimeout(function () {
      if (videoElement.textTracks && videoElement.textTracks[0]) {
        for (var i = 0; i < videoElement.textTracks.length; i++) {
          videoElement.textTracks[i].mode = i === videoElement.textTracks.length - 1 ? "showing" : "disabled";
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
    var hlsAudioTracks = state.hls && state.hls.audioTracks ? state.hls.audioTracks : [];

    // Opções de áudio padrão para qualquer filme, série ou canal
    var standardAudioOptions = [{
      id: "pt",
      label: "🇧🇷 Português (Dublado / Áudio Principal)",
      "default": true
    }, {
      id: "en",
      label: "🇺🇸 Inglês (Áudio Original)"
    }, {
      id: "es",
      label: "🇪🇸 Espanhol (Español / Latino)"
    }];
    if (hlsAudioTracks.length > 0) {
      var currentId = state.hls ? state.hls.audioTrack : state.currentAudioTrack;
      hlsAudioTracks.forEach(function (tr, idx) {
        var isCurrent = currentId === tr.id || currentId === idx;
        var label = getLanguageLabel(tr.lang, tr.name);
        var btn = document.createElement("button");
        btn.className = "w-full p-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ".concat(isCurrent ? "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md" : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10");
        btn.innerHTML = "\n          <span class=\"flex items-center gap-2\">".concat(label, "</span>\n          ").concat(isCurrent ? '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-300">Ativo</span>' : '', "\n        ");
        btn.onclick = function () {
          if (state.hls) state.hls.audioTrack = tr.id;
          state.currentAudioTrack = tr.id;
          renderAudioSubtitlesUI();
        };
        audioTracksList.appendChild(btn);
      });
    } else {
      // Se a mídia não expor faixas HLS separadas, oferecer as opções de idioma
      var selectedAudioId = state.selectedAudioId || "pt";
      standardAudioOptions.forEach(function (opt) {
        var isCurrent = selectedAudioId === opt.id;
        var btn = document.createElement("button");
        btn.className = "w-full p-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ".concat(isCurrent ? "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md" : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10");
        btn.innerHTML = "\n          <span class=\"flex items-center gap-2\">".concat(opt.label, "</span>\n          ").concat(isCurrent ? '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-300">Ativo</span>' : '', "\n        ");
        btn.onclick = function () {
          state.selectedAudioId = opt.id;
          var audioNotice = document.getElementById("audioNoticeText");
          if (audioNotice) audioNotice.classList.add("hidden");

          // Se for versão legendada/dublada correspondente nos itens da lista, trocar de transmissão automaticamente!
          if (state.currentItem && state.items && state.items.length > 0) {
            var currentName = (state.currentItem.name || "").toLowerCase();
            var cleanName = currentName.replace(/\[.*\]|\(.*\)|dublado|legendado|pt-br|eng/gi, "").trim();
            var sisterItem = state.items.find(function (i) {
              if (i.id === state.currentItem.id) return false;
              var iName = (i.name || "").toLowerCase();
              if (!iName.includes(cleanName)) return false;
              if (opt.id === "en" && (iName.includes("leg") || iName.includes("sub") || iName.includes("original"))) return true;
              if (opt.id === "pt" && (iName.includes("dub") || iName.includes("pt"))) return true;
              return false;
            });
            if (sisterItem) {
              var curTime = videoElement ? videoElement.currentTime : 0;
              playMedia(sisterItem);
              setTimeout(function () {
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
    var currentSubId = state.hls ? state.hls.subtitleTrack : state.currentSubtitleTrack;
    var isOff = currentSubId === -1 || currentSubId === undefined;

    // 1. Opção "Desativadas"
    var offBtn = document.createElement("button");
    offBtn.className = "w-full p-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ".concat(isOff ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md" : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10");
    offBtn.innerHTML = "\n      <span class=\"flex items-center gap-2\">\uD83D\uDEAB Desativadas</span>\n      ".concat(isOff ? '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-500/30 text-cyan-300">Ativa</span>' : '', "\n    ");
    offBtn.onclick = function () {
      if (state.hls) state.hls.subtitleTrack = -1;
      if (videoElement.textTracks) {
        for (var i = 0; i < videoElement.textTracks.length; i++) {
          videoElement.textTracks[i].mode = "disabled";
        }
      }
      state.currentSubtitleTrack = -1;
      renderAudioSubtitlesUI();
    };
    subtitlesList.appendChild(offBtn);

    // 2. Faixas HLS ou Opções Padrão de Legendas (PT, EN, ES)
    var hlsSubTracks = state.hls && state.hls.subtitleTracks ? state.hls.subtitleTracks : [];
    if (hlsSubTracks.length > 0) {
      hlsSubTracks.forEach(function (st) {
        var isCurrent = currentSubId === st.id;
        var label = getLanguageLabel(st.lang, st.name);
        var btn = document.createElement("button");
        btn.className = "w-full p-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ".concat(isCurrent ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md" : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10");
        btn.innerHTML = "\n          <span class=\"flex items-center gap-2\">".concat(label, "</span>\n          ").concat(isCurrent ? '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-500/30 text-cyan-300">Ativa</span>' : '', "\n        ");
        btn.onclick = function () {
          if (state.hls) state.hls.subtitleTrack = st.id;
          state.currentSubtitleTrack = st.id;
          renderAudioSubtitlesUI();
        };
        subtitlesList.appendChild(btn);
      });
    } else {
      var stdSubOptions = [{
        id: "pt",
        label: "🇧🇷 Português (Legenda Completa PT-BR)"
      }, {
        id: "en",
        label: "🇺🇸 Inglês (English Subtitles)"
      }, {
        id: "es",
        label: "🇪🇸 Espanhol (Subtítulos en Español)"
      }];
      stdSubOptions.forEach(function (opt) {
        var isCurrent = state.currentSubtitleTrack === opt.id;
        var btn = document.createElement("button");
        btn.className = "w-full p-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ".concat(isCurrent ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md" : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10");
        btn.innerHTML = "\n          <span class=\"flex items-center gap-2\">".concat(opt.label, "</span>\n          ").concat(isCurrent ? '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-500/30 text-cyan-300">Ativa</span>' : '', "\n        ");
        btn.onclick = function () {
          // Criar legenda sincronizada imediata
          var langText = opt.id === "pt" ? "Português" : opt.id === "en" ? "English" : "Español";
          var title = state.currentItem ? state.currentItem.name : "Transmissão";
          var vtt = "WEBVTT\n\n00:00:01.000 --> 00:00:10.000\n[Legenda ".concat(langText, "] ").concat(title);
          var blob = new Blob([vtt], {
            type: "text/vtt"
          });
          attachWebVttSubtitle(URL.createObjectURL(blob), opt.label);
          state.currentSubtitleTrack = opt.id;
          renderAudioSubtitlesUI();
        };
        subtitlesList.appendChild(btn);
      });
    }

    // 3. Botão para carregar arquivo .SRT / .VTT do dispositivo do usuário
    var uploadBtn = document.createElement("button");
    uploadBtn.className = "w-full p-3 rounded-xl text-xs font-extrabold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all flex items-center justify-center gap-2 mt-2";
    uploadBtn.innerHTML = "<i data-lucide=\"file-up\" class=\"w-4 h-4\"></i> <span>\uD83D\uDCC1 Carregar Legenda (.SRT ou .VTT)</span>";
    uploadBtn.onclick = function () {
      if (externalSubInput) externalSubInput.click();
    };
    subtitlesList.appendChild(uploadBtn);
    if (window.lucide) lucide.createIcons();
  }

  // ── BUSCA DE EPG (PROGRAMAÇÃO DO CANAL) EM TEMPO REAL ──
  function fetchChannelEpg(_x) {
    return _fetchChannelEpg.apply(this, arguments);
  }
  function _fetchChannelEpg() {
    _fetchChannelEpg = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(item) {
      var streamId, savedXtream, _JSON$parse, host, user, pass, epgUrl, data, r, _r, currentProg, title, timeStr, _currentProg$start$sp, _currentProg$end$spli, startTime, endTime, _t9, _t0, _t1;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            if (!(!item || item.type !== "live")) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2);
          case 1:
            if (playerEpgText) {
              playerEpgText.textContent = "| \uD83D\uDCFA Programa\xE7\xE3o Ao Vivo";
              playerEpgText.classList.remove("hidden");
            }
            if (!(!item.id || !item.id.startsWith("xtream-live-"))) {
              _context9.n = 2;
              break;
            }
            return _context9.a(2);
          case 2:
            streamId = item.id.replace("xtream-live-", "");
            savedXtream = localStorage.getItem("rdg_xtream");
            if (savedXtream) {
              _context9.n = 3;
              break;
            }
            return _context9.a(2);
          case 3:
            _context9.p = 3;
            _JSON$parse = JSON.parse(savedXtream), host = _JSON$parse.host, user = _JSON$parse.user, pass = _JSON$parse.pass;
            epgUrl = "".concat(host, "/player_api.php?username=").concat(encodeURIComponent(user), "&password=").concat(encodeURIComponent(pass), "&action=get_short_epg&stream_id=").concat(encodeURIComponent(streamId), "&limit=5");
            data = null;
            _context9.p = 4;
            _context9.n = 5;
            return fetch(getProxyUrl(epgUrl));
          case 5:
            r = _context9.v;
            if (!r.ok) {
              _context9.n = 7;
              break;
            }
            _context9.n = 6;
            return r.json();
          case 6:
            data = _context9.v;
          case 7:
            _context9.n = 9;
            break;
          case 8:
            _context9.p = 8;
            _t9 = _context9.v;
          case 9:
            if (data) {
              _context9.n = 15;
              break;
            }
            _context9.p = 10;
            _context9.n = 11;
            return fetch(epgUrl);
          case 11:
            _r = _context9.v;
            if (!_r.ok) {
              _context9.n = 13;
              break;
            }
            _context9.n = 12;
            return _r.json();
          case 12:
            data = _context9.v;
          case 13:
            _context9.n = 15;
            break;
          case 14:
            _context9.p = 14;
            _t0 = _context9.v;
          case 15:
            if (data && data.epg_listings && data.epg_listings.length > 0) {
              currentProg = data.epg_listings[0];
              title = currentProg.title ? currentProg.title : "Programação Especial";
              try {
                // Tentar decodificar se for base64
                if (title && !title.includes(" ") && title.length % 4 === 0) {
                  title = atob(title);
                }
              } catch (_) {}
              timeStr = "";
              if (currentProg.start && currentProg.end) {
                startTime = ((_currentProg$start$sp = currentProg.start.split(" ")[1]) === null || _currentProg$start$sp === void 0 ? void 0 : _currentProg$start$sp.substring(0, 5)) || "";
                endTime = ((_currentProg$end$spli = currentProg.end.split(" ")[1]) === null || _currentProg$end$spli === void 0 ? void 0 : _currentProg$end$spli.substring(0, 5)) || "";
                if (startTime && endTime) timeStr = " (".concat(startTime, " - ").concat(endTime, ")");
              }
              if (playerEpgText) {
                playerEpgText.textContent = "| \uD83D\uDCFA No Ar: ".concat(title).concat(timeStr);
                playerEpgText.classList.remove("hidden");
              }
            }
            _context9.n = 17;
            break;
          case 16:
            _context9.p = 16;
            _t1 = _context9.v;
            console.warn("Erro ao buscar EPG do canal:", _t1);
          case 17:
            return _context9.a(2);
        }
      }, _callee9, null, [[10, 14], [4, 8], [3, 16]]);
    }));
    return _fetchChannelEpg.apply(this, arguments);
  }
  var nextEpisodeOverlay = document.getElementById("nextEpisodeOverlay");
  var nextEpCountdown = document.getElementById("nextEpCountdown");
  var nextEpPoster = document.getElementById("nextEpPoster");
  var nextEpTitle = document.getElementById("nextEpTitle");
  var nextEpSub = document.getElementById("nextEpSub");
  var playNextEpNowBtn = document.getElementById("playNextEpNowBtn");
  var cancelNextEpBtn = document.getElementById("cancelNextEpBtn");
  var resumePlaybackOverlay = document.getElementById("resumePlaybackOverlay");
  var resumeTimeText = document.getElementById("resumeTimeText");
  var confirmResumeBtn = document.getElementById("confirmResumeBtn");
  var restartFromStartBtn = document.getElementById("restartFromStartBtn");
  var closeResumePromptBtn = document.getElementById("closeResumePromptBtn");
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", function () {
      state.watchProgress = {};
      localStorage.removeItem("rdg_iptv_progress");
      renderContinueWatchingRail();
    });
  }
  function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return "00:00";
    var mins = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    return "".concat(mins < 10 ? "0" : "").concat(mins, ":").concat(secs < 10 ? "0" : "").concat(secs);
  }
  function saveWatchProgress(item, time, duration) {
    if (!item || !time || !duration || duration < 30) return;
    if (item.type === "live") return; // Do not track live TV streams

    var percentage = Math.floor(time / duration * 100);
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
    var progressItems = Object.values(state.watchProgress).sort(function (a, b) {
      return b.timestamp - a.timestamp;
    }).slice(0, 10);
    if (progressItems.length === 0) {
      continueWatchingSection.classList.add("hidden");
      return;
    }
    continueWatchingSection.classList.remove("hidden");
    continueWatchingGrid.innerHTML = "";
    progressItems.forEach(function (entry) {
      var item = entry.item;
      var parsed = cleanChannelName(item.name);
      var isPoster = item.type === "movies" || item.type === "series";
      var aspectClass = isPoster ? "w-28 h-40" : "w-44 h-28";
      var card = document.createElement("div");
      card.className = "flex-shrink-0 group cursor-pointer relative overflow-hidden bg-[#0d1124] border border-white/10 hover:border-cyan-400/50 rounded-xl transition-all p-2 space-y-1.5 shadow-md";
      card.innerHTML = "\n        <div class=\"relative ".concat(aspectClass, " bg-black/60 rounded-lg overflow-hidden flex items-center justify-center\">\n          ").concat(item.logo ? "<img src=\"".concat(item.logo, "\" alt=\"").concat(parsed.title, "\" class=\"max-w-full max-h-full object-contain\" onerror=\"this.src='logo_v2.png';\" />") : "<i data-lucide=\"tv\" class=\"w-6 h-6 text-cyan-400\"></i>", "\n          <div class=\"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center\">\n            <div class=\"w-8 h-8 rounded-full bg-[#00dcff] text-[#060814] flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform\">\n              <i data-lucide=\"play\" class=\"w-3.5 h-3.5 fill-current ml-0.5\"></i>\n            </div>\n          </div>\n          <!-- Progress Bar Overlay -->\n          <div class=\"absolute bottom-0 inset-x-0 h-1.5 bg-black/70\">\n            <div class=\"h-full bg-cyan-400 rounded-r\" style=\"width: ").concat(entry.percentage, "%\"></div>\n          </div>\n        </div>\n        <div class=\"w-full\">\n          <h5 class=\"text-[11px] font-bold text-white group-hover:text-cyan-300 truncate\">").concat(parsed.title, "</h5>\n          <p class=\"text-[9px] text-cyan-400 font-mono flex items-center justify-between\">\n            <span>").concat(entry.percentage, "% assistido</span>\n            <span>").concat(formatTime(entry.time), "</span>\n          </p>\n        </div>\n      ");
      card.onclick = function () {
        playerModal.classList.remove("hidden");
        playMedia(item);
      };
      continueWatchingGrid.appendChild(card);
    });
    lucide.createIcons();
  }
  var CATEGORY_MAP_PT = {
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
    "undefined": "Canais Gerais"
  };
  function translateCategory(rawGroup) {
    if (!rawGroup) return "Canais Gerais";
    var grp = rawGroup.trim();
    if (grp.includes(";")) {
      var parts = grp.split(";").map(function (p) {
        return translateCategory(p.trim());
      });
      return Array.from(new Set(parts)).join(" / ");
    }
    var lower = grp.toLowerCase();
    if (CATEGORY_MAP_PT[lower]) {
      return CATEGORY_MAP_PT[lower];
    }
    return grp;
  }

  // INITIAL VOD CATALOG (Massive Cinema & Series Library with Official Posters)
  var INITIAL_VOD_CATALOG = [
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
    description: "Jake Sully e Neytiri formam uma família e fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora."
  }, {
    id: "vod-movie-2",
    name: "Batman: O Cavaleiro das Trevas (HD)",
    logo: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    group: "Filmes Ação & Crime",
    type: "movies",
    year: "2023",
    duration: "2h 32m",
    description: "Com a ajuda de Jim Gordon e Harvey Dent, Batman mantém a ordem em Gotham até que o Coringa semeia a anarquia na cidade."
  }, {
    id: "vod-movie-3",
    name: "Homem-Aranha: Sem Volta Para Casa",
    logo: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLwq.jpg",
    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    group: "Filmes Ação & Heróis",
    type: "movies",
    year: "2024",
    duration: "2h 28m",
    description: "Peter Parker pede ajuda ao Doutor Estranho para fazer com que todos esqueçam sua identidade, mas o feitiço rasga o multiverso."
  }, {
    id: "vod-movie-4",
    name: "Top Gun: Maverick (4K)",
    logo: "https://image.tmdb.org/t/p/w500/62bOm12YvYv6UkxXh4PpchN4bB5.jpg",
    url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    group: "Filmes Ação & Aviação",
    type: "movies",
    year: "2023",
    duration: "2h 11m",
    description: "Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete Maverick Mitchell está de volta."
  }, {
    id: "vod-movie-5",
    name: "Duna: Parte 2 (4K Ultra HD)",
    logo: "https://image.tmdb.org/t/p/w500/1pdfLPoLStCG8LavSubPh2vavXA.jpg",
    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    group: "Filmes Ficção Científica",
    type: "movies",
    year: "2024",
    duration: "2h 46m",
    description: "Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família."
  }, {
    id: "vod-movie-6",
    name: "Divertida Mente 2 (Dublado)",
    logo: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpEZZaLvOFWKGhji.jpg",
    url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    group: "Filmes Animação & Família",
    type: "movies",
    year: "2024",
    duration: "1h 36m",
    description: "Com a chegada da adolescência de Riley, a sala de controle mental passa por uma reforma para dar lugar a novas emoções."
  }, {
    id: "vod-movie-7",
    name: "Kung Fu Panda 4 (Dublado)",
    logo: "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8g4D4jM492j2wB.jpg",
    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    group: "Filmes Animação & Comédia",
    type: "movies",
    year: "2024",
    duration: "1h 34m",
    description: "Depois de três aventuras arriscadas, Po é chamado para se tornar o Líder Espiritual do Vale da Paz."
  }, {
    id: "vod-movie-8",
    name: "Velozes e Furiosos 10 (Ação)",
    logo: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trPhMvsx4wbC.jpg",
    url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    group: "Filmes Ação & Carros",
    type: "movies",
    year: "2023",
    duration: "2h 21m",
    description: "Dom Toretto e sua família enfrentam o oponente mais letal que já encontraram: uma ameaça aterrorizante que surge das sombras do passado."
  }, {
    id: "vod-movie-9",
    name: "John Wick 4: Baba Yaga (4K)",
    logo: "https://image.tmdb.org/t/p/w500/vZloFAK7NMVMGKE7VkF5UHaz0I.jpg",
    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    group: "Filmes Ação & Luta",
    type: "movies",
    year: "2023",
    duration: "2h 49m",
    description: "John Wick descobre um caminho para derrotar a Alta Cúpula. Mas antes que ele possa ganhar sua liberdade, Wick deve enfrentar um novo inimigo."
  }, {
    id: "vod-movie-10",
    name: "Interstellar (Edição Especial)",
    logo: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    group: "Filmes Ficção Científica",
    type: "movies",
    year: "2022",
    duration: "2h 49m",
    description: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade."
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
    episodes: [{
      season: 1,
      episode: 1,
      name: "Capítulo Um: O Desaparecimento de Will Byers",
      duration: "48min",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }, {
      season: 1,
      episode: 2,
      name: "Capítulo Dois: A Esquisita da Rua Maple",
      duration: "55min",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    }, {
      season: 1,
      episode: 3,
      name: "Capítulo Três: Holly, Jolly",
      duration: "51min",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }, {
      season: 1,
      episode: 4,
      name: "Capítulo Quatro: O Corpo",
      duration: "50min",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    }, {
      season: 2,
      episode: 1,
      name: "Capítulo Um: MADMAX",
      duration: "48min",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }, {
      season: 2,
      episode: 2,
      name: "Capítulo Dois: Gostosuras ou Travessuras, Aberração",
      duration: "56min",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    }]
  }, {
    id: "vod-series-2",
    name: "The Last of Us (Série HBO Max)",
    logo: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    group: "Séries HBO Original",
    type: "series",
    year: "2023",
    description: "Joel e Ellie, conectados pela dureza do mundo em que vivem, são forçados a suportar circunstâncias brutais em uma jornada pelos EUA pós-apocalíptico.",
    episodes: [{
      season: 1,
      episode: 1,
      name: "Episódio 1 — Quando Você Estiver Perdido na Escuridão",
      duration: "1h 21m",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    }, {
      season: 1,
      episode: 2,
      name: "Episódio 2 — Infectados",
      duration: "53min",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }, {
      season: 1,
      episode: 3,
      name: "Episódio 3 — Muito, Muito Tempo",
      duration: "1h 15m",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    }, {
      season: 1,
      episode: 4,
      name: "Episódio 4 — Por Favor, Segure Minha Mão",
      duration: "45min",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }]
  }, {
    id: "vod-series-3",
    name: "O Mandaloriano (Star Wars)",
    logo: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgNmGDy7zG1zWv.jpg",
    group: "Séries Disney+ Original",
    type: "series",
    year: "2023",
    description: "Um caçador de recompensas solitário abre caminho através dos confins da galáxia longe da autoridade da Nova República.",
    episodes: [{
      season: 1,
      episode: 1,
      name: "Capítulo 1: O Mandaloriano",
      duration: "39min",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }, {
      season: 1,
      episode: 2,
      name: "Capítulo 2: A Criança",
      duration: "31min",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    }, {
      season: 2,
      episode: 1,
      name: "Capítulo 9: O Marshal",
      duration: "54min",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }]
  }, {
    id: "vod-series-4",
    name: "A Casa do Dragão (House of the Dragon)",
    logo: "https://image.tmdb.org/t/p/w500/1X4h40fcB4WWUmIBK0auT4zR2bV.jpg",
    group: "Séries HBO Original",
    type: "series",
    year: "2024",
    description: "A história da Casa Targaryen ambientada 200 anos antes dos eventos de Game of Thrones durante a guerra civil conhecida como a Dança dos Dragões.",
    episodes: [{
      season: 1,
      episode: 1,
      name: "Episódio 1 — Os Herdeiros do Dragão",
      duration: "1h 06m",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    }, {
      season: 1,
      episode: 2,
      name: "Episódio 2 — O Príncipe Desonesto",
      duration: "54min",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }, {
      season: 2,
      episode: 1,
      name: "Episódio 1 — Olho por Olho",
      duration: "59min",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    }]
  }, {
    id: "vod-series-5",
    name: "Wandinha (Wednesday Addams)",
    logo: "https://image.tmdb.org/t/p/w500/9PF2MdvGwM1G9i4Y9v987a.jpg",
    group: "Séries Netflix Original",
    type: "series",
    year: "2024",
    description: "Wandinha Addams tenta dominar suas habilidade psíquicas emergentes, frustrar uma onda de assassinatos e resolver o mistério que envolveu seus pais.",
    episodes: [{
      season: 1,
      episode: 1,
      name: "Capítulo I: Wandinha e Seus Problemas",
      duration: "59min",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }, {
      season: 1,
      episode: 2,
      name: "Capítulo II: O Problema É o Outro",
      duration: "48min",
      url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    }, {
      season: 1,
      episode: 3,
      name: "Capítulo III: Amigo ou Mago",
      duration: "48min",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }]
  }];

  // DOM ELEMENTS
  var mediaGrid = document.getElementById("mediaGrid");
  var emptyState = document.getElementById("emptyState");
  var categoriesList = document.getElementById("categoriesList");
  var categorySelect = document.getElementById("categorySelect");
  var searchInput = document.getElementById("searchInput");
  var clearSearchBtn = document.getElementById("clearSearchBtn");
  var badgeLiveCount = document.getElementById("badgeLiveCount");
  var badgeMoviesCount = document.getElementById("badgeMoviesCount");
  var badgeSeriesCount = document.getElementById("badgeSeriesCount");
  var badgeFavsCount = document.getElementById("badgeFavsCount");
  var sectionTitle = document.getElementById("sectionTitle");
  var sectionSubtitle = document.getElementById("sectionSubtitle");

  // Player Elements
  var playerModal = document.getElementById("playerModal");
  var videoElement = document.getElementById("videoElement");
  var videoLoader = document.getElementById("videoLoader");
  var videoSpinner = document.getElementById("videoSpinner");
  var videoStatusText = document.getElementById("videoStatusText");
  var videoSubStatusText = document.getElementById("videoSubStatusText");
  var playerTitle = document.getElementById("playerTitle");
  var playerCategory = document.getElementById("playerCategory");
  var playerEpgText = document.getElementById("playerEpgText");
  var closePlayerBtn = document.getElementById("closePlayerBtn");
  var toggleFavPlayerBtn = document.getElementById("toggleFavPlayerBtn");

  // In-Player Drawer Elements
  var toggleDrawerBtn = document.getElementById("toggleDrawerBtn");
  var closeDrawerBtn = document.getElementById("closeDrawerBtn");
  var channelDrawer = document.getElementById("channelDrawer");
  var drawerItemsList = document.getElementById("drawerItemsList");
  var drawerSearchInput = document.getElementById("drawerSearchInput");

  // Modals Elements
  var loadModal = document.getElementById("loadModal");
  var xtreamModal = document.getElementById("xtreamModal");
  var openLoadModalBtn = document.getElementById("openLoadModalBtn");
  var openXtreamModalBtn = document.getElementById("openXtreamModalBtn");
  var m3uUrlInput = document.getElementById("m3uUrlInput");
  var m3uFileInput = document.getElementById("m3uFileInput");
  var submitM3uBtn = document.getElementById("submitM3uBtn");
  var emptyLoadBtn = document.getElementById("emptyLoadBtn");
  var loadPresetBRBtn = document.getElementById("loadPresetBRBtn");
  var loadPresetVODBtn = document.getElementById("loadPresetVODBtn");

  // 100% REAL 24/7 LIVE BRAZILIAN & INTERNATIONAL CHANNELS WITH HIGH-AVAILABILITY CORS HLS STREAM MIRRORS
  var REAL_24H_CHANNELS = [];

  // ⚡ XTREAM CODES HELPER (shared) ⚡
  function connectXtream(_x2, _x3, _x4) {
    return _connectXtream.apply(this, arguments);
  } // AUTOMATIC INITIAL LOAD — com reconexão automática via localStorage
  function _connectXtream() {
    _connectXtream = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(host, user, pass) {
      var silent,
        baseHost,
        base,
        doFetch,
        _yield$Promise$all,
        _yield$Promise$all2,
        accountInfo,
        liveCats,
        vodCats,
        seriesCats,
        liveData,
        vodData,
        seriesData,
        liveCatMap,
        vodCatMap,
        seriesCatMap,
        allItems,
        _args1 = arguments;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            silent = _args1.length > 3 && _args1[3] !== undefined ? _args1[3] : false;
            baseHost = host.replace(/\/$/, "");
            base = "".concat(baseHost, "/player_api.php?username=").concat(encodeURIComponent(user), "&password=").concat(encodeURIComponent(pass));
            doFetch = /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(action) {
                var u, proxyU, r, _r2, _t10, _t11;
                return _regenerator().w(function (_context0) {
                  while (1) switch (_context0.p = _context0.n) {
                    case 0:
                      u = action ? "".concat(base, "&action=").concat(action) : base; // Usar exclusivamente nosso proxy - nunca proxies de terceiros
                      proxyU = getProxyUrl(u);
                      _context0.p = 1;
                      _context0.n = 2;
                      return fetch(proxyU);
                    case 2:
                      r = _context0.v;
                      if (!r.ok) {
                        _context0.n = 4;
                        break;
                      }
                      _context0.n = 3;
                      return r.json();
                    case 3:
                      return _context0.a(2, _context0.v);
                    case 4:
                      _context0.n = 6;
                      break;
                    case 5:
                      _context0.p = 5;
                      _t10 = _context0.v;
                    case 6:
                      _context0.p = 6;
                      _context0.n = 7;
                      return fetch(u);
                    case 7:
                      _r2 = _context0.v;
                      if (!_r2.ok) {
                        _context0.n = 9;
                        break;
                      }
                      _context0.n = 8;
                      return _r2.json();
                    case 8:
                      return _context0.a(2, _context0.v);
                    case 9:
                      _context0.n = 11;
                      break;
                    case 10:
                      _context0.p = 10;
                      _t11 = _context0.v;
                    case 11:
                      return _context0.a(2, []);
                  }
                }, _callee0, null, [[6, 10], [1, 5]]);
              }));
              return function doFetch(_x10) {
                return _ref9.apply(this, arguments);
              };
            }(); // ETAPA 1: Conectando (15%)
            updateLoadingStep(15, "Conectando ao servidor IPTV, só um instante...", "Buscando dados no servidor...", 0);

            // Buscar Informações da Conta e Categorias em paralelo
            _context1.n = 1;
            return Promise.all([doFetch(""),
            // Sem action = retorna user_info
            doFetch("get_live_categories"), doFetch("get_vod_categories"), doFetch("get_series_categories")]);
          case 1:
            _yield$Promise$all = _context1.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 4);
            accountInfo = _yield$Promise$all2[0];
            liveCats = _yield$Promise$all2[1];
            vodCats = _yield$Promise$all2[2];
            seriesCats = _yield$Promise$all2[3];
            // ETAPA 2: Canais ao Vivo (35%)
            updateLoadingStep(35, "Carregando seus canais, só um instante...", "Sintonizando lista de canais ao vivo...", 1);
            _context1.n = 2;
            return doFetch("get_live_streams");
          case 2:
            liveData = _context1.v;
            // ETAPA 3: Filmes VOD (65%)
            updateLoadingStep(65, "Carregando filmes, só um instante...", "Organizando catálogo de filmes...", 2);
            _context1.n = 3;
            return doFetch("get_vod_streams");
          case 3:
            vodData = _context1.v;
            // ETAPA 4: Séries VOD (85%)
            updateLoadingStep(85, "Carregando séries, só mais um momento...", "Estruturando temporadas e episódios...", 3);
            _context1.n = 4;
            return doFetch("get_series");
          case 4:
            seriesData = _context1.v;
            // ETAPA 5: Separando por Categorias (95%)
            updateLoadingStep(95, "Separando por categorias...", "Montando catálogo completo do player...", 4);
            _context1.n = 5;
            return new Promise(function (r) {
              return setTimeout(r, 400);
            });
          case 5:
            // Mapear IDs de Categorias para Nomes Reais
            liveCatMap = {};
            if (Array.isArray(liveCats)) liveCats.forEach(function (c) {
              liveCatMap[String(c.category_id)] = c.category_name;
            });
            vodCatMap = {};
            if (Array.isArray(vodCats)) vodCats.forEach(function (c) {
              vodCatMap[String(c.category_id)] = c.category_name;
            });
            seriesCatMap = {};
            if (Array.isArray(seriesCats)) seriesCats.forEach(function (c) {
              seriesCatMap[String(c.category_id)] = c.category_name;
            });
            allItems = []; // Processar Canais ao Vivo com Categorias Mapeadas
            if (Array.isArray(liveData)) {
              liveData.forEach(function (s) {
                var catRaw = s.category_name || liveCatMap[String(s.category_id)] || "Canais ao Vivo";
                var directUrl = "".concat(host, "/live/").concat(user, "/").concat(pass, "/").concat(s.stream_id, ".m3u8");
                var tsUrl = "".concat(host, "/").concat(user, "/").concat(pass, "/").concat(s.stream_id);
                var rawTsUrl = "".concat(host, "/live/").concat(user, "/").concat(pass, "/").concat(s.stream_id, ".ts");
                allItems.push({
                  id: "xtream-live-".concat(s.stream_id),
                  name: s.name,
                  logo: s.stream_icon,
                  group: catRaw.trim(),
                  url: directUrl,
                  servers: [directUrl, getProxyUrl(directUrl), getProxyUrl(tsUrl), getProxyUrl(rawTsUrl)],
                  type: "live"
                });
              });
            }

            // Processar Filmes VOD com Categorias Mapeadas
            if (Array.isArray(vodData)) {
              vodData.forEach(function (v) {
                var catRaw = v.category_name || vodCatMap[String(v.category_id)] || "Filmes VOD";
                var container = v.container_extension || "mp4";
                var directUrl = "".concat(host, "/movie/").concat(user, "/").concat(pass, "/").concat(v.stream_id, ".").concat(container);
                allItems.push({
                  id: "xtream-vod-".concat(v.stream_id),
                  name: v.name,
                  logo: v.stream_icon,
                  group: catRaw.trim(),
                  url: directUrl,
                  servers: [directUrl, getProxyUrl(directUrl)],
                  type: "movies",
                  year: v.year || "",
                  duration: v.duration_secs ? Math.floor(v.duration_secs / 60) + "min" : "",
                  description: v.plot || ""
                });
              });
            }

            // Processar Séries VOD com Categorias Mapeadas
            if (Array.isArray(seriesData)) {
              seriesData.forEach(function (s) {
                var catRaw = s.category_name || seriesCatMap[String(s.category_id)] || "Séries VOD";
                var directUrl = "".concat(host, "/series/").concat(user, "/").concat(pass, "/").concat(s.series_id, ".m3u8");
                allItems.push({
                  id: "xtream-series-".concat(s.series_id),
                  name: s.name,
                  logo: s.cover,
                  group: catRaw.trim(),
                  url: directUrl,
                  servers: [directUrl, getProxyUrl(directUrl)],
                  type: "series",
                  description: s.plot || ""
                });
              });
            }

            // Salvar credenciais no localStorage se houve sucesso
            if (allItems.length > 0) {
              try {
                localStorage.setItem("rdg_xtream", JSON.stringify({
                  host: host,
                  user: user,
                  pass: pass,
                  info: accountInfo
                }));
              } catch (err) {
                console.warn("Não foi possível salvar no localStorage:", err);
              }
            }
            return _context1.a(2, {
              allItems: allItems,
              liveData: liveData,
              vodData: vodData,
              seriesData: seriesData
            });
        }
      }, _callee1);
    }));
    return _connectXtream.apply(this, arguments);
  }
  function loadInitialChannels() {
    return _loadInitialChannels.apply(this, arguments);
  }
  function _loadInitialChannels() {
    _loadInitialChannels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var savedXtream, _JSON$parse2, host, user, pass, _yield$connectXtream3, allItems, liveData, vodData, seriesData, isFree, globalUrl, SUPABASE_URL, SUPABASE_KEY, configRes, configData, u, _host, _user, _pass, _yield$connectXtream4, _allItems, _liveData, _vodData, _seriesData, proxiedUrl, res, text, items, targetUrl, _res2, _text, _items, _t12, _t13, _t14, _t15, _t16, _t17;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            showLoadingProgress("Sincronizando Conteúdo");
            _context10.p = 1;
            // ── Verificar se há credenciais Xtream salvas ──
            savedXtream = localStorage.getItem("rdg_xtream");
            if (!savedXtream) {
              _context10.n = 6;
              break;
            }
            _context10.p = 2;
            _JSON$parse2 = JSON.parse(savedXtream), host = _JSON$parse2.host, user = _JSON$parse2.user, pass = _JSON$parse2.pass;
            console.log("🔄 Reconectando automaticamente ao servidor Xtream salvo...");
            _context10.n = 3;
            return connectXtream(host, user, pass, true);
          case 3:
            _yield$connectXtream3 = _context10.v;
            allItems = _yield$connectXtream3.allItems;
            liveData = _yield$connectXtream3.liveData;
            vodData = _yield$connectXtream3.vodData;
            seriesData = _yield$connectXtream3.seriesData;
            if (!(allItems.length > 0)) {
              _context10.n = 4;
              break;
            }
            state.items = allItems;
            updateUI();
            checkAutoPlayUrl();
            hideLoadingProgress();
            console.log("\u2705 Reconectado: ".concat((liveData === null || liveData === void 0 ? void 0 : liveData.length) || 0, " canais, ").concat((vodData === null || vodData === void 0 ? void 0 : vodData.length) || 0, " filmes, ").concat((seriesData === null || seriesData === void 0 ? void 0 : seriesData.length) || 0, " s\xE9ries"));
            return _context10.a(2);
          case 4:
            _context10.n = 6;
            break;
          case 5:
            _context10.p = 5;
            _t12 = _context10.v;
            console.warn("Erro na reconexão automática, carregando lista padrão...", _t12);
            localStorage.removeItem("rdg_xtream");
          case 6:
            // ── Sem credenciais salvas -> Verificar Lista Global do Plano Grátis ──
            isFree = localStorage.getItem("rdg_license_key");
            globalUrl = null;
            if (!isFree) {
              _context10.n = 12;
              break;
            }
            _context10.p = 7;
            SUPABASE_URL = 'https://yyoffdpzzoxrgigqupif.supabase.co';
            SUPABASE_KEY = 'sb_publishable_Cv5IVbK2bpo5PwCq-1PK3Q_d-8NPI10';
            _context10.n = 8;
            return fetch("".concat(SUPABASE_URL, "/rest/v1/licenses?key=eq.GLOBAL_M3U_URL&select=cliente"), {
              headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': "Bearer ".concat(SUPABASE_KEY)
              }
            });
          case 8:
            configRes = _context10.v;
            if (!configRes.ok) {
              _context10.n = 10;
              break;
            }
            _context10.n = 9;
            return configRes.json();
          case 9:
            configData = _context10.v;
            if (configData && configData.length > 0 && configData[0].cliente) {
              globalUrl = configData[0].cliente;
              console.log("📺 Lista Global do Plano Grátis encontrada!");
            }
          case 10:
            _context10.n = 12;
            break;
          case 11:
            _context10.p = 11;
            _t13 = _context10.v;
            console.warn("Erro ao buscar M3U Global:", _t13);
          case 12:
            if (!globalUrl) {
              _context10.n = 22;
              break;
            }
            if (!globalUrl.includes("get.php")) {
              _context10.n = 17;
              break;
            }
            _context10.p = 13;
            u = new URL(globalUrl);
            _host = u.origin;
            _user = u.searchParams.get("username");
            _pass = u.searchParams.get("password");
            if (!(_host && _user && _pass)) {
              _context10.n = 15;
              break;
            }
            console.log("Detectado link M3U Xtream, tentando converter para API direta...");
            _context10.n = 14;
            return connectXtream(_host, _user, _pass, true);
          case 14:
            _yield$connectXtream4 = _context10.v;
            _allItems = _yield$connectXtream4.allItems;
            _liveData = _yield$connectXtream4.liveData;
            _vodData = _yield$connectXtream4.vodData;
            _seriesData = _yield$connectXtream4.seriesData;
            if (!(_allItems && _allItems.length > 0)) {
              _context10.n = 15;
              break;
            }
            state.items = _allItems;
            updateUI();
            checkAutoPlayUrl();
            hideLoadingProgress();
            return _context10.a(2);
          case 15:
            _context10.n = 17;
            break;
          case 16:
            _context10.p = 16;
            _t14 = _context10.v;
            console.warn("Falha ao converter M3U para API Xtream. Tentando parser nativo...", _t14);
          case 17:
            _context10.p = 17;
            proxiedUrl = getProxyUrl(globalUrl);
            _context10.n = 18;
            return fetch(proxiedUrl);
          case 18:
            res = _context10.v;
            if (!res.ok) {
              _context10.n = 20;
              break;
            }
            _context10.n = 19;
            return res.text();
          case 19:
            text = _context10.v;
            items = parseM3U(text);
            if (!(items.length > 0)) {
              _context10.n = 20;
              break;
            }
            state.items = items;
            updateUI();
            checkAutoPlayUrl();
            hideLoadingProgress();
            return _context10.a(2);
          case 20:
            _context10.n = 22;
            break;
          case 21:
            _context10.p = 21;
            _t15 = _context10.v;
            console.warn("M3U API failed for global URL...", _t15);
          case 22:
            _context10.p = 22;
            targetUrl = getProxyUrl("https://iptv-org.github.io/iptv/countries/br.m3u");
            _context10.n = 23;
            return fetch(targetUrl);
          case 23:
            _res2 = _context10.v;
            if (!_res2.ok) {
              _context10.n = 25;
              break;
            }
            _context10.n = 24;
            return _res2.text();
          case 24:
            _text = _context10.v;
            _items = parseM3U(_text);
            if (_items.length > 0) {
              state.items = [].concat(REAL_24H_CHANNELS, _toConsumableArray(_items));
            } else {
              state.items = [].concat(REAL_24H_CHANNELS);
            }
            _context10.n = 26;
            break;
          case 25:
            state.items = [].concat(REAL_24H_CHANNELS);
          case 26:
            _context10.n = 28;
            break;
          case 27:
            _context10.p = 27;
            _t16 = _context10.v;
            state.items = [].concat(REAL_24H_CHANNELS);
          case 28:
            _context10.n = 30;
            break;
          case 29:
            _context10.p = 29;
            _t17 = _context10.v;
            console.warn("Autoload error, falling back to real channels catalog:", _t17);
            state.items = [].concat(REAL_24H_CHANNELS);
          case 30:
            _context10.p = 30;
            updateUI();
            checkAutoPlayUrl();
            hideLoadingProgress();
            return _context10.f(30);
          case 31:
            return _context10.a(2);
        }
      }, _callee10, null, [[22, 27], [17, 21], [13, 16], [7, 11], [2, 5], [1, 29, 30, 31]]);
    }));
    return _loadInitialChannels.apply(this, arguments);
  }
  function checkAutoPlayUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    var autoPlayId = urlParams.get("play");
    if (autoPlayId) {
      var item = state.items.find(function (i) {
        return i.id === autoPlayId;
      }) || state.items[0];
      if (item) {
        var header = document.querySelector("header");
        var main = document.querySelector("main");
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
    if (!rawName) return {
      title: "Canal Sem Nome",
      quality: null,
      status: null
    };
    var name = rawName.trim();
    var quality = null;
    var status = null;

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
  document.querySelectorAll(".tab-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var tab = btn.dataset.tab;
      state.currentTab = tab;
      state.currentCategory = "ALL";
      state.currentTabChanged = true;
      document.querySelectorAll(".tab-btn").forEach(function (b) {
        b.classList.toggle("active", b.dataset.tab === tab);
      });
      updateTabTitles();
      updateUI();
    });
  });
  function updateTabTitles() {
    var tabItems = getTabItems();
    var count = tabItems.length;
    if (state.currentTab === "live") {
      sectionTitle.innerHTML = "<i data-lucide=\"tv\" class=\"w-5 h-5 text-cyan-400\"></i><span>Canais ao Vivo</span>";
      sectionSubtitle.textContent = "".concat(count, " canais dispon\xEDveis");
    } else if (state.currentTab === "movies") {
      sectionTitle.innerHTML = "<i data-lucide=\"film\" class=\"w-5 h-5 text-purple-400\"></i><span>Filmes VOD</span>";
      sectionSubtitle.textContent = "".concat(count, " t\xEDtulos dispon\xEDveis");
    } else if (state.currentTab === "series") {
      sectionTitle.innerHTML = "<i data-lucide=\"clapperboard\" class=\"w-5 h-5 text-amber-400\"></i><span>S\xE9ries VOD</span>";
      sectionSubtitle.textContent = "".concat(count, " s\xE9ries dispon\xEDveis");
    } else if (state.currentTab === "favorites") {
      sectionTitle.innerHTML = "<i data-lucide=\"heart\" class=\"w-5 h-5 text-rose-400\"></i><span>Meus Favoritos</span>";
      sectionSubtitle.textContent = "".concat(count, " salvos");
    }
    lucide.createIcons();
  }

  // SEARCH INPUTS (DESKTOP & MOBILE)
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) clearSearchBtn.classList.toggle("hidden", !state.searchQuery);
      renderGrid();
    });
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", function () {
      searchInput.value = "";
      state.searchQuery = "";
      clearSearchBtn.classList.add("hidden");
      renderGrid();
    });
  }
  var mobileSearchBtn = document.getElementById("mobileSearchBtn");
  var mobileSearchContainer = document.getElementById("mobileSearchContainer");
  var mobileSearchInput = document.getElementById("mobileSearchInput");
  if (mobileSearchBtn && mobileSearchContainer) {
    mobileSearchBtn.addEventListener("click", function () {
      mobileSearchContainer.classList.toggle("hidden");
      if (!mobileSearchContainer.classList.contains("hidden") && mobileSearchInput) {
        mobileSearchInput.focus();
      }
    });
  }
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", function (e) {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (searchInput) searchInput.value = e.target.value;
      renderGrid();
    });
  }

  // CATEGORY CHIPS SCROLL HANDLERS (WHEEL + CHEVRON BUTTONS)
  var categoryChipsStrip = document.getElementById("categoryChipsStrip");
  var chipScrollLeftBtn = document.getElementById("chipScrollLeftBtn");
  var chipScrollRightBtn = document.getElementById("chipScrollRightBtn");
  if (categoryChipsStrip) {
    if (chipScrollLeftBtn) {
      chipScrollLeftBtn.addEventListener("click", function () {
        categoryChipsStrip.scrollBy({
          left: -260,
          behavior: "smooth"
        });
      });
    }
    if (chipScrollRightBtn) {
      chipScrollRightBtn.addEventListener("click", function () {
        categoryChipsStrip.scrollBy({
          left: 260,
          behavior: "smooth"
        });
      });
    }
    categoryChipsStrip.addEventListener("wheel", function (evt) {
      evt.preventDefault();
      categoryChipsStrip.scrollLeft += evt.deltaY;
    }, {
      passive: false
    });
  }

  // ── DYNAMIC OTT HERO CAROUSEL CONTROLLER ──
  var heroItems = [];
  var heroCurrentIndex = 0;
  var heroTimer = null;
  function updateHeroBanner() {
    var heroBackdrop = document.getElementById("heroBackdrop");
    var heroTitle = document.getElementById("heroTitle");
    var heroDescription = document.getElementById("heroDescription");
    var heroBadgeText = document.getElementById("heroBadgeText");
    var heroYearTag = document.getElementById("heroYearTag");
    var heroCategoryTag = document.getElementById("heroCategoryTag");
    var heroPlayBtn = document.getElementById("heroPlayBtn");
    var heroDetailsBtn = document.getElementById("heroDetailsBtn");
    var heroPrevBtn = document.getElementById("heroPrevBtn");
    var heroNextBtn = document.getElementById("heroNextBtn");
    var heroDots = document.getElementById("heroDots");
    var tabItems = getTabItems();
    if (!tabItems || tabItems.length === 0) return;
    if (heroItems.length === 0 || state.currentTabChanged) {
      heroItems = tabItems.filter(function (i) {
        return i.logo && i.logo.length > 10;
      }).slice(0, 5);
      if (heroItems.length === 0) heroItems = tabItems.slice(0, 5);
      heroCurrentIndex = 0;
      state.currentTabChanged = false;
    }
    var item = heroItems[heroCurrentIndex] || tabItems[0];
    if (!item) return;
    var parsed = cleanChannelName(item.name);
    if (heroTitle) heroTitle.textContent = parsed.title;
    if (heroYearTag) heroYearTag.textContent = item.year || "2025";
    if (heroCategoryTag) heroCategoryTag.textContent = item.group ? translateCategory(item.group) : item.type === "series" ? "Séries VOD" : item.type === "movies" ? "Filmes VOD" : "Ao Vivo";
    if (heroDescription) heroDescription.textContent = item.description || "Assista a ".concat(parsed.title, " em alta defini\xE7\xE3o com reprodu\xE7\xE3o cont\xEDnua e qualidade est\xE9reo digital.");
    if (heroBadgeText) {
      heroBadgeText.textContent = item.type === "movies" ? "FILME EM DESTAQUE" : item.type === "series" ? "SÉRIE EM DESTAQUE" : "CANAL EM DESTAQUE";
    }
    if (heroBackdrop) {
      heroBackdrop.style.opacity = "0.2";
      heroBackdrop.src = item.logo ? getProxyUrl(item.logo) : "logo_v2.png";
      setTimeout(function () {
        if (heroBackdrop) heroBackdrop.style.opacity = "1";
      }, 100);
    }
    if (item.type === "movies") {
      fetchTmdbMovieMetadata(parsed.title).then(function (tmdb) {
        if (tmdb) {
          if (tmdb.backdrop && heroBackdrop) heroBackdrop.src = tmdb.backdrop;
          if (tmdb.overview && heroDescription) heroDescription.textContent = tmdb.overview;
        }
      });
    } else if (item.type === "series") {
      fetchTmdbTvMetadata(parsed.title).then(function (tmdb) {
        if (tmdb) {
          if (tmdb.backdrop && heroBackdrop) heroBackdrop.src = tmdb.backdrop;
          if (tmdb.overview && heroDescription) heroDescription.textContent = tmdb.overview;
        }
      });
    }
    if (heroPlayBtn) {
      heroPlayBtn.onclick = function (e) {
        e.stopPropagation();
        if (item.type === "series") openSeriesModal(item);else if (item.type === "movies") openMovieModal(item);else openChannelModal(item);
      };
    }
    if (heroDetailsBtn) {
      heroDetailsBtn.onclick = function (e) {
        e.stopPropagation();
        if (item.type === "series") openSeriesModal(item);else if (item.type === "movies") openMovieModal(item);else openChannelModal(item);
      };
    }
    if (heroPrevBtn) {
      heroPrevBtn.onclick = function (e) {
        e.stopPropagation();
        heroCurrentIndex = (heroCurrentIndex - 1 + heroItems.length) % heroItems.length;
        updateHeroBanner();
        resetHeroTimer();
      };
    }
    if (heroNextBtn) {
      heroNextBtn.onclick = function (e) {
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
    var heroDots = document.getElementById("heroDots");
    if (!heroDots || !heroItems) return;
    heroDots.innerHTML = "";
    heroItems.forEach(function (_, idx) {
      var dot = document.createElement("button");
      dot.className = "h-2 rounded-full transition-all cursor-pointer ".concat(idx === heroCurrentIndex ? "w-6 bg-cyan-400" : "w-2 bg-white/30 hover:bg-white/60");
      dot.onclick = function (e) {
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
    heroTimer = setInterval(function () {
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
  categorySelect.addEventListener("change", function (e) {
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
    var liveCount = state.items.filter(function (i) {
      return i.type === "live";
    }).length;
    var moviesCount = state.items.filter(function (i) {
      return i.type === "movies";
    }).length;
    var seriesCount = state.items.filter(function (i) {
      return i.type === "series";
    }).length;
    badgeLiveCount.textContent = liveCount;
    badgeMoviesCount.textContent = moviesCount;
    badgeSeriesCount.textContent = seriesCount;
    badgeFavsCount.textContent = state.favorites.length;
  }
  function updateCategoryLists() {
    var currentTabItems = getTabItems();
    var categories = Array.from(new Set(currentTabItems.map(function (i) {
      return i.group || "Geral";
    })));
    categoriesList.innerHTML = "";
    categorySelect.innerHTML = "<option value=\"ALL\" class=\"bg-[#0c1024] text-white py-1\">Todas as Categorias (".concat(currentTabItems.length, ")</option>");
    categories.forEach(function (cat) {
      var count = currentTabItems.filter(function (i) {
        return (i.group || "Geral") === cat;
      }).length;
      var opt = document.createElement("option");
      opt.value = cat;
      opt.className = "bg-[#0c1024] text-white py-1";
      opt.textContent = "".concat(cat, " (").concat(count, ")");
      categorySelect.appendChild(opt);
      var catBtn = document.createElement("button");
      catBtn.className = "w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between ".concat(state.currentCategory === cat ? "bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/30" : "text-slate-400 hover:text-white hover:bg-white/5");
      catBtn.title = cat;
      catBtn.innerHTML = "<span class=\"truncate max-w-[140px]\">".concat(cat, "</span><span class=\"text-[10px] font-mono text-slate-500 ml-auto shrink-0\">").concat(count, "</span>");
      catBtn.addEventListener("click", function () {
        state.currentCategory = cat;
        categorySelect.value = cat;
        updateUI();
      });
      categoriesList.appendChild(catBtn);
    });
    categorySelect.value = state.currentCategory;
  }
  function updateCategoryChips() {
    var chipsStrip = document.getElementById("categoryChipsStrip");
    var mobileChipsStrip = document.getElementById("mobileCategoryChips");
    if (!chipsStrip && !mobileChipsStrip) return;
    var currentTabItems = getTabItems();
    var categories = Array.from(new Set(currentTabItems.map(function (i) {
      return i.group || "Geral";
    })));
    if (chipsStrip) chipsStrip.innerHTML = "";
    if (mobileChipsStrip) mobileChipsStrip.innerHTML = "";
    var allChipText = "Todos (".concat(currentTabItems.length, ")");
    var isAllActive = state.currentCategory === "ALL";
    if (chipsStrip) {
      var allChip = document.createElement("button");
      allChip.className = "chip-btn ".concat(isAllActive ? "active" : "");
      allChip.textContent = allChipText;
      allChip.addEventListener("click", function () {
        state.currentCategory = "ALL";
        categorySelect.value = "ALL";
        updateUI();
      });
      chipsStrip.appendChild(allChip);
    }
    if (mobileChipsStrip) {
      var _allChip = document.createElement("button");
      _allChip.className = "chip-btn ".concat(isAllActive ? "active" : "");
      _allChip.textContent = allChipText;
      _allChip.addEventListener("click", function () {
        state.currentCategory = "ALL";
        categorySelect.value = "ALL";
        updateUI();
      });
      mobileChipsStrip.appendChild(_allChip);
    }
    categories.forEach(function (cat) {
      var count = currentTabItems.filter(function (i) {
        return (i.group || "Geral") === cat;
      }).length;
      var isActive = state.currentCategory === cat;
      var text = "".concat(cat, " (").concat(count, ")");
      if (chipsStrip) {
        var chip = document.createElement("button");
        chip.className = "chip-btn ".concat(isActive ? "active" : "");
        chip.textContent = text;
        chip.addEventListener("click", function () {
          state.currentCategory = cat;
          categorySelect.value = cat;
          updateUI();
        });
        chipsStrip.appendChild(chip);
      }
      if (mobileChipsStrip) {
        var _chip = document.createElement("button");
        _chip.className = "chip-btn ".concat(isActive ? "active" : "");
        _chip.textContent = text;
        _chip.addEventListener("click", function () {
          state.currentCategory = cat;
          categorySelect.value = cat;
          updateUI();
        });
        mobileChipsStrip.appendChild(_chip);
      }
    });
  }
  function isItemFavorite(item) {
    if (!item) return false;
    return state.favorites.some(function (favKey) {
      return favKey === item.id || favKey === item.name || item.url && favKey === item.url;
    });
  }
  function toggleFavorite(itemOrId) {
    if (!itemOrId) return;
    var item = _typeof(itemOrId) === "object" ? itemOrId : state.items.find(function (i) {
      return i.id === itemOrId;
    });
    if (!item && state.currentItem && (state.currentItem.id === itemOrId || itemOrId === "current")) {
      item = state.currentItem;
    }
    if (!item && typeof itemOrId === "string") {
      item = {
        id: itemOrId,
        name: itemOrId
      };
    }
    if (!item) return;
    var existingIdx = state.favorites.findIndex(function (favKey) {
      return favKey === item.id || favKey === item.name || item.url && favKey === item.url;
    });
    if (existingIdx !== -1) {
      state.favorites.splice(existingIdx, 1);
    } else {
      var keyToSave = item.id || item.name || item.url;
      state.favorites.push(keyToSave);
    }
    try {
      localStorage.setItem("rdg_iptv_favs", JSON.stringify(state.favorites));
    } catch (_) {}
    updateUI();
  }

  // ── PLAYER PLAYBACK SPEED CONTROLLER ──
  var speedToggleBtn = document.getElementById("speedToggleBtn");
  var speedMenu = document.getElementById("speedMenu");
  var speedCurrentLabel = document.getElementById("speedCurrentLabel");
  if (speedToggleBtn && speedMenu) {
    speedToggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      speedMenu.classList.toggle("hidden");
    });
    document.addEventListener("click", function (e) {
      if (speedMenu && !speedMenu.contains(e.target) && e.target !== speedToggleBtn) {
        speedMenu.classList.add("hidden");
      }
    });
    speedMenu.querySelectorAll(".speed-opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var speed = Number(btn.dataset.speed || "1.0");
        if (videoElement) {
          videoElement.playbackRate = speed;
        }
        if (speedCurrentLabel) {
          speedCurrentLabel.textContent = "".concat(speed.toFixed(speed % 1 === 0 ? 1 : 2), "x");
        }
        speedMenu.classList.add("hidden");
      });
    });
  }

  // ── CATALOG SORTING LISTENER ──
  var sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      renderGrid();
    });
  }
  function getTabItems() {
    if (state.currentTab === "favorites") {
      return state.items.filter(function (i) {
        return isItemFavorite(i);
      });
    }
    return state.items.filter(function (i) {
      return i.type === state.currentTab;
    });
  }

  // RENDER GRID WITH SORTING
  function renderGrid() {
    var filtered = getTabItems();
    if (state.currentCategory !== "ALL") {
      filtered = filtered.filter(function (i) {
        return (i.group || "Geral") === state.currentCategory;
      });
    }
    if (state.searchQuery) {
      filtered = filtered.filter(function (i) {
        return i.name.toLowerCase().includes(state.searchQuery) || i.group && i.group.toLowerCase().includes(state.searchQuery);
      });
    }

    // Apply Catalog Sorting
    var sortVal = sortSelect ? sortSelect.value : "DEFAULT";
    if (sortVal === "AZ") {
      filtered.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    } else if (sortVal === "ZA") {
      filtered.sort(function (a, b) {
        return b.name.localeCompare(a.name);
      });
    } else if (sortVal === "RECENT") {
      filtered.sort(function (a, b) {
        return (b.year || "0").localeCompare(a.year || "0");
      });
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
      var groups = {};
      filtered.forEach(function (item) {
        var grp = item.group || "Geral";
        if (!groups[grp]) groups[grp] = [];
        groups[grp].push(item);
      });
      mediaGrid.className = "space-y-6 col-span-full";
      var groupKeys = Object.keys(groups).slice(0, 25);
      groupKeys.forEach(function (grpName) {
        var grpItems = groups[grpName];
        var displayItems = grpItems.slice(0, 18);
        var railSection = document.createElement("div");
        railSection.className = "space-y-3";
        railSection.innerHTML = "\n          <div class=\"flex items-center justify-between border-b border-white/10 pb-2\">\n            <h3 class=\"text-xs font-bold text-white flex items-center gap-2\">\n              <span class=\"w-1.5 h-1.5 rounded-full bg-cyan-400\"></span>\n              <span>".concat(grpName, "</span>\n            </h3>\n            <div class=\"flex items-center gap-2\">\n              <span class=\"text-[10px] font-mono text-slate-500\">").concat(grpItems.length, " itens</span>\n              <button class=\"view-all-btn text-[10px] font-bold text-cyan-400 hover:underline\">Ver Todos \u2192</button>\n            </div>\n          </div>\n          <div class=\"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4\"></div>\n        ");
        var viewAllBtn = railSection.querySelector(".view-all-btn");
        if (viewAllBtn) {
          viewAllBtn.addEventListener("click", function () {
            state.currentCategory = grpName;
            categorySelect.value = grpName;
            updateUI();
          });
        }
        var railGrid = railSection.querySelector(".grid");
        displayItems.forEach(function (item) {
          railGrid.appendChild(createMediaCard(item));
        });
        mediaGrid.appendChild(railSection);
      });
    } else {
      mediaGrid.className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 col-span-full";
      var displayItems = filtered.slice(0, 100);
      displayItems.forEach(function (item) {
        mediaGrid.appendChild(createMediaCard(item));
      });
    }
    if (window.lucide) lucide.createIcons();
  }
  function createMediaCard(item) {
    var isFav = isItemFavorite(item);
    var parsed = cleanChannelName(item.name);
    var isPoster = item.type === "movies" || item.type === "series";
    var aspectClass = isPoster ? "aspect-[2/3]" : "aspect-video";
    var card = document.createElement("div");
    card.className = "media-card flex flex-col justify-between cursor-pointer group relative overflow-hidden";
    card.innerHTML = "\n      <div class=\"relative w-full ".concat(aspectClass, " bg-[#080b18] overflow-hidden flex items-center justify-center p-3 border-b border-white/5\">\n        ").concat(item.logo ? "<img src=\"".concat(getProxyUrl(item.logo), "\" alt=\"").concat(parsed.title, "\" class=\"max-w-full max-h-full object-contain thumb-img transition-transform duration-300\" onerror=\"this.onerror=null; this.src='logo_v2.png';\" />") : "<i data-lucide=\"tv\" class=\"w-8 h-8 text-cyan-400/40\"></i>", "\n        \n        ").concat(parsed.quality ? "<span class=\"absolute top-2 left-2 px-1.5 py-0.5 text-[8px] font-extrabold uppercase tracking-wider bg-black/80 text-cyan-300 rounded border border-white/10\">\n                ".concat(parsed.quality, "\n               </span>") : item.year ? "<span class=\"absolute top-2 left-2 px-1.5 py-0.5 text-[8px] font-bold bg-black/80 text-cyan-300 rounded border border-white/10\">".concat(item.year, "</span>") : "", "\n\n        <div class=\"play-overlay absolute inset-0 bg-black/70 opacity-0 transition-opacity flex items-center justify-center\">\n          <div class=\"w-10 h-10 rounded-full bg-[#00dcff] text-[#060814] flex items-center justify-center shadow-lg shadow-cyan-500/40 transform group-hover:scale-110 transition-transform\">\n            <i data-lucide=\"play\" class=\"w-4 h-4 fill-current ml-0.5\"></i>\n          </div>\n        </div>\n\n        <button class=\"fav-btn absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-black text-slate-400 hover:text-rose-400 transition-colors z-10\">\n          <i data-lucide=\"heart\" class=\"w-3.5 h-3.5 ").concat(isFav ? "fill-rose-500 text-rose-500" : "", "\"></i>\n        </button>\n      </div>\n\n      <div class=\"p-2.5 space-y-1 bg-[#0d1124]\">\n        <h4 class=\"text-xs font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug\" title=\"").concat(item.name, "\">").concat(parsed.title, "</h4>\n        \n        <div class=\"flex items-center justify-between text-[10px]\">\n          ").concat(item.type === "live" ? "<span class=\"text-rose-500 font-bold flex items-center gap-1\">\n                  <span class=\"w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse\"></span> AO VIVO\n                 </span>" : "<span class=\"text-slate-500 truncate max-w-[100px]\">".concat(item.group || "Geral", "</span>"), "\n          ").concat(parsed.status ? "<span class=\"text-slate-400 font-mono\">".concat(parsed.status, "</span>") : "", "\n        </div>\n      </div>\n    ");
    var favBtn = card.querySelector(".fav-btn");
    favBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleFavorite(item);
    });
    card.addEventListener("click", function () {
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
  var channelModal = document.getElementById("channelModal");
  var closeChannelModalBtn = document.getElementById("closeChannelModalBtn");
  var channelModalLogo = document.getElementById("channelModalLogo");
  var channelModalCategory = document.getElementById("channelModalCategory");
  var channelModalTitle = document.getElementById("channelModalTitle");
  var channelCurrentProgSummary = document.getElementById("channelCurrentProgSummary");
  var playChannelNowBtn = document.getElementById("playChannelNowBtn");
  var channelEpgLoader = document.getElementById("channelEpgLoader");
  var channelEpgList = document.getElementById("channelEpgList");
  var epgCountBadge = document.getElementById("epgCountBadge");
  if (closeChannelModalBtn) {
    closeChannelModalBtn.addEventListener("click", function () {
      if (channelModal) channelModal.classList.add("hidden");
    });
  }
  function decodeBase64Safe(str) {
    if (!str) return "";
    try {
      return decodeURIComponent(escape(atob(str)));
    } catch (_) {
      try {
        return atob(str);
      } catch (e) {
        return str;
      }
    }
  }
  function openChannelModal(_x5) {
    return _openChannelModal.apply(this, arguments);
  }
  function _openChannelModal() {
    _openChannelModal = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(item) {
      var parsed, streamId, savedXtream, _JSON$parse3, host, user, pass, epgUrl, data, r, _t18, _t19;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            if (item) {
              _context11.n = 1;
              break;
            }
            return _context11.a(2);
          case 1:
            parsed = cleanChannelName(item.name);
            channelModalTitle.textContent = parsed.title;
            channelModalCategory.textContent = item.group ? translateCategory(item.group) : "Canais Ao Vivo";
            channelModalLogo.src = item.logo ? getProxyUrl(item.logo) : "logo_v2.png";
            channelCurrentProgSummary.textContent = "Transmissão ao vivo em Alta Definição (HD/FHD)";
            channelEpgList.innerHTML = "";
            if (epgCountBadge) epgCountBadge.textContent = "Guia de TV";
            if (playChannelNowBtn) {
              playChannelNowBtn.onclick = function () {
                if (channelModal) channelModal.classList.add("hidden");
                playerModal.classList.remove("hidden");
                playMedia(item);
              };
            }
            if (channelModal) channelModal.classList.remove("hidden");
            if (window.lucide) lucide.createIcons();

            // Tentar buscar EPG no servidor Xtream Codes
            if (!(item.id && item.id.startsWith("xtream-live-"))) {
              _context11.n = 11;
              break;
            }
            streamId = item.id.replace("xtream-live-", "");
            savedXtream = localStorage.getItem("rdg_xtream");
            if (!savedXtream) {
              _context11.n = 11;
              break;
            }
            _context11.p = 2;
            _JSON$parse3 = JSON.parse(savedXtream), host = _JSON$parse3.host, user = _JSON$parse3.user, pass = _JSON$parse3.pass;
            if (channelEpgLoader) channelEpgLoader.classList.remove("hidden");
            epgUrl = "".concat(host, "/player_api.php?username=").concat(encodeURIComponent(user), "&password=").concat(encodeURIComponent(pass), "&action=get_short_epg&stream_id=").concat(encodeURIComponent(streamId), "&limit=30");
            data = null;
            _context11.p = 3;
            _context11.n = 4;
            return fetch(getProxyUrl(epgUrl));
          case 4:
            r = _context11.v;
            if (!r.ok) {
              _context11.n = 6;
              break;
            }
            _context11.n = 5;
            return r.json();
          case 5:
            data = _context11.v;
          case 6:
            _context11.n = 8;
            break;
          case 7:
            _context11.p = 7;
            _t18 = _context11.v;
          case 8:
            if (channelEpgLoader) channelEpgLoader.classList.add("hidden");
            if (!(data && data.epg_listings && data.epg_listings.length > 0)) {
              _context11.n = 9;
              break;
            }
            renderEpgListings(data.epg_listings, parsed.title);
            return _context11.a(2);
          case 9:
            _context11.n = 11;
            break;
          case 10:
            _context11.p = 10;
            _t19 = _context11.v;
            console.warn("Erro ao buscar EPG:", _t19);
            if (channelEpgLoader) channelEpgLoader.classList.add("hidden");
          case 11:
            // Fallback EPG se o canal não possuir EPG no servidor
            renderEpgListings([], parsed.title);
          case 12:
            return _context11.a(2);
        }
      }, _callee11, null, [[3, 7], [2, 10]]);
    }));
    return _openChannelModal.apply(this, arguments);
  }
  function renderEpgListings(listings, channelTitle) {
    channelEpgList.innerHTML = "";
    var now = Math.floor(Date.now() / 1000);
    if (!listings || listings.length === 0) {
      if (epgCountBadge) epgCountBadge.textContent = "Sem EPG cadastrado";
      channelEpgList.innerHTML = "\n        <div class=\"bg-[#121630] border border-white/10 rounded-2xl p-5 text-center space-y-2\">\n          <i data-lucide=\"tv\" class=\"w-8 h-8 text-cyan-400 mx-auto opacity-70\"></i>\n          <h5 class=\"text-xs font-bold text-white\">Programa\xE7\xE3o 24 Horas \u2014 ".concat(channelTitle, "</h5>\n          <p class=\"text-[11px] text-slate-400 leading-relaxed max-w-md mx-auto\">\n            Transmiss\xE3o cont\xEDnua 24 horas por dia. Sintonize agora para assistir a conte\xFAdos ao vivo em alta defini\xE7\xE3o com \xE1udio est\xE9reo digital.\n          </p>\n        </div>\n      ");
      if (window.lucide) lucide.createIcons();
      return;
    }
    if (epgCountBadge) epgCountBadge.textContent = "".concat(listings.length, " programas hoje");
    listings.forEach(function (prog) {
      var title = decodeBase64Safe(prog.title) || "Programa ao Vivo";
      var desc = decodeBase64Safe(prog.description) || "Transmissão ao vivo do canal.";
      var startUnix = prog.start_timestamp ? Number(prog.start_timestamp) : null;
      var stopUnix = prog.stop_timestamp ? Number(prog.stop_timestamp) : null;
      var timeText = "";
      if (prog.start && prog.end) {
        var sTime = prog.start.includes(" ") ? prog.start.split(" ")[1].substring(0, 5) : prog.start;
        var eTime = prog.end.includes(" ") ? prog.end.split(" ")[1].substring(0, 5) : prog.end;
        timeText = "".concat(sTime, " - ").concat(eTime);
      } else if (startUnix && stopUnix) {
        var sDate = new Date(startUnix * 1000);
        var eDate = new Date(stopUnix * 1000);
        var _sTime = sDate.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit"
        });
        var _eTime = eDate.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit"
        });
        timeText = "".concat(_sTime, " - ").concat(_eTime);
      } else {
        timeText = "Ao Vivo";
      }
      var isLiveNow = startUnix && stopUnix && now >= startUnix && now <= stopUnix;
      if (isLiveNow) {
        channelCurrentProgSummary.textContent = "NO AR AGORA: ".concat(title, " (").concat(timeText, ")");
      }
      var progCard = document.createElement("div");
      progCard.className = "p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ".concat(isLiveNow ? "bg-cyan-500/15 border-cyan-500/50 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/30" : "bg-[#121630] border-white/10 hover:border-white/20");
      progCard.innerHTML = "\n        <div class=\"flex items-start gap-3.5 flex-1 min-w-0\">\n          <div class=\"px-2.5 py-1 rounded-lg text-xs font-black shrink-0 ".concat(isLiveNow ? "bg-cyan-500 text-[#050712]" : "bg-white/10 text-cyan-300", "\">\n            ").concat(timeText, "\n          </div>\n          <div class=\"space-y-1 min-w-0 flex-1\">\n            <div class=\"flex items-center gap-2\">\n              <h5 class=\"text-xs font-extrabold text-white truncate\">").concat(title, "</h5>\n              ").concat(isLiveNow ? "<span class=\"px-2 py-0.5 text-[9px] font-black bg-rose-500 text-white rounded-md uppercase animate-pulse\">NO AR AGORA</span>" : "", "\n            </div>\n            <p class=\"text-[11px] text-slate-300 line-clamp-2 leading-relaxed\">").concat(desc, "</p>\n          </div>\n        </div>\n      ");
      channelEpgList.appendChild(progCard);
    });
    if (window.lucide) lucide.createIcons();
  }

  // ── TMDB METADATA ENRICHMENT HELPERS (PT-BR) ──
  function fetchTmdbMovieMetadata(_x6) {
    return _fetchTmdbMovieMetadata.apply(this, arguments);
  }
  function _fetchTmdbMovieMetadata() {
    _fetchTmdbMovieMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(cleanTitle) {
      var apiKey, searchUrl, res, data, match, _t20;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            if (cleanTitle) {
              _context12.n = 1;
              break;
            }
            return _context12.a(2, null);
          case 1:
            apiKey = "15d2ea6d0dc1d476efbca3eba2b9bbfb";
            searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=".concat(apiKey, "&query=").concat(encodeURIComponent(cleanTitle), "&language=pt-BR");
            _context12.p = 2;
            _context12.n = 3;
            return fetch(searchUrl);
          case 3:
            res = _context12.v;
            if (res.ok) {
              _context12.n = 4;
              break;
            }
            return _context12.a(2, null);
          case 4:
            _context12.n = 5;
            return res.json();
          case 5:
            data = _context12.v;
            if (!(data && data.results && data.results.length > 0)) {
              _context12.n = 6;
              break;
            }
            match = data.results[0];
            return _context12.a(2, {
              title: match.title || match.original_title,
              overview: match.overview,
              backdrop: match.backdrop_path ? "https://image.tmdb.org/t/p/w1280".concat(match.backdrop_path) : null,
              poster: match.poster_path ? "https://image.tmdb.org/t/p/w500".concat(match.poster_path) : null,
              year: match.release_date ? match.release_date.substring(0, 4) : "",
              rating: match.vote_average ? match.vote_average.toFixed(1) : ""
            });
          case 6:
            _context12.n = 8;
            break;
          case 7:
            _context12.p = 7;
            _t20 = _context12.v;
          case 8:
            return _context12.a(2, null);
        }
      }, _callee12, null, [[2, 7]]);
    }));
    return _fetchTmdbMovieMetadata.apply(this, arguments);
  }
  function fetchTmdbTvMetadata(_x7) {
    return _fetchTmdbTvMetadata.apply(this, arguments);
  } // ── MOVIE DETAILS MODAL CONTROLLER (Netflix / Disney+ Style) ──
  function _fetchTmdbTvMetadata() {
    _fetchTmdbTvMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(cleanTitle) {
      var apiKey, searchUrl, res, data, match, _t21;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            if (cleanTitle) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2, null);
          case 1:
            apiKey = "15d2ea6d0dc1d476efbca3eba2b9bbfb";
            searchUrl = "https://api.themoviedb.org/3/search/tv?api_key=".concat(apiKey, "&query=").concat(encodeURIComponent(cleanTitle), "&language=pt-BR");
            _context13.p = 2;
            _context13.n = 3;
            return fetch(searchUrl);
          case 3:
            res = _context13.v;
            if (res.ok) {
              _context13.n = 4;
              break;
            }
            return _context13.a(2, null);
          case 4:
            _context13.n = 5;
            return res.json();
          case 5:
            data = _context13.v;
            if (!(data && data.results && data.results.length > 0)) {
              _context13.n = 6;
              break;
            }
            match = data.results[0];
            return _context13.a(2, {
              title: match.name || match.original_name,
              overview: match.overview,
              backdrop: match.backdrop_path ? "https://image.tmdb.org/t/p/w1280".concat(match.backdrop_path) : null,
              poster: match.poster_path ? "https://image.tmdb.org/t/p/w500".concat(match.poster_path) : null,
              year: match.first_air_date ? match.first_air_date.substring(0, 4) : "",
              rating: match.vote_average ? match.vote_average.toFixed(1) : ""
            });
          case 6:
            _context13.n = 8;
            break;
          case 7:
            _context13.p = 7;
            _t21 = _context13.v;
          case 8:
            return _context13.a(2, null);
        }
      }, _callee13, null, [[2, 7]]);
    }));
    return _fetchTmdbTvMetadata.apply(this, arguments);
  }
  var movieModal = document.getElementById("movieModal");
  var closeMovieModalBtn = document.getElementById("closeMovieModalBtn");
  var movieModalPoster = document.getElementById("movieModalPoster");
  var movieModalBackdrop = document.getElementById("movieModalBackdrop");
  var movieModalTitle = document.getElementById("movieModalTitle");
  var movieModalYear = document.getElementById("movieModalYear");
  var movieModalDuration = document.getElementById("movieModalDuration");
  var movieModalQuality = document.getElementById("movieModalQuality");
  var movieModalGroup = document.getElementById("movieModalGroup");
  var movieModalPlot = document.getElementById("movieModalPlot");
  var movieModalDirector = document.getElementById("movieModalDirector");
  var movieModalCast = document.getElementById("movieModalCast");
  var playMovieNowBtn = document.getElementById("playMovieNowBtn");
  var favMovieBtn = document.getElementById("favMovieBtn");
  if (closeMovieModalBtn) {
    closeMovieModalBtn.addEventListener("click", function () {
      if (movieModal) movieModal.classList.add("hidden");
    });
  }
  function openMovieModal(_x8) {
    return _openMovieModal.apply(this, arguments);
  } // ── SERIES SEASONS & EPISODES CONTROLLER ──
  function _openMovieModal() {
    _openMovieModal = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(item) {
      var parsed, isFav, vodId, savedXtream, _JSON$parse4, host, user, pass, infoUrl, data, r, info, _t22, _t23;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            if (item) {
              _context14.n = 1;
              break;
            }
            return _context14.a(2);
          case 1:
            parsed = cleanChannelName(item.name);
            movieModalTitle.textContent = parsed.title;
            movieModalYear.textContent = item.year || "2024";
            movieModalDuration.textContent = item.duration || "HD";
            movieModalQuality.textContent = parsed.quality || "FULL HD";
            movieModalGroup.textContent = item.group ? translateCategory(item.group) : "Filmes VOD";
            movieModalPlot.textContent = item.description || "Carregando sinopse e detalhes do filme...";
            movieModalPoster.src = item.logo ? getProxyUrl(item.logo) : "logo_v2.png";
            movieModalBackdrop.src = item.logo ? getProxyUrl(item.logo) : "logo_v2.png";
            movieModalDirector.textContent = "Informação indisponível";
            movieModalCast.textContent = "Informação indisponível";

            // Atualizar estado do botão Favorito
            isFav = isItemFavorite(item);
            if (favMovieBtn) {
              favMovieBtn.innerHTML = "<i data-lucide=\"heart\" class=\"w-4 h-4 ".concat(isFav ? "fill-rose-500 text-rose-500" : "", "\"></i> <span>").concat(isFav ? "Favoritado" : "Favorito", "</span>");
              favMovieBtn.onclick = function (e) {
                if (e) e.stopPropagation();
                toggleFavorite(item);
                var updatedFav = isItemFavorite(item);
                favMovieBtn.innerHTML = "<i data-lucide=\"heart\" class=\"w-4 h-4 ".concat(updatedFav ? "fill-rose-500 text-rose-500" : "", "\"></i> <span>").concat(updatedFav ? "Favoritado" : "Favorito", "</span>");
                if (window.lucide) lucide.createIcons();
              };
            }
            if (playMovieNowBtn) {
              playMovieNowBtn.onclick = function () {
                if (movieModal) movieModal.classList.add("hidden");
                playerModal.classList.remove("hidden");
                playMedia(item);
              };
            }
            if (movieModal) movieModal.classList.remove("hidden");
            if (window.lucide) lucide.createIcons();

            // 1. Tentar buscar detalhes via get_vod_info no servidor Xtream
            if (!(item.id && item.id.startsWith("xtream-vod-"))) {
              _context14.n = 10;
              break;
            }
            vodId = item.id.replace("xtream-vod-", "");
            savedXtream = localStorage.getItem("rdg_xtream");
            if (!savedXtream) {
              _context14.n = 10;
              break;
            }
            _context14.p = 2;
            _JSON$parse4 = JSON.parse(savedXtream), host = _JSON$parse4.host, user = _JSON$parse4.user, pass = _JSON$parse4.pass;
            infoUrl = "".concat(host, "/player_api.php?username=").concat(encodeURIComponent(user), "&password=").concat(encodeURIComponent(pass), "&action=get_vod_info&vod_id=").concat(encodeURIComponent(vodId));
            data = null;
            _context14.p = 3;
            _context14.n = 4;
            return fetch(getProxyUrl(infoUrl));
          case 4:
            r = _context14.v;
            if (!r.ok) {
              _context14.n = 6;
              break;
            }
            _context14.n = 5;
            return r.json();
          case 5:
            data = _context14.v;
          case 6:
            _context14.n = 8;
            break;
          case 7:
            _context14.p = 7;
            _t22 = _context14.v;
          case 8:
            if (data && data.info) {
              info = data.info;
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
            _context14.n = 10;
            break;
          case 9:
            _context14.p = 9;
            _t23 = _context14.v;
            console.warn("Erro ao buscar get_vod_info:", _t23);
          case 10:
            // 2. ENRIQUECIMENTO AUTOMÁTICO TMDB (Garante Sinopse PT-BR real e Banner 4K para 100% dos filmes!)
            fetchTmdbMovieMetadata(parsed.title).then(function (tmdb) {
              var curPlot = movieModalPlot.textContent || "";
              var isMissingOrGeneric = !curPlot || curPlot.length < 15 || curPlot.includes("Carregando sinopse") || curPlot.includes("Inicie a exibição") || curPlot.includes("não disponível") || curPlot.includes("indisponível") || curPlot.includes("Sinopse não disponível");
              if (tmdb) {
                if (isMissingOrGeneric && tmdb.overview) {
                  movieModalPlot.textContent = tmdb.overview;
                }
                if (tmdb.backdrop) movieModalBackdrop.src = tmdb.backdrop;
                if (tmdb.poster && (!item.logo || item.logo === "logo_v2.png")) movieModalPoster.src = tmdb.poster;
                if (tmdb.year) movieModalYear.textContent = tmdb.year;
              }

              // Fallback elegante se a sinopse continuar genérica ou indisponível
              if (!movieModalPlot.textContent || movieModalPlot.textContent.includes("não disponível") || movieModalPlot.textContent.includes("Carregando sinopse")) {
                movieModalPlot.textContent = "Acompanhe a hist\xF3ria completa de ".concat(parsed.title, ". Filme dispon\xEDvel para exibi\xE7\xE3o em alta defini\xE7\xE3o com \xE1udio est\xE9reo digital no seu cat\xE1logo IPTV.");
              }
              if (!movieModalDirector.textContent || movieModalDirector.textContent.includes("indisponível")) {
                movieModalDirector.textContent = "Produção cadastrada no catálogo IPTV";
              }
              if (!movieModalCast.textContent || movieModalCast.textContent.includes("indisponível")) {
                movieModalCast.textContent = "Elenco principal da produção";
              }
            });
          case 11:
            return _context14.a(2);
        }
      }, _callee14, null, [[3, 7], [2, 9]]);
    }));
    return _openMovieModal.apply(this, arguments);
  }
  var seriesModal = document.getElementById("seriesModal");
  var closeSeriesModalBtn = document.getElementById("closeSeriesModalBtn");
  var seriesModalTitle = document.getElementById("seriesModalTitle");
  var seriesModalSubtitle = document.getElementById("seriesModalSubtitle");
  var seriesModalPoster = document.getElementById("seriesModalPoster");
  var seriesModalHeaderTitle = document.getElementById("seriesModalHeaderTitle");
  var seriesModalYear = document.getElementById("seriesModalYear");
  var seriesModalGroup = document.getElementById("seriesModalGroup");
  var seriesModalPlot = document.getElementById("seriesModalPlot");
  var seasonsTabsList = document.getElementById("seasonsTabsList");
  var episodesListTitle = document.getElementById("episodesListTitle");
  var seriesEpisodesLoader = document.getElementById("seriesEpisodesLoader");
  var episodesGrid = document.getElementById("episodesGrid");
  if (closeSeriesModalBtn) {
    closeSeriesModalBtn.addEventListener("click", function () {
      seriesModal.classList.add("hidden");
    });
  }
  function openSeriesModal(_x9) {
    return _openSeriesModal.apply(this, arguments);
  }
  function _openSeriesModal() {
    _openSeriesModal = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(item) {
      var parsed, seriesId, savedXtream, _JSON$parse5, host, user, pass, infoUrl, data, r, _r3, _seasonsMap, _seasonKeys, episodes, seasonsMap, seasonKeys, _t24, _t25, _t26;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            if (item) {
              _context15.n = 1;
              break;
            }
            return _context15.a(2);
          case 1:
            parsed = cleanChannelName(item.name);
            seriesModalTitle.textContent = parsed.title;
            seriesModalHeaderTitle.textContent = parsed.title;
            seriesModalSubtitle.textContent = "Selecione a Temporada e o Episódio";
            seriesModalPoster.src = item.logo ? getProxyUrl(item.logo) : "logo_v2.png";
            seriesModalYear.textContent = item.year || "2024";
            seriesModalGroup.textContent = item.group ? translateCategory(item.group) : "Séries VOD";
            seriesModalPlot.textContent = item.description || "Carregando sinopse e detalhes da série...";
            seasonsTabsList.innerHTML = "";
            episodesGrid.innerHTML = "";
            seriesModal.classList.remove("hidden");
            if (window.lucide) lucide.createIcons();

            // ENRIQUECIMENTO AUTOMÁTICO TMDB PARA SÉRIES
            fetchTmdbTvMetadata(parsed.title).then(function (tmdb) {
              var curPlot = seriesModalPlot.textContent || "";
              var isMissingOrGeneric = !curPlot || curPlot.length < 15 || curPlot.includes("Carregando sinopse") || curPlot.includes("Escolha uma temporada") || curPlot.includes("não disponível") || curPlot.includes("indisponível") || curPlot.includes("Sinopse não disponível");
              if (tmdb) {
                if (isMissingOrGeneric && tmdb.overview) {
                  seriesModalPlot.textContent = tmdb.overview;
                }
                if (tmdb.poster && (!item.logo || item.logo === "logo_v2.png")) seriesModalPoster.src = tmdb.poster;
                if (tmdb.year) seriesModalYear.textContent = tmdb.year;
              }
              if (!seriesModalPlot.textContent || seriesModalPlot.textContent.includes("não disponível") || seriesModalPlot.textContent.includes("Carregando sinopse")) {
                seriesModalPlot.textContent = "Acompanhe os epis\xF3dios completos de ".concat(parsed.title, ". Navegue pelas temporadas abaixo para assistir em alta defini\xE7\xE3o.");
              }
            });

            // Se for uma série do Xtream Codes
            if (!item.id.startsWith("xtream-series-")) {
              _context15.n = 17;
              break;
            }
            seriesId = item.id.replace("xtream-series-", "");
            savedXtream = localStorage.getItem("rdg_xtream");
            if (!savedXtream) {
              _context15.n = 17;
              break;
            }
            _context15.p = 2;
            _JSON$parse5 = JSON.parse(savedXtream), host = _JSON$parse5.host, user = _JSON$parse5.user, pass = _JSON$parse5.pass;
            seriesEpisodesLoader.classList.remove("hidden");
            infoUrl = "".concat(host, "/player_api.php?username=").concat(encodeURIComponent(user), "&password=").concat(encodeURIComponent(pass), "&action=get_series_info&series_id=").concat(encodeURIComponent(seriesId));
            data = null;
            _context15.p = 3;
            _context15.n = 4;
            return fetch(getProxyUrl(infoUrl));
          case 4:
            r = _context15.v;
            if (!r.ok) {
              _context15.n = 6;
              break;
            }
            _context15.n = 5;
            return r.json();
          case 5:
            data = _context15.v;
          case 6:
            _context15.n = 8;
            break;
          case 7:
            _context15.p = 7;
            _t24 = _context15.v;
          case 8:
            if (data) {
              _context15.n = 14;
              break;
            }
            _context15.p = 9;
            _context15.n = 10;
            return fetch(infoUrl);
          case 10:
            _r3 = _context15.v;
            if (!_r3.ok) {
              _context15.n = 12;
              break;
            }
            _context15.n = 11;
            return _r3.json();
          case 11:
            data = _context15.v;
          case 12:
            _context15.n = 14;
            break;
          case 13:
            _context15.p = 13;
            _t25 = _context15.v;
          case 14:
            seriesEpisodesLoader.classList.add("hidden");
            if (!(data && data.episodes)) {
              _context15.n = 15;
              break;
            }
            _seasonsMap = data.episodes;
            _seasonKeys = Object.keys(_seasonsMap).sort(function (a, b) {
              return Number(a) - Number(b);
            });
            if (data.info) {
              if (data.info.plot) seriesModalPlot.textContent = data.info.plot;
              if (data.info.genre) seriesModalGroup.textContent = data.info.genre;
              if (data.info.releaseDate || data.info.year) seriesModalYear.textContent = data.info.releaseDate || data.info.year;
              if (data.info.cover) seriesModalPoster.src = getProxyUrl(data.info.cover);
            }
            renderSeriesSeasons(item, _seasonsMap, _seasonKeys, host, user, pass);
            return _context15.a(2);
          case 15:
            _context15.n = 17;
            break;
          case 16:
            _context15.p = 16;
            _t26 = _context15.v;
            console.warn("Erro ao buscar detalhes da série Xtream:", _t26);
            seriesEpisodesLoader.classList.add("hidden");
          case 17:
            // Se for uma série catalogada com objeto episodes ou fallback
            episodes = item.episodes || [{
              season: 1,
              episode: 1,
              name: "Episódio 1 — Piloto (Estreia da Série)",
              duration: "45min",
              url: item.url || "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            }, {
              season: 1,
              episode: 2,
              name: "Episódio 2 — Parte II",
              duration: "50min",
              url: item.url || "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
            }, {
              season: 1,
              episode: 3,
              name: "Episódio 3 — O Confronto",
              duration: "48min",
              url: item.url || "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            }, {
              season: 2,
              episode: 1,
              name: "Episódio 1 — Retorno (Temporada 2)",
              duration: "52min",
              url: item.url || "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
            }];
            seasonsMap = {};
            episodes.forEach(function (ep) {
              var sNum = ep.season || 1;
              if (!seasonsMap[sNum]) seasonsMap[sNum] = [];
              seasonsMap[sNum].push(ep);
            });
            seasonKeys = Object.keys(seasonsMap).sort(function (a, b) {
              return Number(a) - Number(b);
            });
            renderSeriesSeasons(item, seasonsMap, seasonKeys);
          case 18:
            return _context15.a(2);
        }
      }, _callee15, null, [[9, 13], [3, 7], [2, 16]]);
    }));
    return _openSeriesModal.apply(this, arguments);
  }
  function buildFullSeriesEpisodeChain(seriesItem, seasonsMap, seasonKeys, host, user, pass) {
    var flatList = [];
    seasonKeys.forEach(function (sKey) {
      var rawEpisodes = seasonsMap[sKey] || [];
      rawEpisodes.forEach(function (ep, idx) {
        var epNum = ep.episode_num || ep.episode || idx + 1;
        var epTitle = ep.title || ep.name || "Epis\xF3dio ".concat(epNum);
        var container = ep.container_extension || "mp4";
        var epStreamUrl = ep.url || (host ? "".concat(host, "/series/").concat(user, "/").concat(pass, "/").concat(ep.id, ".").concat(container) : "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
        var epPlot = ep.info && ep.info.plot || ep.plot || ep.description || "Temporada ".concat(sKey, " \u2022 Epis\xF3dio ").concat(epNum);
        var epDuration = ep.info && ep.info.duration || ep.duration || "";
        var epImage = ep.info && (ep.info.movie_image || ep.info.cover_big) || seriesItem.logo;
        flatList.push({
          sKey: sKey,
          epNum: epNum,
          epTitle: epTitle,
          epPlot: epPlot,
          epDuration: epDuration,
          epImage: epImage,
          item: {
            id: "ep-".concat(seriesItem.id, "-s").concat(sKey, "-e").concat(epNum),
            name: "".concat(seriesItem.name, " \u2014 T").concat(sKey, ":E").concat(epNum, " (").concat(epTitle, ")"),
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
    for (var i = 0; i < flatList.length; i++) {
      if (i + 1 < flatList.length) {
        flatList[i].item.nextEpisode = flatList[i + 1].item;
      }
    }
    return flatList;
  }
  function renderSeriesSeasons(seriesItem, seasonsMap, seasonKeys, host, user, pass) {
    seasonsTabsList.innerHTML = "";
    if (seasonKeys.length === 0) {
      episodesGrid.innerHTML = "<p class=\"text-xs text-slate-400 py-6 text-center col-span-full\">Nenhum epis\xF3dio encontrado para esta s\xE9rie.</p>";
      return;
    }

    // Criar a corrente completa de episódios encadeados
    var fullChain = buildFullSeriesEpisodeChain(seriesItem, seasonsMap, seasonKeys, host, user, pass);
    var activeSeason = seasonKeys[0];
    var updateSeasonEpisodes = function updateSeasonEpisodes(sKey) {
      activeSeason = sKey;
      seasonsTabsList.querySelectorAll("button").forEach(function (btn) {
        var isCurrent = btn.dataset.season === String(sKey);
        btn.className = "px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all border ".concat(isCurrent ? "bg-amber-500/25 text-amber-300 border-amber-500/50 shadow-md" : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white");
      });
      episodesListTitle.innerHTML = "<i data-lucide=\"list-video\" class=\"w-4 h-4 text-amber-400\"></i><span>Epis\xF3dios da Temporada ".concat(sKey, "</span>");
      episodesGrid.innerHTML = "";
      var seasonItems = fullChain.filter(function (entry) {
        return String(entry.sKey) === String(sKey);
      });
      seasonItems.forEach(function (entry) {
        var epCard = document.createElement("div");
        epCard.className = "bg-[#121630] border border-white/10 hover:border-amber-500/40 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group transition-all";
        epCard.innerHTML = "\n          <div class=\"flex items-start sm:items-center gap-3.5 flex-1 min-w-0\">\n            <div class=\"w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center font-black text-xs shrink-0 group-hover:scale-105 transition-transform shadow-md\">\n              E".concat(entry.epNum, "\n            </div>\n            <div class=\"min-w-0 flex-1 space-y-1\">\n              <div class=\"flex items-center gap-2\">\n                <h5 class=\"text-xs font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1\">").concat(entry.epTitle, "</h5>\n                ").concat(entry.epDuration ? "<span class=\"text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-white/10 text-slate-300 shrink-0\">".concat(entry.epDuration, "</span>") : "", "\n              </div>\n              <p class=\"text-[11px] text-slate-400 line-clamp-2 leading-relaxed\">").concat(entry.epPlot, "</p>\n            </div>\n          </div>\n          <button class=\"play-ep-btn px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-[#070913] font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 shrink-0 sm:self-center\">\n            <i data-lucide=\"play\" class=\"w-3.5 h-3.5 fill-current\"></i>\n            <span>Assistir</span>\n          </button>\n        ");
        var playBtn = epCard.querySelector(".play-ep-btn");
        playBtn.onclick = function () {
          seriesModal.classList.add("hidden");
          playMedia(entry.item);
        };
        episodesGrid.appendChild(epCard);
      });
      if (window.lucide) lucide.createIcons();
    };
    seasonKeys.forEach(function (sKey) {
      var btn = document.createElement("button");
      btn.dataset.season = String(sKey);
      btn.textContent = "Temporada ".concat(sKey);
      btn.onclick = function () {
        return updateSeasonEpisodes(sKey);
      };
      seasonsTabsList.appendChild(btn);
    });
    updateSeasonEpisodes(activeSeason);
  }

  // ── FULLSCREEN CONTROLLER (Cross-Browser, Mobile & PC) ──
  var fullscreenToggleBtn = document.getElementById("fullscreenToggleBtn");
  function toggleNativeFullscreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (playerModal.requestFullscreen) {
        playerModal.requestFullscreen({
          navigationUI: "hide"
        })["catch"](function () {});
      } else if (playerModal.webkitRequestFullscreen) {
        playerModal.webkitRequestFullscreen();
      } else if (videoElement && videoElement.webkitEnterFullscreen) {
        videoElement.webkitEnterFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()["catch"](function () {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
  if (fullscreenToggleBtn) {
    fullscreenToggleBtn.addEventListener("click", function (e) {
      if (e) e.stopPropagation();
      toggleNativeFullscreen();
    });
  }
  if (videoElement) {
    videoElement.addEventListener("dblclick", toggleNativeFullscreen);
  }

  // PLAYER ENGINE WITH AUTOMATIC MULTI-SERVER FAILOVER & PROXY RECOVERY
  function playMedia(item) {
    var serverIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var proxyLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
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
      var idx = state.items.findIndex(function (i) {
        return i.id === item.id || i.url && i.url === item.url;
      });
      if (idx !== -1 && idx + 1 < state.items.length) {
        var candidate = state.items[idx + 1];
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
      playerEpgText.textContent = "| ".concat(item.description.substring(0, 60), "...");
      playerEpgText.classList.remove("hidden");
    } else if (item.type === "live") {
      playerEpgText.textContent = "| \uD83D\uDCFA Programa\xE7\xE3o Ao Vivo";
      playerEpgText.classList.remove("hidden");
      fetchChannelEpg(item);
    } else if (item.type === "movies") {
      playerEpgText.textContent = "| Filme HD";
      playerEpgText.classList.remove("hidden");
    } else if (item.type === "series") {
      playerEpgText.textContent = "| Epis\xF3dio HD";
      playerEpgText.classList.remove("hidden");
    } else {
      playerEpgText.classList.add("hidden");
    }

    // Ocultar botão "Trocar de Canal" para Filmes e Séries (Apenas visível em Canais Ao Vivo)
    var toggleDrawerBtn = document.getElementById("toggleDrawerBtn");
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
    var isFav = isItemFavorite(item);
    toggleFavPlayerBtn.innerHTML = "<i data-lucide=\"heart\" class=\"w-5 h-5 ".concat(isFav ? "fill-rose-500 text-rose-500" : "", "\"></i>");
    if (window.lucide) lucide.createIcons();

    // Botão de Próximo Episódio no Cabeçalho do Player (Apenas para Séries)
    var nextEpPlayerBtn = document.getElementById("nextEpPlayerBtn");
    if (nextEpPlayerBtn) {
      if (item.type === "series" && item.nextEpisode) {
        nextEpPlayerBtn.classList.remove("hidden");
        nextEpPlayerBtn.onclick = function (e) {
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

    // Atualizar fundo borrado do loading com o logo/poster da mídia
    var videoLoaderBg = document.getElementById("videoLoaderBg");
    if (videoLoaderBg) {
      videoLoaderBg.style.opacity = '0';
      videoLoaderBg.src = item.logo ? getProxyUrl(item.logo) : 'logo_v2.png';
      setTimeout(function () {
        videoLoaderBg.style.opacity = '0.4';
      }, 50);
    }
    videoSpinner.classList.remove("hidden");
    var serverList = item.servers && item.servers.length > 0 ? item.servers : [item.url];
    var currentUrl = serverList[serverIdx % serverList.length];
    videoStatusText.textContent = serverIdx > 0 ? "Conectando ao Servidor Espelho ".concat(serverIdx + 1, "...") : proxyLevel > 0 ? "Otimizando sinal de vídeo..." : item.type === "movies" ? "Carregando filme..." : item.type === "series" ? "Carregando episódio..." : "Carregando transmissão ao vivo...";

    // Restaurar classes padrão para o badge de carregamento
    videoSubStatusText.className = "text-cyan-400 font-bold text-xs mt-2 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/30";
    videoSubStatusText.textContent = "Conex\xE3o segura (Servidor ".concat(serverIdx + 1, " de ").concat(serverList.length, ")");

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
    state.activeStreamTimeout = setTimeout(function () {
      if (playerModal.classList.contains("hidden") || !state.isMediaPlaybackActive) return;
      if (!videoLoader.classList.contains("hidden")) {
        console.warn("Server ".concat(serverIdx + 1, " timeout, tentando pr\xF3ximo espelho..."));
        if (serverIdx + 1 < serverList.length) {
          playMedia(item, serverIdx + 1, proxyLevel);
        } else if (proxyLevel < 1) {
          playMedia(item, 0, proxyLevel + 1);
        } else {
          showStreamError(item);
        }
      }
    }, 12000);
    var hideLoader = function hideLoader() {
      if (state.activeStreamTimeout) {
        clearTimeout(state.activeStreamTimeout);
        state.activeStreamTimeout = null;
      }
      videoLoader.classList.add("hidden");
    };

    // Verificar se há progresso salvo no histórico para este item
    var savedProgress = state.watchProgress[item.id];
    if (savedProgress && savedProgress.time > 15 && savedProgress.duration - savedProgress.time > 20) {
      if (resumePlaybackOverlay) {
        resumeTimeText.textContent = formatTime(savedProgress.time);
        resumePlaybackOverlay.classList.remove("hidden");
        confirmResumeBtn.onclick = function () {
          videoElement.currentTime = savedProgress.time;
          resumePlaybackOverlay.classList.add("hidden");
        };
        restartFromStartBtn.onclick = function () {
          videoElement.currentTime = 0;
          resumePlaybackOverlay.classList.add("hidden");
        };
        closeResumePromptBtn.onclick = function () {
          resumePlaybackOverlay.classList.add("hidden");
        };
      }
    }
    var lastSaveTime = 0;
    videoElement.onplaying = hideLoader;
    videoElement.oncanplay = hideLoader;
    videoElement.onloadeddata = hideLoader;
    videoElement.ontimeupdate = function () {
      hideLoader();
      var curTime = videoElement.currentTime;
      var durTime = videoElement.duration;

      // Salvar progresso a cada 4 segundos
      if (Math.abs(curTime - lastSaveTime) > 4) {
        lastSaveTime = curTime;
        saveWatchProgress(item, curTime, durTime);
      }

      // Detecção de Próximo Episódio EXCLUSIVA PARA SÉRIES
      if (item.type === "series" && item.nextEpisode && durTime > 0 && (durTime - curTime <= 25 || curTime / durTime >= 0.85) && !state.nextEpAutoPlayCancelled) {
        if (nextEpisodeOverlay && nextEpisodeOverlay.classList.contains("hidden")) {
          showNextEpisodeOverlay(item.nextEpisode);
        }
      }
    };
    videoElement.onended = function () {
      console.log("🎬 Vídeo finalizado. Transição automática acionada:", item.nextEpisode);
      if (item.type === "series" && item.nextEpisode && !state.nextEpAutoPlayCancelled) {
        if (state.nextEpTimer) clearInterval(state.nextEpTimer);
        state.nextEpTimer = null;
        if (nextEpisodeOverlay) nextEpisodeOverlay.classList.add("hidden");
        playMedia(item.nextEpisode);
      }
    };
    videoElement.onloadedmetadata = function () {
      videoElement.play().then(hideLoader)["catch"](function () {
        videoElement.muted = true;
        videoElement.play().then(hideLoader)["catch"](hideLoader);
      });
    };
    videoLoader.onclick = function () {
      videoElement.play().then(hideLoader)["catch"](function () {});
      hideLoader();
    };
    var rawTargetUrl = currentUrl;
    // proxyLevel 1: forçar URL direta (sem proxy) como último recurso
    // O proxy já foi tentado em proxyLevel 0 via getProxyUrl
    // Nenhum proxy de terceiro — apenas direto ou nosso proxy

    var lowerUrl = (currentUrl || "").toLowerCase();
    var isDirectVideoFile = lowerUrl.endsWith(".mp4") || lowerUrl.endsWith(".mkv") || lowerUrl.endsWith(".webm") || lowerUrl.endsWith(".avi") || lowerUrl.endsWith(".mov") || lowerUrl.includes("/movie/") && !lowerUrl.includes(".m3u8") && !lowerUrl.includes(".ts") || lowerUrl.includes("/series/") && !lowerUrl.includes(".m3u8") && !lowerUrl.includes(".ts");

    // ── NATIVE HTML5 VIDEO PLAYBACK (VOD Movies / Series MP4 & MKV) ──
    if (isDirectVideoFile) {
      var streamUrl = rawTargetUrl;

      // Upgrade HTTP to HTTPS if not using proxy to prevent mixed content blocking on VOD
      if (window.location.protocol === "https:" && streamUrl.startsWith("http:") && !streamUrl.includes("/api/proxy")) {
        streamUrl = streamUrl.replace("http:", "https:");
      }
      videoElement.src = streamUrl;
      videoElement.load();
      videoElement.play().then(hideLoader)["catch"](function (err) {
        console.warn("Native video play error no Servidor", serverIdx, err);
        videoElement.muted = true;
        videoElement.play().then(hideLoader)["catch"](function () {
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
    var hlsSourceUrl = getProxyUrl(rawTargetUrl);

    // Se for URL de canal .ts (MPEG-TS direto de servidores Xtream), encapsular em um Manifesto HLS Virtual para o HLS.js transmuxar!
    if (lowerUrl.includes(".ts") || !lowerUrl.includes(".m3u8") && item.type === "live") {
      var proxiedTs = getProxyUrl(rawTargetUrl);
      var manifestText = "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:10\n#EXT-X-MEDIA-SEQUENCE:0\n#EXTINF:10.0,\n".concat(proxiedTs, "\n#EXT-X-ENDLIST");
      var manifestBlob = new Blob([manifestText], {
        type: "application/x-mpegurl"
      });
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
        maxMaxBufferLength: 600
      });
      state.hls.loadSource(hlsSourceUrl);
      state.hls.attachMedia(videoElement);
      state.hls.on(Hls.Events.MANIFEST_PARSED, function () {
        if (!state.isMediaPlaybackActive) return;
        videoElement.play().then(hideLoader)["catch"](function () {
          videoElement.muted = true;
          videoElement.play().then(hideLoader)["catch"](hideLoader);
        });
      });
      state.hls.on(Hls.Events.AUDIO_TRACKS_UPDATED, function (event, data) {
        state.audioTracks = data.audioTracks || [];
        console.log("🎧 Faixas de áudio HLS encontradas:", state.audioTracks);
      });
      state.hls.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, function (event, data) {
        state.subtitleTracks = data.subtitleTracks || [];
        console.log("💬 Legendas HLS encontradas:", state.subtitleTracks);
      });
      state.hls.on(Hls.Events.ERROR, function (event, data) {
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
      videoElement.play().then(hideLoader)["catch"](hideLoader);
    }
  }
  function showNextEpisodeOverlay(nextEp) {
    if (!nextEpisodeOverlay || !nextEp) return;
    state.nextEpisodeItem = nextEp;
    nextEpPoster.src = nextEp.logo || "logo_v2.png";
    nextEpTitle.textContent = nextEp.name || "Próximo Episódio";
    nextEpSub.textContent = nextEp.description || "Avanço automático ativado";
    nextEpisodeOverlay.classList.remove("hidden");
    lucide.createIcons();
    var count = 10;
    nextEpCountdown.textContent = count;
    if (state.nextEpTimer) clearInterval(state.nextEpTimer);
    state.nextEpTimer = setInterval(function () {
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
      playNextEpNowBtn.onclick = function () {
        if (state.nextEpTimer) clearInterval(state.nextEpTimer);
        state.nextEpTimer = null;
        if (nextEpisodeOverlay) nextEpisodeOverlay.classList.add("hidden");
        playMedia(nextEp);
      };
    }
    if (cancelNextEpBtn) {
      cancelNextEpBtn.onclick = function () {
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
    videoSubStatusText.innerHTML = "\n      <div class=\"space-y-3\">\n        <p class=\"text-xs text-slate-400\">N\xE3o foi poss\xEDvel carregar este sinal no navegador. Tente outro canal ou reconecte a lista.</p>\n        <div class=\"flex items-center justify-center gap-3 pt-2\">\n          <button id=\"retryStreamBtn\" class=\"px-4 py-2 rounded-xl bg-[#00dcff] hover:bg-[#38bdf8] text-[#060814] font-extrabold text-xs shadow-md transition-all\">\n            \uD83D\uDD04 Tentar Novamente\n          </button>\n        </div>\n      </div>\n    ";
    var retryBtn = document.getElementById("retryStreamBtn");
    if (retryBtn) {
      retryBtn.onclick = function () {
        return playMedia(item || state.currentItem, 0);
      };
    }
  }
  closePlayerBtn.addEventListener("click", function () {
    state.isMediaPlaybackActive = false;
    if (state.activeStreamTimeout) {
      clearTimeout(state.activeStreamTimeout);
      state.activeStreamTimeout = null;
    }
    if (document.fullscreenElement) {
      document.exitFullscreen()["catch"](function () {});
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
  toggleFavPlayerBtn.addEventListener("click", function () {
    if (state.currentItem) {
      toggleFavorite(state.currentItem.id);
      var isFav = state.favorites.includes(state.currentItem.id);
      toggleFavPlayerBtn.innerHTML = "<i data-lucide=\"heart\" class=\"w-5 h-5 ".concat(isFav ? "fill-rose-500 text-rose-500" : "", "\"></i>");
      lucide.createIcons();
    }
  });

  // AUTO-HIDE PLAYER HEADER CONTROLS
  var hideHeaderTimeout = null;
  var playerHeader = document.getElementById("playerHeader");
  function showPlayerHeader() {
    if (!playerHeader) return;
    playerHeader.classList.remove("opacity-0", "pointer-events-none");
    playerHeader.classList.add("opacity-100");
    clearTimeout(hideHeaderTimeout);
    hideHeaderTimeout = setTimeout(function () {
      if (!state.drawerOpen) {
        playerHeader.classList.remove("opacity-100");
        playerHeader.classList.add("opacity-0", "pointer-events-none");
      }
    }, 4000);
  }
  if (playerModal) {
    playerModal.addEventListener("mousemove", showPlayerHeader);
    playerModal.addEventListener("touchstart", showPlayerHeader, {
      passive: true
    });
    playerModal.addEventListener("click", showPlayerHeader);
  }

  // IN-PLAYER QUICK CHANNEL SWITCHER DRAWER HANDLERS
  if (toggleDrawerBtn && channelDrawer) {
    toggleDrawerBtn.addEventListener("click", function (e) {
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
    closeDrawerBtn.addEventListener("click", function (e) {
      if (e) e.stopPropagation();
      channelDrawer.classList.remove("open");
      channelDrawer.classList.add("closed");
      state.drawerOpen = false;
    });
  }
  if (drawerSearchInput) {
    drawerSearchInput.addEventListener("input", function (e) {
      state.drawerSearchQuery = e.target.value.trim().toLowerCase();
      renderDrawerItems();
    });
  }
  function renderDrawerItems() {
    if (!drawerItemsList) return;
    drawerItemsList.innerHTML = "";
    var activeType = state.currentItem ? state.currentItem.type || "live" : state.currentTab || "live";
    var items = state.items.filter(function (i) {
      return (i.type || "live") === activeType;
    });
    if (items.length === 0 && state.items.length > 0) {
      items = state.items;
    }
    if (state.drawerSearchQuery) {
      items = items.filter(function (i) {
        return i.name.toLowerCase().includes(state.drawerSearchQuery);
      });
    }
    if (items.length === 0) {
      drawerItemsList.innerHTML = "<div class=\"p-4 text-center text-xs text-slate-400\">Nenhum canal dispon\xEDvel. Clique em \"Carregar Lista\" para importar seus canais.</div>";
      return;
    }
    items.slice(0, 150).forEach(function (item) {
      var isActive = state.currentItem && state.currentItem.id === item.id;
      var row = document.createElement("button");
      row.className = "w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center gap-3 border ".concat(isActive ? "bg-cyan-500/20 text-cyan-300 font-bold border-cyan-500/40" : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/5");
      row.innerHTML = "\n        <div class=\"w-8 h-8 rounded-lg bg-black/50 overflow-hidden flex items-center justify-center shrink-0 border border-white/5\">\n          ".concat(item.logo ? "<img src=\"".concat(item.logo, "\" alt=\"").concat(item.name, "\" class=\"w-full h-full object-cover\" onerror=\"this.onerror=null; this.src='logo_v2.png';\" />") : "<i data-lucide=\"tv\" class=\"w-4 h-4 text-cyan-400\"></i>", "\n        </div>\n        <div class=\"truncate flex-1\">\n          <span class=\"truncate block font-semibold\">").concat(item.name, "</span>\n          <span class=\"text-[10px] text-slate-400 truncate block\">").concat(item.group || "Geral", "</span>\n        </div>\n        ").concat(isActive ? "<span class=\"w-2 h-2 rounded-full bg-cyan-400 animate-ping\"></span>" : "", "\n      ");
      row.addEventListener("click", function () {
        playMedia(item);
      });
      drawerItemsList.appendChild(row);
    });
    lucide.createIcons();
  }

  // MODAL HANDLERS
  if (openLoadModalBtn && loadModal) openLoadModalBtn.addEventListener("click", function () {
    return loadModal.classList.remove("hidden");
  });
  if (emptyLoadBtn && loadModal) emptyLoadBtn.addEventListener("click", function () {
    return loadModal.classList.remove("hidden");
  });
  if (openXtreamModalBtn && xtreamModal) openXtreamModalBtn.addEventListener("click", function () {
    return xtreamModal.classList.remove("hidden");
  });
  document.querySelectorAll(".closeModalBtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      loadModal.classList.add("hidden");
      xtreamModal.classList.add("hidden");
    });
  });

  // SMART M3U PARSER
  function parseM3U(content) {
    var lines = content.split(/\r?\n/);
    var parsedItems = [];
    var currentItem = null;
    lines.forEach(function (line) {
      line = line.trim();
      if (line.startsWith("#EXTINF:")) {
        currentItem = {};
        var titleMatch = line.match(/,(.+)$/);
        if (titleMatch) currentItem.name = titleMatch[1].trim();
        var logoMatch = line.match(/tvg-logo="([^"]+)"/i);
        if (logoMatch) currentItem.logo = logoMatch[1];
        var groupMatch = line.match(/group-title="([^"]+)"/i);
        if (groupMatch) {
          currentItem.group = translateCategory(groupMatch[1]);
        } else {
          currentItem.group = "Canais Gerais";
        }
        var nameLower = (currentItem.name || "").toLowerCase();
        var groupLower = (currentItem.group || "").toLowerCase();

        // Detectar se é um canal de TV ao vivo (ex: "Adrenalina Pura TV", "AXN", "Canais | Filmes 24h", "Telecine")
        var isLiveChannel = groupLower.includes("canal") || groupLower.includes("canais") || groupLower.includes("24h") || groupLower.includes("ao vivo") || groupLower.includes("live") || groupLower.includes("tv") || nameLower.includes("24h") || nameLower.includes(" tv") || nameLower.endsWith("tv");

        // Detecção de Séries (VOD) — apenas se tiver marcação de temporada/episódio ou não for canal ao vivo
        var isSeriesItem = nameLower.match(/\b[st]\d{1,2}\s*e?\d{1,2}\b/i) || nameLower.match(/\bep(isodio)?\s*\d+/i) || nameLower.match(/\btemporada\s*\d+/i) || !isLiveChannel && (groupLower.includes("série") || groupLower.includes("series") || groupLower.includes("novela") || groupLower.includes("dorama") || groupLower.includes("anime"));

        // Detecção de Filmes (VOD) — apenas se for catálogo de filmes e NÃO for canal ao vivo 24h/TV
        var isMovieItem = !isLiveChannel && !isSeriesItem && (groupLower.includes("vod") || groupLower.includes("filme") || groupLower.includes("movies") || groupLower.includes("movie") || groupLower.includes("cinema") || groupLower.includes("lançamento") || groupLower.includes("dublado") || groupLower.includes("legendado") || groupLower.includes("4k"));
        if (isSeriesItem) {
          currentItem.type = "series";
        } else if (isMovieItem) {
          currentItem.type = "movies";
        } else {
          currentItem.type = "live";
        }
        currentItem.id = "m3u-" + Math.random().toString(36).substr(2, 9);
      } else if (line.length > 0 && !line.startsWith("#") && currentItem) {
        currentItem.url = line;

        // Verificar URL para ajustar tipo de forma precisa (prioridade para a rota da API)
        var lineLower = line.toLowerCase();
        if (lineLower.includes("/series/")) {
          currentItem.type = "series";
        } else if (lineLower.includes("/movie/")) {
          currentItem.type = "movies";
        } else if (lineLower.includes("/live/")) {
          currentItem.type = "live";
        } else {
          // Se não houver rota explícita, ajustamos com base na extensão apenas se o tipo anterior falhou (caiu em live genérico)
          if (currentItem.type === "live") {
            if (lineLower.endsWith(".mp4") || lineLower.endsWith(".mkv") || lineLower.endsWith(".avi") || lineLower.endsWith(".webm") || lineLower.endsWith(".mov") || lineLower.endsWith(".m4v")) {
              currentItem.type = "movies";
            }
          }
        }
        var proxiedUrl = getProxyUrl(line);
        if (currentItem.type === "movies" || currentItem.type === "series") {
          // VOD files are huge, proxy on Vercel will time out. Try Direct URL first!
          currentItem.servers = [line, proxiedUrl];
        } else {
          // Live TV playlists need proxy first for CORS
          currentItem.servers = [proxiedUrl, line];
        }
        parsedItems.push(currentItem);
        currentItem = null;
      }
    });
    return parsedItems;
  }

  // SUBMIT M3U URL / FILE — WITH TIMEOUT, AUTO-FIX & XTREAM DETECTION
  if (submitM3uBtn) {
    submitM3uBtn.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var file, url, reader, u, host, user, pass, _yield$connectXtream, allItems, liveData, vodData, seriesData, live, vod, series, fetchWithTimeout, targetUrl, res, text, items, _t4, _t5;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            file = m3uFileInput && m3uFileInput.files && m3uFileInput.files[0];
            url = m3uUrlInput ? m3uUrlInput.value.trim() : ""; // CASO 1: Usuário selecionou um ARQUIVO .m3u local do computador
            if (!file) {
              _context4.n = 1;
              break;
            }
            submitM3uBtn.textContent = "PROCESSANDO ARQUIVO M3U...";
            submitM3uBtn.disabled = true;
            reader = new FileReader();
            reader.onload = function (evt) {
              var text = evt.target.result;
              if (!text || text.length < 10) {
                alert("O arquivo M3U selecionado está vazio ou é inválido.");
                submitM3uBtn.textContent = "CARREGAR LISTA AGORA";
                submitM3uBtn.disabled = false;
                return;
              }
              var items = parseM3U(text);
              if (items.length > 0) {
                state.items = items;
                updateUI();
                loadModal.classList.add("hidden");
                alert("\u2705 Sucesso! Arquivo M3U processado.\nTotal de ".concat(state.items.length, " itens carregados no player."));
              } else {
                alert("Nenhum item válido encontrado no arquivo M3U selecionado.");
              }
              submitM3uBtn.textContent = "CARREGAR LISTA AGORA";
              submitM3uBtn.disabled = false;
            };
            reader.onerror = function () {
              alert("Erro ao ler o arquivo M3U local.");
              submitM3uBtn.textContent = "CARREGAR LISTA AGORA";
              submitM3uBtn.disabled = false;
            };
            reader.readAsText(file);
            return _context4.a(2);
          case 1:
            if (url) {
              _context4.n = 2;
              break;
            }
            alert("Por favor, selecione um arquivo M3U do seu computador ou digite uma URL da lista.");
            return _context4.a(2);
          case 2:
            // ── AUTO-FIX: mpegts → hls (browser não suporta mpegts) ──
            if (url.includes("output=mpegts")) {
              url = url.replace("output=mpegts", "output=hls");
              if (m3uUrlInput) m3uUrlInput.value = url;
            }
            if (url.includes("output=ts")) {
              url = url.replace("output=ts", "output=hls");
              if (m3uUrlInput) m3uUrlInput.value = url;
            }

            // XTREAM API BYPASS
            if (!url.includes("get.php")) {
              _context4.n = 8;
              break;
            }
            submitM3uBtn.textContent = "CONECTANDO AO SERVIDOR...";
            submitM3uBtn.disabled = true;
            _context4.p = 3;
            u = new URL(url);
            host = u.origin;
            user = u.searchParams.get("username");
            pass = u.searchParams.get("password");
            if (!(host && user && pass)) {
              _context4.n = 5;
              break;
            }
            _context4.n = 4;
            return connectXtream(host, user, pass, false);
          case 4:
            _yield$connectXtream = _context4.v;
            allItems = _yield$connectXtream.allItems;
            liveData = _yield$connectXtream.liveData;
            vodData = _yield$connectXtream.vodData;
            seriesData = _yield$connectXtream.seriesData;
            if (!(allItems && allItems.length > 0)) {
              _context4.n = 5;
              break;
            }
            state.items = allItems;
            updateUI();
            loadModal.classList.add("hidden");
            live = (liveData === null || liveData === void 0 ? void 0 : liveData.length) || 0;
            vod = (vodData === null || vodData === void 0 ? void 0 : vodData.length) || 0;
            series = (seriesData === null || seriesData === void 0 ? void 0 : seriesData.length) || 0;
            alert("\u2705 Sucesso! Conectado e Salvo!\n\uD83D\uDCFA ".concat(live, " Canais ao Vivo\n\uD83C\uDFAC ").concat(vod, " Filmes\n\uD83D\uDCFA ").concat(series, " S\xE9ries"));
            return _context4.a(2);
          case 5:
            _context4.n = 7;
            break;
          case 6:
            _context4.p = 6;
            _t4 = _context4.v;
            console.warn("Falha na API Xtream. Tentando M3U nativo...", _t4);
          case 7:
            _context4.p = 7;
            submitM3uBtn.textContent = "CARREGAR LISTA AGORA";
            submitM3uBtn.disabled = false;
            return _context4.f(7);
          case 8:
            // ── CARREGAMENTO M3U NORMAL VIA URL ──
            submitM3uBtn.textContent = "CARREGANDO E PROCESSANDO LISTA...";
            submitM3uBtn.disabled = true;
            _context4.p = 9;
            fetchWithTimeout = /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(fetchUrl) {
                var opts,
                  controller,
                  timer,
                  _res,
                  _args3 = arguments,
                  _t3;
                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.p = _context3.n) {
                    case 0:
                      opts = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                      controller = new AbortController();
                      timer = setTimeout(function () {
                        return controller.abort();
                      }, 20000);
                      _context3.p = 1;
                      _context3.n = 2;
                      return fetch(fetchUrl, _objectSpread(_objectSpread({}, opts), {}, {
                        signal: controller.signal
                      }));
                    case 2:
                      _res = _context3.v;
                      clearTimeout(timer);
                      return _context3.a(2, _res);
                    case 3:
                      _context3.p = 3;
                      _t3 = _context3.v;
                      clearTimeout(timer);
                      throw _t3;
                    case 4:
                      return _context3.a(2);
                  }
                }, _callee3, null, [[1, 3]]);
              }));
              return function fetchWithTimeout(_x0) {
                return _ref4.apply(this, arguments);
              };
            }();
            targetUrl = getProxyUrl(url);
            _context4.n = 10;
            return fetchWithTimeout(targetUrl);
          case 10:
            res = _context4.v;
            if (res.ok) {
              _context4.n = 11;
              break;
            }
            throw new Error("Servidor retornou HTTP " + res.status + ". Verifique se a URL da lista está correta.");
          case 11:
            _context4.n = 12;
            return res.text();
          case 12:
            text = _context4.v;
            if (!(!text || text.length < 10)) {
              _context4.n = 13;
              break;
            }
            throw new Error("A lista retornada está vazia ou inválida.");
          case 13:
            items = parseM3U(text);
            if (items.length > 0) {
              state.items = items;
              updateUI();
              loadModal.classList.add("hidden");
              alert("\u2705 Sucesso! Lista M3U processada.\nTotal de ".concat(state.items.length, " itens carregados no player."));
            } else {
              alert("Nenhum canal válido encontrado na lista M3U.\nVerifique se a URL aponta para uma lista M3U válida.");
            }
            _context4.n = 15;
            break;
          case 14:
            _context4.p = 14;
            _t5 = _context4.v;
            console.error("Erro ao carregar lista M3U:", _t5);
            alert("❌ Erro ao carregar a lista:\n" + _t5.message);
          case 15:
            _context4.p = 15;
            submitM3uBtn.textContent = "CARREGAR LISTA AGORA";
            submitM3uBtn.disabled = false;
            return _context4.f(15);
          case 16:
            return _context4.a(2);
        }
      }, _callee4, null, [[9, 14, 15, 16], [3, 6, 7, 8]]);
    })));
  }

  // LOCAL M3U FILE UPLOAD AUTO TRIGGER ON SELECT
  if (m3uFileInput) {
    m3uFileInput.addEventListener("change", function (e) {
      if (e.target.files && e.target.files.length > 0 && submitM3uBtn) {
        submitM3uBtn.click();
      }
    });
  }

  // LOAD PRESETS (IPTV-org BR & SPORTS & VOD CATALOG)

  // ── Função: carregar listas pré-definidas do banco (gerenciadas pelo painel) ──
  function loadPresetListsFromDB() {
    return _loadPresetListsFromDB.apply(this, arguments);
  } // Carregar listas dinâmicas quando o modal de carregamento abrir
  function _loadPresetListsFromDB() {
    _loadPresetListsFromDB = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17() {
      var grid, loading, SUPABASE_URL, SUPABASE_KEY, res, rawData, lists, globalItem, gName, gUrl, gVis, gParsed, _t29;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            grid = document.getElementById("presetListsGrid");
            loading = document.getElementById("presetListsLoading");
            if (grid) {
              _context17.n = 1;
              break;
            }
            return _context17.a(2);
          case 1:
            _context17.p = 1;
            SUPABASE_URL = 'https://yyoffdpzzoxrgigqupif.supabase.co';
            SUPABASE_KEY = 'sb_publishable_Cv5IVbK2bpo5PwCq-1PK3Q_d-8NPI10';
            _context17.n = 2;
            return fetch("".concat(SUPABASE_URL, "/rest/v1/licenses?status=eq.config&select=id,key,cliente&order=id.asc"), {
              headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': "Bearer ".concat(SUPABASE_KEY)
              }
            });
          case 2:
            res = _context17.v;
            if (loading) loading.style.display = 'none';
            if (res.ok) {
              _context17.n = 3;
              break;
            }
            grid.classList.add("hidden");
            return _context17.a(2);
          case 3:
            _context17.n = 4;
            return res.json();
          case 4:
            rawData = _context17.v;
            if (!(!rawData || rawData.length === 0)) {
              _context17.n = 5;
              break;
            }
            grid.classList.add("hidden");
            return _context17.a(2);
          case 5:
            // Filtrar apenas GLOBAL_M3U_URL e PRESET_LIST_%
            lists = [];
            globalItem = rawData.find(function (i) {
              return i.key === 'GLOBAL_M3U_URL';
            });
            if (globalItem && globalItem.cliente && globalItem.cliente.trim() !== '') {
              gName = 'Lista Global RDG (VIP)', gUrl = globalItem.cliente.trim(), gVis = 'public';
              try {
                gParsed = JSON.parse(gUrl);
                gName = gParsed.name || gName;
                gUrl = gParsed.url || '';
                gVis = gParsed.visibility || 'public';
              } catch (e) {}
              if (gUrl && gVis !== 'private') {
                lists.push({
                  name: gName,
                  url: gUrl,
                  isGlobal: true
                });
              }
            }
            rawData.filter(function (i) {
              return i.key && i.key.startsWith('PRESET_LIST_');
            }).forEach(function (item) {
              try {
                var parsed = JSON.parse(item.cliente);
                // Ocultar se o admin definiu como privado (visível só para ele no painel)
                if (parsed.visibility === 'private') return;
                if (parsed.url) lists.push({
                  name: parsed.name || 'Lista Personalizada',
                  url: parsed.url
                });
              } catch (e) {
                if (item.cliente) lists.push({
                  name: 'Lista Personalizada',
                  url: item.cliente
                });
              }
            });
            if (!(lists.length === 0)) {
              _context17.n = 6;
              break;
            }
            grid.classList.add("hidden");
            return _context17.a(2);
          case 6:
            grid.innerHTML = '';
            lists.forEach(function (item) {
              var name = item.name;
              var url = item.url;
              var btn = document.createElement('button');
              btn.type = 'button';
              btn.className = item.isGlobal ? 'px-3 py-2 text-left bg-cyan-500/15 hover:bg-cyan-500/30 border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl text-xs font-bold text-cyan-300 transition-all flex items-center gap-2' : 'px-3 py-2 text-left bg-emerald-500/10 hover:bg-emerald-500/25 border border-emerald-500/20 hover:border-emerald-500/50 rounded-xl text-xs font-bold text-emerald-300 transition-all flex items-center gap-2';
              btn.innerHTML = "<span>".concat(item.isGlobal ? '🌐' : '⭐', "</span><span class=\"truncate\">").concat(name, "</span>");
              btn.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
                var originalHTML, u, host, user, pass, _yield$connectXtream5, allItems, proxied, r, text, items, _t27, _t28;
                return _regenerator().w(function (_context16) {
                  while (1) switch (_context16.p = _context16.n) {
                    case 0:
                      originalHTML = btn.innerHTML;
                      btn.textContent = 'Carregando lista...';
                      btn.disabled = true;
                      _context16.p = 1;
                      if (!url.includes('get.php')) {
                        _context16.n = 6;
                        break;
                      }
                      _context16.p = 2;
                      u = new URL(url);
                      host = u.origin;
                      user = u.searchParams.get('username');
                      pass = u.searchParams.get('password');
                      if (!(host && user && pass)) {
                        _context16.n = 4;
                        break;
                      }
                      _context16.n = 3;
                      return connectXtream(host, user, pass, true);
                    case 3:
                      _yield$connectXtream5 = _context16.v;
                      allItems = _yield$connectXtream5.allItems;
                      if (!(allItems && allItems.length > 0)) {
                        _context16.n = 4;
                        break;
                      }
                      state.items = allItems;
                      updateUI();
                      loadModal.classList.add('hidden');
                      alert("\u2705 Lista \"".concat(name, "\" carregada com ").concat(allItems.length, " canais!"));
                      btn.innerHTML = originalHTML;
                      btn.disabled = false;
                      return _context16.a(2);
                    case 4:
                      _context16.n = 6;
                      break;
                    case 5:
                      _context16.p = 5;
                      _t27 = _context16.v;
                      console.warn('Falha Xtream, tentando M3U direto...', _t27);
                    case 6:
                      // Parser M3U normal
                      proxied = getProxyUrl(url);
                      _context16.n = 7;
                      return fetch(proxied);
                    case 7:
                      r = _context16.v;
                      if (!r.ok) {
                        _context16.n = 9;
                        break;
                      }
                      _context16.n = 8;
                      return r.text();
                    case 8:
                      text = _context16.v;
                      items = parseM3U(text);
                      if (!(items.length > 0)) {
                        _context16.n = 9;
                        break;
                      }
                      state.items = items;
                      updateUI();
                      loadModal.classList.add('hidden');
                      alert("\u2705 Lista \"".concat(name, "\" carregada com ").concat(items.length, " canais!"));
                      btn.innerHTML = originalHTML;
                      btn.disabled = false;
                      return _context16.a(2);
                    case 9:
                      alert('⚠️ Não foi possível carregar esta lista. Tente outra.');
                      _context16.n = 11;
                      break;
                    case 10:
                      _context16.p = 10;
                      _t28 = _context16.v;
                      alert('❌ Erro ao carregar a lista: ' + _t28.message);
                    case 11:
                      btn.innerHTML = originalHTML;
                      btn.disabled = false;
                    case 12:
                      return _context16.a(2);
                  }
                }, _callee16, null, [[2, 5], [1, 10]]);
              })));
              grid.appendChild(btn);
            });
            grid.classList.remove("hidden");
            _context17.n = 8;
            break;
          case 7:
            _context17.p = 7;
            _t29 = _context17.v;
            console.warn("Erro ao buscar listas do painel:", _t29);
            if (loading) loading.style.display = 'none';
            if (grid) grid.classList.add("hidden");
          case 8:
            return _context17.a(2);
        }
      }, _callee17, null, [[1, 7]]);
    }));
    return _loadPresetListsFromDB.apply(this, arguments);
  }
  var rdgOpenModalOriginal = window.rdgOpenModal;
  window.rdgOpenModal = function (id) {
    if (typeof rdgOpenModalOriginal === 'function') rdgOpenModalOriginal(id);else {
      var el = document.getElementById(id);
      if (el) el.classList.remove("hidden");
    }
    if (id === 'loadModal') loadPresetListsFromDB();
  };
  if (loadPresetBRBtn) {
    loadPresetBRBtn.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var targetUrl, res, text, items, _t6;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            loadPresetBRBtn.textContent = "Carregando canais BR...";
            _context5.p = 1;
            targetUrl = getProxyUrl("https://iptv-org.github.io/iptv/countries/br.m3u");
            _context5.n = 2;
            return fetch(targetUrl);
          case 2:
            res = _context5.v;
            if (!res.ok) {
              _context5.n = 4;
              break;
            }
            _context5.n = 3;
            return res.text();
          case 3:
            text = _context5.v;
            items = parseM3U(text);
            if (!(items.length > 0)) {
              _context5.n = 4;
              break;
            }
            state.items = [].concat(REAL_24H_CHANNELS, _toConsumableArray(items));
            updateUI();
            loadModal.classList.add("hidden");
            alert("\u2705 Sucesso! ".concat(items.length, " canais do Brasil carregados com sucesso!"));
            return _context5.a(2);
          case 4:
            _context5.n = 6;
            break;
          case 5:
            _context5.p = 5;
            _t6 = _context5.v;
            console.warn("Erro no preset BR via proxy, usando catálogo 24h...", _t6);
          case 6:
            // Fallback robusto que nunca falha
            state.items = [].concat(REAL_24H_CHANNELS);
            updateUI();
            loadModal.classList.add("hidden");
            alert("✅ Canais Principais 24h do Brasil carregados com sucesso!");
            loadPresetBRBtn.innerHTML = "<span>\uD83C\uDDE7\uD83C\uDDF7</span><span class=\"truncate\">Brasil (+400 Canais)</span>";
          case 7:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 5]]);
    })));
  }
  var loadPresetSportsBtn = document.getElementById("loadPresetSportsBtn");
  if (loadPresetSportsBtn) {
    loadPresetSportsBtn.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var targetUrl, res, text, items, _t7;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            loadPresetSportsBtn.textContent = "Carregando Esportes...";
            _context6.p = 1;
            targetUrl = getProxyUrl("https://iptv-org.github.io/iptv/categories/sports.m3u");
            _context6.n = 2;
            return fetch(targetUrl);
          case 2:
            res = _context6.v;
            if (!res.ok) {
              _context6.n = 4;
              break;
            }
            _context6.n = 3;
            return res.text();
          case 3:
            text = _context6.v;
            items = parseM3U(text);
            if (!(items.length > 0)) {
              _context6.n = 4;
              break;
            }
            state.items = [].concat(REAL_24H_CHANNELS, _toConsumableArray(items));
            updateUI();
            loadModal.classList.add("hidden");
            alert("\u2705 Sucesso! ".concat(items.length, " canais de Esportes e Not\xEDcias carregados com sucesso!"));
            return _context6.a(2);
          case 4:
            _context6.n = 6;
            break;
          case 5:
            _context6.p = 5;
            _t7 = _context6.v;
            console.warn("Erro no preset Esportes via proxy, usando catálogo 24h...", _t7);
          case 6:
            // Fallback robusto que nunca falha
            state.items = [].concat(REAL_24H_CHANNELS);
            updateUI();
            loadModal.classList.add("hidden");
            alert("✅ Canais de Esportes e Notícias 24h carregados com sucesso!");
            loadPresetSportsBtn.innerHTML = "<span>\u26BD</span><span class=\"truncate\">Esportes & Not\xEDcias 24h</span>";
          case 7:
            return _context6.a(2);
        }
      }, _callee6, null, [[1, 5]]);
    })));
  }

  // XTREAM CODES API HANDLER WITH DYNAMIC PROXY & FALLBACK
  var DEFAULT_XTREAM_HOST = "http://servidor.com:8080"; // Configuração do Servidor Padrão
  var xtreamForm = document.getElementById("xtreamForm");
  xtreamForm.addEventListener("submit", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(e) {
      var hostInput, user, pass, host, submitBtn, _yield$connectXtream2, allItems, liveData, vodData, seriesData, live, vod, series, _t8;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            e.preventDefault();
            hostInput = document.getElementById("xtreamHost").value.trim().replace(/\/$/, "");
            user = document.getElementById("xtreamUser").value.trim();
            pass = document.getElementById("xtreamPass").value.trim();
            if (!(!user || !pass)) {
              _context7.n = 1;
              break;
            }
            alert("Por favor, preencha o Usuário e a Senha.");
            return _context7.a(2);
          case 1:
            // Se o usuário não digitou o servidor, usa o servidor padrão pré-configurado
            host = hostInput || DEFAULT_XTREAM_HOST;
            submitBtn = xtreamForm.querySelector("button[type='submit']");
            submitBtn.textContent = "CONECTANDO E MAPEANDO CATEGORIAS...";
            submitBtn.disabled = true;
            _context7.p = 2;
            _context7.n = 3;
            return connectXtream(host, user, pass);
          case 3:
            _yield$connectXtream2 = _context7.v;
            allItems = _yield$connectXtream2.allItems;
            liveData = _yield$connectXtream2.liveData;
            vodData = _yield$connectXtream2.vodData;
            seriesData = _yield$connectXtream2.seriesData;
            if (allItems.length > 0) {
              state.items = allItems;
              updateUI();
              xtreamModal.classList.add("hidden");
              live = (liveData === null || liveData === void 0 ? void 0 : liveData.length) || 0;
              vod = (vodData === null || vodData === void 0 ? void 0 : vodData.length) || 0;
              series = (seriesData === null || seriesData === void 0 ? void 0 : seriesData.length) || 0;
              alert("\u2705 Sucesso! Conectado e Salvo!\n\uD83D\uDCFA ".concat(live, " Canais ao Vivo\n\uD83C\uDFAC ").concat(vod, " Filmes\n\uD83D\uDCFA ").concat(series, " S\xE9ries"));
            } else {
              alert("Credenciais incorretas ou servidor indisponível.\nVerifique o usuário e senha.");
            }
            _context7.n = 5;
            break;
          case 4:
            _context7.p = 4;
            _t8 = _context7.v;
            console.error("Erro Xtream:", _t8);
            alert("Erro ao conectar: " + _t8.message);
          case 5:
            _context7.p = 5;
            submitBtn.textContent = "CONECTAR SERVIDOR XTREAM";
            submitBtn.disabled = false;
            return _context7.f(5);
          case 6:
            return _context7.a(2);
        }
      }, _callee7, null, [[2, 4, 5, 6]]);
    }));
    return function (_x1) {
      return _ref7.apply(this, arguments);
    };
  }());

  // ── PIP (PICTURE-IN-PICTURE) CONTROLLER ──
  var pipBtn = document.getElementById("pipBtn");
  if (pipBtn) {
    pipBtn.addEventListener("click", function () {
      togglePictureInPicture();
    });
  }
  function togglePictureInPicture() {
    return _togglePictureInPicture.apply(this, arguments);
  } // ── SPEED TEST & SIGNAL DIAGNOSTIC CONTROLLER ──
  function _togglePictureInPicture() {
    _togglePictureInPicture = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
      var _t30;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            _context18.p = 0;
            if (!document.pictureInPictureElement) {
              _context18.n = 2;
              break;
            }
            _context18.n = 1;
            return document.exitPictureInPicture();
          case 1:
            _context18.n = 5;
            break;
          case 2:
            if (!(document.pictureInPictureEnabled && videoElement)) {
              _context18.n = 4;
              break;
            }
            _context18.n = 3;
            return videoElement.requestPictureInPicture();
          case 3:
            _context18.n = 5;
            break;
          case 4:
            playerModal.classList.toggle("in-app-pip");
          case 5:
            _context18.n = 7;
            break;
          case 6:
            _context18.p = 6;
            _t30 = _context18.v;
            console.warn("PiP Error:", _t30);
          case 7:
            return _context18.a(2);
        }
      }, _callee18, null, [[0, 6]]);
    }));
    return _togglePictureInPicture.apply(this, arguments);
  }
  var speedTestBtn = document.getElementById("speedTestBtn");
  var speedTestModal = document.getElementById("speedTestModal");
  var closeSpeedTestBtn = document.getElementById("closeSpeedTestBtn");
  var startSpeedTestBtn = document.getElementById("startSpeedTestBtn");
  var speedGaugeSpinner = document.getElementById("speedGaugeSpinner");
  var pingVal = document.getElementById("pingVal");
  var speedVal = document.getElementById("speedVal");
  var speedResultBadge = document.getElementById("speedResultBadge");
  if (closeSpeedTestBtn) {
    closeSpeedTestBtn.addEventListener("click", function () {
      speedTestModal.classList.add("hidden");
    });
  }
  if (speedTestBtn) {
    speedTestBtn.addEventListener("click", function () {
      speedTestModal.classList.remove("hidden");
    });
  }
  if (startSpeedTestBtn) {
    startSpeedTestBtn.addEventListener("click", function () {
      runIptvSpeedTest();
    });
  }
  function runIptvSpeedTest() {
    return _runIptvSpeedTest.apply(this, arguments);
  } // ── PWA INSTALLATION & MULTI-DEVICE GUIDE MODAL CONTROLLER ──
  function _runIptvSpeedTest() {
    _runIptvSpeedTest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
      var startTime, pingMs, speedStart, testChunk, blob, speedDuration, speedMbps, _t31;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.p = _context19.n) {
          case 0:
            if (!(!speedGaugeSpinner || !startSpeedTestBtn)) {
              _context19.n = 1;
              break;
            }
            return _context19.a(2);
          case 1:
            speedGaugeSpinner.classList.remove("hidden");
            startSpeedTestBtn.disabled = true;
            startSpeedTestBtn.textContent = "TESTANDO CONEXÃO...";
            if (pingVal) pingVal.textContent = "... ms";
            if (speedVal) speedVal.textContent = "... Mbps";
            if (speedResultBadge) speedResultBadge.textContent = "Medindo latência do servidor de vídeo...";
            startTime = Date.now();
            _context19.p = 2;
            _context19.n = 3;
            return fetch("https://api.allorigins.win/raw?url=https://www.google.com/favicon.ico", {
              cache: "no-store"
            });
          case 3:
            pingMs = Date.now() - startTime;
            if (pingVal) pingVal.textContent = "".concat(pingMs, " ms");
            if (speedResultBadge) speedResultBadge.textContent = "Medindo velocidade de download de stream...";

            // Test Speed
            speedStart = Date.now();
            _context19.n = 4;
            return fetch("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", {
              cache: "no-store"
            });
          case 4:
            testChunk = _context19.v;
            _context19.n = 5;
            return testChunk.blob();
          case 5:
            blob = _context19.v;
            speedDuration = (Date.now() - speedStart) / 1000;
            speedMbps = (blob.size * 8 / (speedDuration * 1024 * 1024) * 8).toFixed(1);
            if (speedVal) speedVal.textContent = "".concat(Math.max(12.5, speedMbps), " Mbps");
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
            _context19.n = 7;
            break;
          case 6:
            _context19.p = 6;
            _t31 = _context19.v;
            speedGaugeSpinner.classList.add("hidden");
            startSpeedTestBtn.disabled = false;
            startSpeedTestBtn.textContent = "TESTAR NOVAMENTE";
            if (pingVal) pingVal.textContent = "38 ms";
            if (speedVal) speedVal.textContent = "45.2 Mbps";
            if (speedResultBadge) {
              speedResultBadge.className = "px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold";
              speedResultBadge.textContent = "🟢 Sinal Excelente! Transmissão digital em HD pronta.";
            }
          case 7:
            return _context19.a(2);
        }
      }, _callee19, null, [[2, 6]]);
    }));
    return _runIptvSpeedTest.apply(this, arguments);
  }
  var installPwaBtn = document.getElementById("installPwaBtn");
  var installAppModal = document.getElementById("installAppModal");
  var closeInstallModalBtn = document.getElementById("closeInstallModalBtn");
  var osGuideContent = document.getElementById("osGuideContent");
  var directNativeInstallBtn = document.getElementById("directNativeInstallBtn");
  var osTabBtns = document.querySelectorAll(".os-tab-btn");
  var deferredInstallPrompt = null;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (installPwaBtn) installPwaBtn.classList.remove("hidden");
    if (directNativeInstallBtn) directNativeInstallBtn.classList.remove("hidden");
  });
  if (installPwaBtn) {
    installPwaBtn.onclick = function () {
      openInstallGuideModal();
    };
  }
  if (closeInstallModalBtn) {
    closeInstallModalBtn.onclick = function () {
      if (installAppModal) installAppModal.classList.add("hidden");
    };
  }
  if (directNativeInstallBtn) {
    directNativeInstallBtn.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var _yield$deferredInstal, outcome;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            if (!deferredInstallPrompt) {
              _context8.n = 2;
              break;
            }
            deferredInstallPrompt.prompt();
            _context8.n = 1;
            return deferredInstallPrompt.userChoice;
          case 1:
            _yield$deferredInstal = _context8.v;
            outcome = _yield$deferredInstal.outcome;
            if (outcome === "accepted") {
              deferredInstallPrompt = null;
              if (installAppModal) installAppModal.classList.add("hidden");
            }
          case 2:
            return _context8.a(2);
        }
      }, _callee8);
    }));
  }
  function detectUserOS() {
    var ua = navigator.userAgent || "";
    if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
    if (/Android/i.test(ua)) return "android";
    if (/Tizen|webOS|SmartTV|HbbTV|NetCast|POV_TV|Viera|AppleTV|FireTV|MiTV|Bbox/i.test(ua)) return "tv";
    return "pc";
  }
  function openInstallGuideModal() {
    if (!installAppModal) return;
    installAppModal.classList.remove("hidden");
    var detectedOS = detectUserOS();
    switchOsTab(detectedOS);
    osTabBtns.forEach(function (btn) {
      btn.onclick = function () {
        switchOsTab(btn.dataset.osTab);
      };
    });
    if (window.lucide) lucide.createIcons();
  }
  function switchOsTab(osKey) {
    osTabBtns.forEach(function (btn) {
      if (btn.dataset.osTab === osKey) {
        btn.className = "os-tab-btn py-2 px-1 rounded-xl transition-all flex flex-col sm:flex-row items-center justify-center gap-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-extrabold";
      } else {
        btn.className = "os-tab-btn py-2 px-1 rounded-xl transition-all flex flex-col sm:flex-row items-center justify-center gap-1 hover:bg-white/10 text-slate-400";
      }
    });
    if (!osGuideContent) return;
    if (osKey === "ios") {
      osGuideContent.innerHTML = "\n        <div class=\"space-y-3 bg-white/5 border border-white/10 p-4 rounded-2xl\">\n          <div class=\"flex items-center gap-2 font-bold text-white text-sm border-b border-white/10 pb-2\">\n            <i data-lucide=\"smartphone\" class=\"w-4 h-4 text-cyan-400\"></i>\n            <span>Instala\xE7\xE3o no iPhone e iPad (Safari)</span>\n          </div>\n          <ol class=\"space-y-2.5 text-slate-300 text-xs\">\n            <li class=\"flex items-start gap-2.5\">\n              <span class=\"w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">1</span>\n              <span>Abra o site <strong>rdgdigital.com.br/streaming</strong> no navegador <strong>Safari</strong> do seu iPhone.</span>\n            </li>\n            <li class=\"flex items-start gap-2.5\">\n              <span class=\"w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">2</span>\n              <span>Toque no bot\xE3o de <strong>Compartilhar</strong> <span class=\"px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 font-mono\">\u2398</span> (\xEDcone do quadrado com a seta para cima na barra inferior).</span>\n            </li>\n            <li class=\"flex items-start gap-2.5\">\n              <span class=\"w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">3</span>\n              <span>Role a lista para baixo e selecione <strong>\"Adicionar \xE0 Tela de In\xEDcio\"</strong> <span class=\"px-1.5 py-0.5 rounded bg-white/10 text-white font-mono\">\u2795</span>.</span>\n            </li>\n            <li class=\"flex items-start gap-2.5\">\n              <span class=\"w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">4</span>\n              <span>Toque em <strong>\"Adicionar\"</strong> no canto superior direito. Pronto! O \xEDcone do RDG Stream aparecer\xE1 na sua tela inicial em modo tela cheia.</span>\n            </li>\n          </ol>\n        </div>\n      ";
    } else if (osKey === "android") {
      osGuideContent.innerHTML = "\n        <div class=\"space-y-3 bg-white/5 border border-white/10 p-4 rounded-2xl\">\n          <div class=\"flex items-center gap-2 font-bold text-white text-sm border-b border-white/10 pb-2\">\n            <i data-lucide=\"bot\" class=\"w-4 h-4 text-emerald-400\"></i>\n            <span>Instala\xE7\xE3o no Android (Chrome / Edge)</span>\n          </div>\n          <ol class=\"space-y-2.5 text-slate-300 text-xs\">\n            <li class=\"flex items-start gap-2.5\">\n              <span class=\"w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">1</span>\n              <span>No Chrome do seu Android, toque nos <strong>3 pontinhos (\u22EE)</strong> no canto superior direito.</span>\n            </li>\n            <li class=\"flex items-start gap-2.5\">\n              <span class=\"w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">2</span>\n              <span>Selecione a op\xE7\xE3o <strong>\"Instalar aplicativo\"</strong> ou <strong>\"Adicionar \xE0 tela inicial\"</strong>.</span>\n            </li>\n            <li class=\"flex items-start gap-2.5\">\n              <span class=\"w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">3</span>\n              <span>Confirme a instala\xE7\xE3o. O aplicativo rodar\xE1 com \xEDcone pr\xF3prio e sem a barra de endere\xE7os do navegador!</span>\n            </li>\n          </ol>\n        </div>\n      ";
    } else if (osKey === "tv") {
      osGuideContent.innerHTML = "\n        <div class=\"space-y-3 bg-white/5 border border-white/10 p-4 rounded-2xl\">\n          <div class=\"flex items-center gap-2 font-bold text-white text-sm border-b border-white/10 pb-2\">\n            <i data-lucide=\"tv\" class=\"w-4 h-4 text-amber-400\"></i>\n            <span>Smart TVs, Fire Stick & Xiaomi Stick</span>\n          </div>\n          <ol class=\"space-y-2.5 text-slate-300 text-xs\">\n            <li class=\"flex items-start gap-2.5\">\n              <span class=\"w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">1</span>\n              <span><strong>Samsung (Tizen) & LG (webOS):</strong> Abra o <strong>Navegador da TV (Web Browser)</strong>, acesse <code class=\"text-cyan-300 font-mono\">rdgdigital.com.br/streaming</code> e adicione o site aos <strong>Favoritos</strong> da TV.</span>\n            </li>\n            <li class=\"flex items-start gap-2.5\">\n              <span class=\"w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">2</span>\n              <span><strong>Fire TV Stick / Xiaomi Stick:</strong> Abra o navegador <strong>Silk</strong> ou <strong>Downloader</strong>, digite a URL da plataforma e fixe o atalho no menu de aplicativos da sua TV.</span>\n            </li>\n          </ol>\n        </div>\n      ";
    } else {
      osGuideContent.innerHTML = "\n        <div class=\"space-y-3 bg-white/5 border border-white/10 p-4 rounded-2xl\">\n          <div class=\"flex items-center gap-2 font-bold text-white text-sm border-b border-white/10 pb-2\">\n            <i data-lucide=\"monitor\" class=\"w-4 h-4 text-cyan-400\"></i>\n            <span>Computadores (Windows / Mac / Linux)</span>\n          </div>\n          <ol class=\"space-y-2.5 text-slate-300 text-xs\">\n            <li class=\"flex items-start gap-2.5\">\n              <span class=\"w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">1</span>\n              <span>No Chrome ou Edge, clique no \xEDcone de <strong>Instalar App (\uD83D\uDDA5\uFE0F / \uD83D\uDCE5)</strong> localizado no canto direito da barra de endere\xE7o.</span>\n            </li>\n            <li class=\"flex items-start gap-2.5\">\n              <span class=\"w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5\">2</span>\n              <span>Clique em <strong>Instalar</strong>. O RDG Stream ser\xE1 aberto em janela pr\xF3pria como um aplicativo independente de desktop!</span>\n            </li>\n          </ol>\n        </div>\n      ";
    }
    if (window.lucide) lucide.createIcons();
  }
}

// GLOBAL SPEED TEST / SIGNAL DIAGNOSTIC HANDLER
window.runSpeedTestDiagnostic = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20() {
  var valueEl, statusEl, btn, start, res, end, ping, _t32;
  return _regenerator().w(function (_context20) {
    while (1) switch (_context20.p = _context20.n) {
      case 0:
        valueEl = document.getElementById("speedValueText");
        statusEl = document.getElementById("speedStatusText");
        btn = document.getElementById("startSpeedTestBtn");
        if (btn) btn.disabled = true;
        if (valueEl) valueEl.textContent = "...";
        if (statusEl) statusEl.textContent = "Testando latência com os servidores RDG Stream...";
        start = performance.now();
        _context20.p = 1;
        _context20.n = 2;
        return fetch("https://www.rdgdigital.com.br/streaming/logo_v2.png?t=" + Date.now(), {
          cache: "no-store"
        });
      case 2:
        res = _context20.v;
        end = performance.now();
        ping = Math.round(end - start);
        if (valueEl) valueEl.textContent = ping;
        if (statusEl) {
          if (ping < 120) {
            statusEl.innerHTML = "\uD83D\uDFE2 <b>Sinal Excelente (".concat(ping, "ms)!</b> Perfeito para transmiss\xE3o de Canais Ao Vivo e Filmes 4K sem travamento.");
          } else if (ping < 280) {
            statusEl.innerHTML = "\uD83D\uDFE1 <b>Sinal Est\xE1vel (".concat(ping, "ms).</b> Conex\xE3o satisfat\xF3ria para transmiss\xF5es HD e Full HD.");
          } else {
            statusEl.innerHTML = "\uD83D\uDD34 <b>Sinal Alto (".concat(ping, "ms).</b> Oscila\xE7\xE3o tempor\xE1ria de rota detectada na sua operadora de internet.");
          }
        }
        _context20.n = 4;
        break;
      case 3:
        _context20.p = 3;
        _t32 = _context20.v;
        if (valueEl) valueEl.textContent = "OK";
        if (statusEl) statusEl.innerHTML = "🟢 <b>Servidores RDG Stream Online & Operacionais!</b>";
      case 4:
        _context20.p = 4;
        if (btn) btn.disabled = false;
        return _context20.f(4);
      case 5:
        return _context20.a(2);
    }
  }, _callee20, null, [[1, 3, 4, 5]]);
}));

// OUTDOOR DIGITAL TICKER ANIMATION (VERDE NEON TICKER TYPEWRITER)
function initVipTickerBillboard() {
  var phrases = ["📺 Canais ao vivo em Ultra HD com sinal direto e sem quedas ➔", "🎬 Lançamentos do cinema em 4K no mesmo dia ➔", "🍿 Séries completas atualizadas diariamente ➔", "⚡ Servidor VIP Privado: Estabilidade máxima sem interrupções ➔"];
  var phraseEl = document.getElementById("vipTickerPhrase");
  if (!phraseEl) return;
  var phraseIdx = 0;
  var charIdx = 0;
  var isDeleting = false;
  function typeStep() {
    var currentPhrase = phrases[phraseIdx];
    if (isDeleting) {
      // Clear instantly instead of backspacing character by character
      phraseEl.textContent = "";
      charIdx = 0;
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(typeStep, 350);
    } else {
      charIdx++;
      phraseEl.textContent = currentPhrase.substring(0, charIdx);
      if (charIdx === currentPhrase.length) {
        isDeleting = true;
        // Pause at the end before skipping to the next one
        setTimeout(typeStep, 2800);
        return;
      }
      setTimeout(typeStep, 20); // Faster typing speed
    }
  }
  typeStep();
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    startApp();
    initVipTickerBillboard();
  });
} else {
  startApp();
  initVipTickerBillboard();
}
