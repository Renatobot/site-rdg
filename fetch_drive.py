import urllib.request
import re
import json

url = 'https://drive.google.com/drive/folders/1e8FR093ydXIvXPi-M27HSD1KNstMO55r?usp=sharing'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # Try to find the drive item data in the HTML script tags
    # Usually it's embedded as part of window._DRIVE_inline_response
    matches = re.findall(r'\[\"(.*?)\",\"([a-zA-Z0-9_-]{28,})\",\"', html)
    found = set()
    for name, f_id in matches:
        if name.endswith('.mp4') or name.endswith('.mkv') or name.endswith('.avi') or 'Aula' in name:
            found.add((name, f_id))
    for item in found:
        print(item)
except Exception as e:
    print("Error:", e)
