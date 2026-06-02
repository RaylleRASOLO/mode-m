import os
from app.router import products, profiles
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# load_dotenv()

app = FastAPI()

# Définir les origines autorisées (votre front Next.js)
origins = [
    "http://localhost:3000",
    # Ajoutez l'URL de votre site de production plus tard
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(profiles.router, prefix="/auth", tags=["Authentification"])

app.include_router(products.router, prefix="/product", tags=["Product"])

