import requests

from app.config import settings

def get_news():
    params = {
        "language": "en",
        "page_size": 5,
        "keywords": "Iran",
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
    # News API
    return data