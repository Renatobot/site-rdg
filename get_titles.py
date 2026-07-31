import urllib.request
import re
import concurrent.futures

links = [
    "https://drive.google.com/file/d/1SFGTH8sTjm6aN5Dx-1_JblX43d8tLYA8/view?usp=drive_link",
    "https://drive.google.com/file/d/1KTIT_cPMIvASwKW1ivC076kzQQGkjKUI/view?usp=drive_link",
    "https://drive.google.com/file/d/1J5rRu36iorjcUzv4lPt492qErwBPl16i/view?usp=drive_link",
    "https://drive.google.com/file/d/1bsEDrV8QhFQXG1t2xPxb3FFP_fzI0oSr/view?usp=drive_link",
    "https://drive.google.com/file/d/1Ef-qjN3knF-g_lSBFHO6BzOQv-eUV8hM/view?usp=drive_link",
    "https://drive.google.com/file/d/158vMpTjtz23HWMltvkqJuAaGO2sskFX8/view?usp=drive_link",
    "https://drive.google.com/file/d/17HOdrmMk6PoYJ5g65AIbjjg3zQHi9Gwc/view?usp=drive_link",
    "https://drive.google.com/file/d/12TY9zfci54pgHDZBGJsF4esjZGNmetI1/view?usp=drive_link",
    "https://drive.google.com/file/d/1b0IshRu8ffFDtAxxYy-tNSTs3rAiekS5/view?usp=drive_link",
    "https://drive.google.com/file/d/1Hfqst1tyYtV7BZRow4sowjIwzUEX4rXy/view?usp=drive_link",
    "https://drive.google.com/file/d/1NYlJKfXrBKuMW7HvkvX_HlZ2Yl4U15nm/view?usp=drive_link",
    "https://drive.google.com/file/d/1U8kpX93rgHf8sCHiyS-iDLyPAZ69JZj1/view?usp=drive_link",
    "https://drive.google.com/file/d/1zR8PrwW7V_nz-VZ-BwNIJ8fsTqQ9--fY/view?usp=drive_link",
    "https://drive.google.com/file/d/1EtsMVpZ6i7FMtjfkHzJs1lHGf21ELF8U/view?usp=drive_link",
    "https://drive.google.com/file/d/1CThOxbrLJNXlZPRDK2gKKYKKBySD-c7L/view?usp=drive_link",
    "https://drive.google.com/file/d/1q6hitLzRjmVtANolTOsPznfzCkF486fL/view?usp=drive_link",
    "https://drive.google.com/file/d/1lnvQlHpGXTF6RQ6jbjW8oqbEhenTwbBB/view?usp=drive_link",
    "https://drive.google.com/file/d/1uqnGNoCl74aT3w3snJxs8GXsTPNtpBQ-/view?usp=drive_link"
]

def fetch_title(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        title = re.search(r'<title>(.*?)</title>', html)
        if title:
            return (url, title.group(1).replace(" - Google Drive", ""))
        return (url, "No title")
    except Exception as e:
        return (url, str(e))

with concurrent.futures.ThreadPoolExecutor(max_workers=18) as executor:
    results = executor.map(fetch_title, links)

for url, title in results:
    print(f"{title} -> {url}")
