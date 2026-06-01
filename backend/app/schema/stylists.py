from pydantic import BaseModel


class StylistCreate(BaseModel):
  sty_id: int
  profil_id: str