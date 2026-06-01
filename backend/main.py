import os
from app.router import products, profiles
from fastapi import FastAPI

# load_dotenv()

app = FastAPI()

app.include_router(profiles.router, prefix="/auth", tags=["Authentification"])

app.include_router(products.router, prefix="/product", tags=["Product"])

