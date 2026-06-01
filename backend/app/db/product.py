from typing import List

from app.schema.products import ProductsCreate, ProductsResponse
from app.db.database import supabase


class Products:
  def __init__(self):
    self.tablename = "product"

  def create_product(self, data: ProductsCreate) -> ProductsResponse:
    try:
      payload = data.model_dump()

      response = supabase.table(self.tablename).insert(payload).execute()
      
      if not response.data:
        raise Exception("Erreur lors de la création de produit")
      return ProductsResponse(**response.data[0])

    except Exception as e:
      print("Erreur supabase: ", e)
      raise e
    
  def get_all_product(self) -> List[ProductsResponse]:
    try:

      response = supabase.table(self.tablename).select("*").order("created_at", desc=False).execute()
      
      if not response.data:
        raise []
      return [ProductsResponse(**item) for item in response.data]

    except Exception as e:
      print("Erreur supabase: ", e)
      raise e
    
  def delete_product(self, product_id: int) -> bool:
    try:
      supabase.table(self.tablename).delete().eq("product_id", product_id).execute()
      return { "deleted": True }
    except Exception as e:
      print("Erreur supabase: ", e)
      raise e
    
  def update_product(self, product_id: int, data: ProductsCreate) -> ProductsResponse:
    try:
      payload = data.model_dump()
      response = supabase.table(self.tablename).update(payload).eq("product_id", product_id).execute()
      
      if not response.data:
        raise Exception("Erreur lors de la mise à jour du produit")
      return ProductsResponse(**response.data[0])

    except Exception as e:
      print("Erreur supabase: ", e)
      raise e
    
  