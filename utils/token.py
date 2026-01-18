from utils import store
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

security = HTTPBearer()

async def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    if token not in store.tokens:
        raise HTTPException( status_code=status.HTTP_401_UNAUTHORIZED, detail="无效的token")
    return token