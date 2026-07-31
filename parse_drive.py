import re

with open('drive.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Look for patterns that match a Google Drive file ID (28 to 33 characters typically)
# Usually they are paired with a filename in the data arrays
# Let's search for .mp4, .mkv, .ts, etc.
names = re.findall(r'\[\"([a-zA-Z0-9_-]{28,33})\",\"(.*?\.mp4)\"', content)
if not names:
    names = re.findall(r'\[\"(.*?\.mp4)\",\"([a-zA-Z0-9_-]{28,33})\"\]', content)

if not names:
    # Try finding any mp4 in the document
    all_mp4 = re.findall(r'([^\"]+\.mp4)', content)
    print("Found mp4 strings:", set(all_mp4))
    
    # Try finding any file names that look like course names
    aulas = re.findall(r'([^\"]*[Aa]ula[^\"]*)', content)
    print("Found Aula strings:", list(set(aulas))[:20])

for match in set(names):
    print(match)
