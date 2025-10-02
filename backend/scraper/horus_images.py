import requests
from bs4 import BeautifulSoup

def scrape_images(query, max_images=10):
    search_url = f"https://www.bing.com/images/search?q={query.replace(' ', '+')}+horus+heresy"
    page = requests.get(search_url)
    soup = BeautifulSoup(page.content, "html.parser")
    images = []
    for img in soup.find_all("img", limit=max_images):
        src = img.get("src")
        if src and src.startswith("http"):
            images.append(src)
    return images

if __name__ == "__main__":
    images = scrape_images("Luna Wolves")
    for i, url in enumerate(images):
        print(f"{i+1}: {url}")