import re

with open('test_drive.html', 'r', encoding='utf-8') as f:
    content = f.read()

all_mp4 = re.findall(r'([^\"]+\.mp4)', content)
print("Found mp4 strings:", set(all_mp4))

aulas = re.findall(r'([^\"]*[Aa]ula[^\"]*)', content)
print("Found Aula strings:", list(set(aulas))[:20])

names = re.findall(r'\[\"(.*?)\",\"([a-zA-Z0-9_-]{28,33})\"\]', content)
print("Found arrays:", names[:5] if names else "None")

names = re.findall(r'\[\"([a-zA-Z0-9_-]{28,33})\",\"(.*?\.mp4)\"', content)
if not names:
    names = re.findall(r'\[\"(.*?\.mp4)\",\"([a-zA-Z0-9_-]{28,33})\"\]', content)

# Look for titles
titles = re.findall(r'\"([^\"]+?\.mp4)\"', content)
print("Titles found:", set(titles))

# Just try to grab ALL ids and titles near each other
matches = re.findall(r'\[\"(.*?)\",\"([a-zA-Z0-9_-]{28,33})\",\"', content)
found = set()
for name, f_id in matches:
    if 'mp4' in name.lower() or 'aula' in name.lower() or '0' in name or '1' in name:
        found.add((name, f_id))
print("Broad matches:")
for item in found:
    print(item)
