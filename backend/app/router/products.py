from typing import List

from fastapi import APIRouter, Depends, HTTPException
from app.db.product import Products
from app.schema.products import ProductsCreate, ProductsResponse


router = APIRouter()

def get_products_service():
  return Products()

@router.post("", response_model=ProductsResponse)
def create_product(
  data: ProductsCreate
):
  try:
    product = Products()
    return product.create_product(data)
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))
  
@router.get("", response_model=List[ProductsResponse])
def get_all_product():
  try:
    product = Products()
    return product.get_all_product()
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))
  
@router.delete("/{product_id}")
def delete_product(product_id: int):
  try:
    product = Products()
    return product.delete_product(product_id)
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))
  
@router.put("/{product_id}", response_model=ProductsResponse)
def update_product(product_id: int, data: ProductsCreate):
  try:
    product = Products()
    return product.update_product(product_id, data)
  except Exception as e:
    raise HTTPException(status_code=400, detail=str(e))