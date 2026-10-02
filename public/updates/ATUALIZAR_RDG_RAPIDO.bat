@echo off
setlocal enabledelayedexpansion
title Atualizador Rapido RDG instaPRO v2.1

echo ====================================================
echo      ATUALIZADOR RAPIDO RDG INSTAPRO v2.1
echo ====================================================
echo.
echo [*] Fechando navegadores em execucao...
taskkill /f /im chrome.exe >nul 2>&1
taskkill /f /im chromium.exe >nul 2>&1

echo [*] Baixando a extensao atualizada v2.1 (apenas 6 MB)...
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; (New-Object System.Net.WebClient).DownloadFile('https://raw.githubusercontent.com/Renatobot/site-rdg/main/public/updates/update.zip', '$env:TEMP\update_rdg.zip')"

echo [*] Instalando nova extensao em C:\ExtensaoRDG\Extensao...
powershell -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; $zip = [System.IO.Compression.ZipFile]::OpenRead('$env:TEMP\update_rdg.zip'); foreach ($e in $zip.Entries) { if (!$e.FullName.EndsWith('/')) { $rel = $e.FullName -replace '^Extensao/', ''; $dest = Join-Path 'C:\ExtensaoRDG\Extensao' $rel; $dir = Split-Path $dest; if (!(Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }; [System.IO.Compression.ZipFileExtensions]::ExtractToFile($e, $dest, $true) } }; $zip.Dispose(); Remove-Item '$env:TEMP\update_rdg.zip' -Force -ErrorAction SilentlyContinue"

echo [*] Atualizando o Atualizador Oficial para versoes futuras...
if exist "C:\RDGinstaPRO" (
    powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; (New-Object System.Net.WebClient).DownloadFile('https://raw.githubusercontent.com/Renatobot/site-rdg/main/public/updates/RDG_Atualizador.py', 'C:\RDGinstaPRO\RDG_Atualizador.py')" >nul 2>&1
)

echo.
echo ====================================================
echo  [OK] RDG INSTAPRO ATUALIZADO COM SUCESSO!
echo  A extensao v2.1 e o atualizador foram renovados.
echo  Voce ja pode abrir o RDG instaPRO normalmente.
echo ====================================================
echo.
pause
