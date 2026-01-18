from utils import store
from utils.token import verify_token
from fastapi import APIRouter, Request, HTTPException

router = APIRouter(prefix="/user", tags=["user"])

@router.get("")
async def root():
    return {"message": "i am user"}

@router.get("/config")
async def admin_get_config(request: Request):
    if not verify_token(request):
        raise HTTPException(status_code=401, detail="未登录")
    return store.config
