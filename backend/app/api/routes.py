from fastapi import APIRouter
from app.services.straits_api import get_current_status
from app.services.currents_api import get_news

router = APIRouter()

@router.get("/status")
def status():
    return get_current_status()

@router.get("/news")
def news():
    return get_news()