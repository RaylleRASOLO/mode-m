from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str
    SUPABASE_URL: str
    SUPABASE_API_KEY: str
    SUPABASE_SERVICE_KEY: str
    APP_NAME: str = "MonAPI"
    DEBUG: bool = False

    class Config:
        env_file = ".env"

# Instance globale réutilisable partout
settings = Settings()