import urllib.request
import re
import sys
import json

url = sys.argv[1]
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    matches = re.findall(r'\[\"(.*?)\",\"([a-zA-Z0-9_-]{28,})\",\"', html)
    found = set()
    for name, f_id in matches:
        if name.endswith('.mp4') or name.endswith('.mkv') or name.endswith('.avi') or 'Aula' in name:
            found.add((name, f_id))
    if not found:
        # Try broader regex just in case
        names = re.findall(r'\[\"([a-zA-Z0-9_-]{28,33})\",\"(.*?\.mp4)\"', html)
        for f_id, name in names:
            found.add((name, f_id))

    print(f"Found {len(found)} videos:")
    for name, f_id in sorted(found):
        print(f"{name} -> https://drive.google.com/file/d/{f_id}/preview")
except Exception as e:
    print("Error:", e)
