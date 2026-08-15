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

    print("URL:", response.url)
    print("STATUS:", response.status_code)
    print("RESPONSE:", response.text)

    response.raise_for_status()

    return response.json()