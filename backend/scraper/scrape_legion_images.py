import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient

def scrape_images(legion):
    url = f"https://www.bing.com/images/search?q={legion.replace(' ', '+')}+horus+heresy"
    soup = BeautifulSoup(requests.get(url).content, "html.parser")
    return [img['src'] for img in soup.find_all('img') if img.get('src', '').startswith('http')]

def store_images(legion, image_urls):
    client = MongoClient('mongodb://localhost:27017/')
    db = client.horus_heresy_rpg
    db.images.insert_one({'legion': legion, 'urls': image_urls})

if __name__ == "__main__":
    legion = "Luna Wolves"
    images = scrape_images(legion)
    store_images(legion, images)
    print(f"Stored {len(images)} images for {legion}")