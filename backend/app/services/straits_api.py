import requests

from app.config import settings


def get_current_status():
    response = requests.get(
        f"{settings.base_url}/status",
        timeout=10
    )

    response.raise_for_status()

    return response.json()


if __name__ == "__main__":
    status = get_current_status()
    print(status)