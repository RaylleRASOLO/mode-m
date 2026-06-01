from typing import Optional

from pydantic import BaseModel, EmailStr

from app.db.models import UserRole


class Profiles(BaseModel):
    email: EmailStr
    password: str
    name: str
    first_name: Optional[str] = None
    avatar: Optional[str] = None
    role: Optional[UserRole] = UserRole.CLIENT

class SignUpRequest(Profiles):
    pass

class SignUpResponse(BaseModel):
    id: str
    email: EmailStr
    name: str
    first_name: Optional[str] = None
    avatar: Optional[str] = None
    role: UserRole
    message: str