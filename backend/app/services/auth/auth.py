from fastapi import HTTPException
from app.db.database import supabase, supabase_admin
from app.schema.profiles import SignUpRequest, SignUpResponse

class AuthService:
  def __init__(self):
    self.tablename = "profile"
    pass

  def sign_up(self, data: SignUpRequest) -> SignUpResponse:
    try:
      print(data)
      # Check if user already exists
      existing_user = supabase_admin.table(self.tablename).select("*").eq("profile_email", data.email).execute()
      if existing_user.data:
        raise HTTPException(status_code=400, detail="Utilisateur déjà existant")

      response = supabase_admin.auth.sign_up(
          {
              "email": data.email,
              "password": data.password,
          }
      )

      # Create new user
      supabase_admin.table(self.tablename).insert({
        "profile_id": str(response.user.id),
        "profile_email": data.email,
        "profile_password": data.password,  # In production, hash the password!
        "profile_name": data.name,
        "profile_firstname": data.first_name,
        "profile_avatar": data.avatar,
        "profile_role": data.role.value  # Default role
      }).execute()

      if data.role.value == "STYLIST":
        supabase_admin.table("stylist").insert({
          # "sty_id": int(response.user.id),
          "profile_id": str(response.user.id),
        }).execute()

      return SignUpResponse(
        id=str(response.user.id),
        email=data.email,
        name=data.name,
        first_name=data.first_name,
        avatar=data.avatar,
        role=data.role,
        message="Utilisateur créé avec succès"
      )
    except Exception as e:
      raise HTTPException(status_code=400, detail=str(e))
    
  def sign_in(self, email: str, password: str):
    try:
        response = supabase_admin.auth.sign_in_with_password(
            {
                "email": email,
                "password": password,
            }
        )
        if not response.user:
            raise HTTPException(status_code=400, detail="Email ou mot de passe incorrect")
        return response
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))