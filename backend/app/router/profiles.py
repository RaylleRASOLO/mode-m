
from fastapi import APIRouter, Depends, HTTPException
from app.schema.profiles import SignUpRequest, SignUpResponse
from app.services.auth.auth import AuthService


router = APIRouter()

def get_auth_service():
    return AuthService()

@router.post("/sign_up", response_model=SignUpResponse)
def sign_up(
    data: SignUpRequest,
    auth_service: AuthService = Depends(get_auth_service),
):
    try:
        return auth_service.sign_up(data)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
  
@router.post("/sign_in")
def sign_in(
    email: str,
    password: str,
    auth_service: AuthService = Depends(get_auth_service),
):
    try:
        return auth_service.sign_in(email, password)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))