from fastapi import APIRouter
from . import root, user, auth

# 创建一个父路由来聚合所有子路由
router = APIRouter(prefix="/api")

# 将所有子路由注册到父路由上
router.include_router(root.router)
router.include_router(user.router)
router.include_router(auth.router)