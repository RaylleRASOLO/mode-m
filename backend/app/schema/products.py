from datetime import datetime
from typing import Optional

from pydantic import BaseModel

class Product(BaseModel):
  sty_id: int
  cat_id: int
  product_name: str
  product_price: float
  product_stock: int
  product_tailles: Optional[list[str]] = [] 
  product_images: Optional[list[str]] = []

class ProductsCreate(Product):
  pass

class ProductsResponse(ProductsCreate):
  product_id: int
  created_at: datetime