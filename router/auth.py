import secrets
from fastapi import APIRouter,Request
import os
from fastapi.responses import JSONResponse
from utils import store

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/login")
async def login(request: Request):
    data = await request.json()
    username = data.get("username", "")
    password = data.get("password", "")
    if username == os.getenv('ADMIN_USERNAME') and password == os.getenv('ADMIN_PASSWORD'):
        token = secrets.token_hex(32)
        store.tokens.add(token)
        return JSONResponse({"success": True, "message": "登录成功", data: token})
    else:
        return {"success": False, "message": "用户名或密码错误"}