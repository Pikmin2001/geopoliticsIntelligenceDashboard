import requests
from app.config import settings

response = requests.get(f"{settings.base_url_news}", params={"language": "en", "page_size": 1, "keywords": "Iran"}, 
        headers={"Authorization": "settings.api_news_key"}, timeout=10
        )
    
response.raise_for_status()


print(response.json()) 