import requests

from app.config import settings


def get_news():
    response = requests.get(
        f"{settings.base_url_news}", params={"language": "en", "page_size": 4, "keywords": "Iran"}, 
        headers={"Authorization": settings.api_key_news}, timeout=10
        )
    
    response.raise_for_status()


    return response.json()
        

if __name__ == "__main__":
    news = get_news()
    print(news)