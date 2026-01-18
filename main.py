import dotenv
dotenv.load_dotenv()
import os
from contextlib import asynccontextmanager
import uvicorn
from fastapi import FastAPI, HTTPException, Header, Request, staticfiles
from router.index import router

PORT = os.getenv("PORT")

# synccontextmanager 就是一个生命周期管理器，用于管理服务启动前后的操作
@asynccontextmanager
async def lifespan(app: FastAPI):
    # 启动时执行
    print(f"服务已启动: http://localhost:{PORT}")
    print(f"后台访问: http://localhost:{PORT}/web")
    yield
    # 关闭时执行（如果需要）
    pass

app = FastAPI(title="Gemini Rec API", version="0.0.1", lifespan=lifespan)

# 挂载静态文件目录
app.mount("/web", staticfiles.StaticFiles(directory="web",html=True), name="web")

# 注册聚合路由
app.include_router(router)

uvicorn.run(app, host="0.0.0.0", port=int(PORT))