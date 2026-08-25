import requests

from app.config import settings

def get_news():
    params = {
        "language": "en",
        "page_size": 10,
        "keywords": "Ukraine",
    }

    response = requests.get(
        settings.base_url_news,
        params=params,
        headers={
            "Authorization": settings.api_key_news
        },
        timeout=10,
    )

    response.raise_for_status()

    data = response.json()

    print("=== NEWS DEBUG ===")
    print("URL:", response.url)
    print("COUNT:", len(data.get("news", [])))
    print("TITLES:", [article["title"] for article in data.get("news", [])])

    return data