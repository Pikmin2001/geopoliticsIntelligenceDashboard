from fastapi import APIRouter
from app.services.straits_api import get_current_status

router = APIRouter()

@router.get("/status")
def status():
    return get_current_status()