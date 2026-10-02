import requests
import zipfile
import os
import shutil
import json
import tkinter as tk
from tkinter import messagebox, ttk
import sys
import tempfile
import threading

try:
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
except Exception:
    pass

# ============================
# CONFIGURAÇÕES
# ============================
UPDATE_CHECK_URLS = [
    "https://raw.githubusercontent.com/Renatobot/site-rdg/main/public/updates/version.json",
    "https://www.rdgdigital.com.br/updates/version.json",
    "https://raw.githubusercontent.com/Renatobot/site-rdg/main/public/updates/check.json",
    "https://rdginteligenteupdate.squareweb.app/check"
]

FALLBACK_DOWNLOAD_URLS = [
    "https://raw.githubusercontent.com/Renatobot/site-rdg/main/public/updates/update.zip",
    "https://www.rdgdigital.com.br/updates/update.zip",
    "https://rdginteligenteupdate.squareweb.app/download"
]

INSTALL_DIR = r"C:\ExtensaoRDG\Extensao"
DOWNLOAD_DIR = os.path.join(tempfile.gettempdir(), "RDG_updates")
ZIP_FILE = os.path.join(DOWNLOAD_DIR, "update.zip")

def resource_path(relative_path):
    try:
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)

try:
    ICON_PATH = resource_path("iconrdg.ico")
except Exception:
    ICON_PATH = None

# ============================
# PALETA DE CORES RDG
# ============================
C = {
    "bg":        "#0A0A0A",
    "card":      "#111111",
    "border":    "#1E1E1E",
    "border2":   "#2A2A2A",
    "text":      "#F5F5F5",
    "muted":     "#555555",
    "muted2":    "#888888",
    "indigo":    "#6366F1",
    "indigo2":   "#4F52D9",
    "success":   "#10B981",
    "warning":   "#F59E0B",
    "danger":    "#EF4444",
}

def get_local_version():
    manifest_path = os.path.join(INSTALL_DIR, "manifest.json")
    if os.path.exists(manifest_path):
        try:
            with open(manifest_path, "r", encoding="utf-8") as f:
                data = json.load(f)
                v = str(data.get("version", "1.0")).strip()
                return v if v else "1.0"
        except Exception:
            pass
    return "0.0"

def parse_version(v_str):
    try:
        clean = str(v_str).lower().replace("v", "").strip()
        parts = [int(p) for p in clean.split(".") if p.isdigit()]
        return tuple(parts) if parts else (0,)
    except Exception:
        return (0,)

# ============================
# JANELA PRINCIPAL
# ============================
root = tk.Tk()
root.title("RDG instaPRO — Atualizador")
root.geometry("540x470")
root.configure(bg=C["bg"])
root.resizable(False, False)

if ICON_PATH and os.path.exists(ICON_PATH):
    try:
        root.iconbitmap(ICON_PATH)
    except Exception:
        pass

# ============================
# LAYOUT: HEADER
# ============================
header = tk.Frame(root, bg=C["bg"])
header.pack(fill="x", padx=28, pady=(28, 0))

tk.Label(
    header, text="RDG instaPRO",
    font=("Segoe UI", 22, "bold"),
    fg=C["text"], bg=C["bg"]
).pack(anchor="w")

tk.Label(
    header, text="Atualizador de Extensão Oficial",
    font=("Segoe UI", 11),
    fg=C["muted2"], bg=C["bg"]
).pack(anchor="w", pady=(2, 0))

# Linha divisória
tk.Frame(root, bg=C["border"], height=1).pack(fill="x", padx=28, pady=(16, 0))

# ============================
# CARD DE STATUS
# ============================
status_card = tk.Frame(root, bg=C["card"], highlightbackground=C["border"], highlightthickness=1)
status_card.pack(fill="x", padx=28, pady=16)

status_inner = tk.Frame(status_card, bg=C["card"])
status_inner.pack(fill="x", padx=18, pady=14)

lbl_status_title = tk.Label(
    status_inner, text="STATUS DO SISTEMA",
    font=("Segoe UI", 8, "bold"),
    fg=C["muted"], bg=C["card"], anchor="w"
)
lbl_status_title.pack(anchor="w")

current_local_ver = get_local_version()
lbl_status = tk.Label(
    status_inner,
    text=f"Versão instalada: v{current_local_ver} | Pronto para verificar.",
    font=("Segoe UI", 11),
    fg=C["text"], bg=C["card"], anchor="w", wraplength=440, justify="left"
)
lbl_status.pack(anchor="w", pady=(4, 0))

# Barra de progresso
progress_frame = tk.Frame(root, bg=C["bg"])
progress_frame.pack(fill="x", padx=28)

style = ttk.Style()
style.theme_use("clam")
style.configure(
    "RDG.Horizontal.TProgressbar",
    troughcolor=C["border"],
    background=C["indigo"],
    lightcolor=C["indigo"],
    darkcolor=C["indigo"],
    bordercolor=C["border"],
    thickness=6
)

progressbar = ttk.Progressbar(
    progress_frame,
    style="RDG.Horizontal.TProgressbar",
    mode="indeterminate",
    length=480
)

# ============================
# CONTROLE DE INTERFACE
# ============================
def set_status(text, color=None):
    lbl_status.config(text=text, fg=color or C["text"])
    root.update_idletasks()

def finish_ui():
    progressbar.stop()
    progressbar.pack_forget()
    btn_update.config(state="normal", text="Verificar & Atualizar Agora", bg=C["indigo"], fg=C["text"])

def run_update():
    btn_update.config(state="disabled", text="Verificando...", bg=C["border2"], fg=C["muted2"])
    progressbar.pack(fill="x", pady=(8, 0))
    progressbar.start(12)
    set_status("Conectando com os servidores RDG Digital...", C["muted2"])

    def task():
        update_info = check_for_update()

        if update_info and update_info.get("version") and update_info["version"] != "0":
            remote_ver = str(update_info.get("version", "?")).strip()
            local_ver = get_local_version()
            last_date = update_info.get("last_update", "Recente")

            is_newer = parse_version(remote_ver) > parse_version(local_ver)

            if is_newer:
                root.after(0, lambda: set_status(
                    f"Nova versão encontrada: v{remote_ver} (Atual: v{local_ver}) | Data: {last_date}", C["warning"]
                ))
                root.after(100, lambda: ask_and_update(update_info, is_upgrade=True))
            else:
                root.after(0, lambda: set_status(
                    f"Você já está com a versão mais recente: v{local_ver}", C["success"]
                ))
                root.after(100, lambda: prompt_reinstall(update_info, local_ver))
        else:
            root.after(0, lambda: set_status("Não foi possível obter dados da versão. Tente novamente mais tarde.", C["danger"]))
            root.after(0, finish_ui)

    threading.Thread(target=task, daemon=True).start()

def prompt_reinstall(update_info, local_ver):
    finish_ui()
    resp = messagebox.askyesno(
        "Versão Atualizada",
        f"A extensão já está na versão mais recente (v{local_ver}).\n\n"
        "Deseja reinstalar / restaurar os arquivos da extensão para garantir a integridade?\n"
        "(O navegador será fechado automaticamente)"
    )
    if resp:
        start_download_and_install(update_info)

def ask_and_update(update_info, is_upgrade=True):
    finish_ui()
    remote_ver = update_info.get("version", "2.1")
    local_ver = get_local_version()

    resp = messagebox.askyesno(
        "Nova Versão Disponível",
        f"Nova versão {remote_ver} disponível!\n(Sua versão atual: v{local_ver})\n\n"
        "Deseja baixar e instalar a atualização agora?\n(O navegador será fechado automaticamente)"
    )
    if resp:
        start_download_and_install(update_info)

def start_download_and_install(update_info):
    btn_update.config(state="disabled", text="Instalando...", bg=C["border2"], fg=C["muted2"])
    progressbar.pack(fill="x", pady=(8, 0))
    progressbar.start(12)
    set_status("Baixando arquivos da extensão...", C["muted2"])

    def task():
        dl = download_update(update_info)
        if dl:
            root.after(0, lambda: set_status("Aplicando atualização...", C["muted2"]))
            ok = apply_update(dl)
            if ok:
                root.after(0, lambda: set_status("Extensão atualizada com sucesso!", C["success"]))
            else:
                root.after(0, lambda: set_status("Falha ao aplicar a atualização.", C["danger"]))
        else:
            root.after(0, lambda: set_status("Falha no download. Verifique a conexão com a internet.", C["danger"]))
        root.after(0, finish_ui)

    threading.Thread(target=task, daemon=True).start()

# ============================
# FUNÇÕES DE ATUALIZAÇÃO
# ============================
def check_for_update():
    headers = {"User-Agent": "RDG-instaPRO-Updater/2.1"}
    for url in UPDATE_CHECK_URLS:
        try:
            r = requests.get(url, headers=headers, timeout=8)
            if r.status_code == 200:
                data = r.json()
                if isinstance(data, dict) and data.get("version"):
                    return data
        except Exception:
            continue

    root.after(0, lambda: set_status("Servidores de atualização temporariamente inacessíveis.", C["danger"]))
    return None

def download_update(update_info=None):
    try:
        if os.path.exists(DOWNLOAD_DIR):
            shutil.rmtree(DOWNLOAD_DIR, ignore_errors=True)
        os.makedirs(DOWNLOAD_DIR, exist_ok=True)

        candidate_urls = []
        if update_info:
            if update_info.get("download_url"):
                candidate_urls.append(update_info.get("download_url"))
            if update_info.get("download_url_mirror"):
                candidate_urls.append(update_info.get("download_url_mirror"))
        candidate_urls.extend(FALLBACK_DOWNLOAD_URLS)

        # Deduplicate preserving order
        urls_to_try = []
        for u in candidate_urls:
            if u and u not in urls_to_try:
                urls_to_try.append(u)

        headers = {"User-Agent": "RDG-instaPRO-Updater/2.1"}

        for url in urls_to_try:
            try:
                root.after(0, lambda: set_status(f"Conectando ao download...", C["muted2"]))
                r = requests.get(url, headers=headers, stream=True, timeout=25)
                if r.status_code != 200:
                    continue

                total = int(r.headers.get("content-length", 0))
                done = 0

                with open(ZIP_FILE, "wb") as f:
                    for chunk in r.iter_content(8192):
                        if chunk:
                            f.write(chunk)
                            done += len(chunk)
                            if total > 0:
                                pct = int((done / total) * 100)
                                root.after(0, lambda p=pct: set_status(f"Baixando atualização... {p}%", C["muted2"]))

                if os.path.exists(ZIP_FILE) and os.path.getsize(ZIP_FILE) > 10000:
                    return ZIP_FILE
            except Exception:
                continue

        return None
    except Exception as e:
        root.after(0, lambda: set_status(f"Erro no download: {e}", C["danger"]))
        return None

def apply_update(zip_path):
    try:
        os.system("taskkill /f /im chrome.exe >nul 2>&1")
        os.system("taskkill /f /im chromium.exe >nul 2>&1")

        parent_dir = os.path.dirname(INSTALL_DIR)
        os.makedirs(parent_dir, exist_ok=True)
        if not os.access(parent_dir, os.W_OK):
            messagebox.showerror("Permissão", "Permissão negada. Execute o atualizador como Administrador.")
            return False

        os.makedirs(INSTALL_DIR, exist_ok=True)

        with zipfile.ZipFile(zip_path, "r") as z:
            names = [m for m in z.namelist() if not m.endswith("/")]
            
            # Detecta se os arquivos estão dentro de uma subpasta raiz comum (ex: Extensao/)
            prefix = ""
            first_segments = {m.split("/")[0] for m in names if "/" in m}
            if len(first_segments) == 1 and all(m.startswith(list(first_segments)[0] + "/") for m in names):
                prefix = list(first_segments)[0] + "/"

            for member in names:
                rel = member[len(prefix):] if prefix and member.startswith(prefix) else member
                dest = os.path.normpath(os.path.join(INSTALL_DIR, rel.replace("/", os.sep)))
                
                # Previne path traversal
                if not dest.startswith(os.path.normpath(INSTALL_DIR)):
                    continue
                    
                os.makedirs(os.path.dirname(dest), exist_ok=True)
                with z.open(member) as src, open(dest, "wb") as dst:
                    shutil.copyfileobj(src, dst)

        if os.path.exists(DOWNLOAD_DIR):
            shutil.rmtree(DOWNLOAD_DIR, ignore_errors=True)

        messagebox.showinfo("Sucesso", "RDG instaPRO atualizado com sucesso!\nAbra o programa normalmente.")
        root.destroy()
        return True
    except Exception as e:
        messagebox.showerror("Erro", f"Falha ao instalar atualização: {e}")
        return False

# ============================
# BOTÃO PRINCIPAL
# ============================
btn_update = tk.Button(
    root,
    text="Verificar & Atualizar Agora",
    command=run_update,
    bg=C["indigo"],
    fg=C["text"],
    font=("Segoe UI", 11, "bold"),
    relief="flat",
    cursor="hand2",
    activebackground=C["indigo2"],
    activeforeground=C["text"],
    pady=12
)
btn_update.pack(fill="x", padx=28, pady=(0, 4))

# ============================
# CARD INFORMATIVO (PASSO A PASSO)
# ============================
info_card = tk.Frame(root, bg=C["card"], highlightbackground=C["border"], highlightthickness=1)
info_card.pack(fill="x", padx=28, pady=(12, 0))

info_inner = tk.Frame(info_card, bg=C["card"])
info_inner.pack(fill="x", padx=18, pady=14)

tk.Label(
    info_inner, text="PASSO A PASSO",
    font=("Segoe UI", 8, "bold"),
    fg=C["muted"], bg=C["card"], anchor="w"
).pack(anchor="w")

steps = [
    "1. Feche o RDG instaPRO e o navegador se estiverem abertos.",
    "2. Clique em 'Verificar & Atualizar Agora' acima.",
    "3. Aguarde o download e a instalação automática (levará segundos).",
    "4. Após concluir, abra o RDG instaPRO normalmente.",
]
for s in steps:
    tk.Label(
        info_inner, text=s,
        font=("Segoe UI", 9),
        fg=C["muted2"], bg=C["card"],
        anchor="w", justify="left"
    ).pack(anchor="w", pady=1)

# ============================
# RODAPÉ
# ============================
footer = tk.Frame(root, bg=C["bg"])
footer.pack(fill="x", padx=28, pady=(14, 20))

tk.Label(
    footer, text="rdgdigital.com.br",
    font=("Segoe UI", 9),
    fg=C["muted"], bg=C["bg"]
).pack(anchor="w")

root.mainloop()