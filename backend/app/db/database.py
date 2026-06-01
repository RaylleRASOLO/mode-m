import os

from dotenv import load_dotenv
from supabase import Client, create_client

load_dotenv()

url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_API_KEY")
service_key: str = os.getenv("SUPABASE_SERVICE_KEY")

supabase: Client = create_client(url, key)
supabase_admin: Client = create_client(url, service_key)
