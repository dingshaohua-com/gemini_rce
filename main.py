import uvicorn
from fastapi import FastAPI, HTTPException, Header, Request
from router.index import router

app = FastAPI(title="Gemini Rec API", version="0.0.1")

# 注册聚合路由
app.include_router(router)


uvicorn.run(app, host="0.0.0.0", port=8000)