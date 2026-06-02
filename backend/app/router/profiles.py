
from fastapi import APIRouter, Depends, HTTPException
from app.schema.profiles import SignInRequest, SignUpRequest, SignUpResponse
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
    data: SignInRequest,
    auth_service: AuthService = Depends(get_auth_service),
):
    try:
        return auth_service.sign_in(data.email, data.password)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))