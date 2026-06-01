from fastapi import APIRouter

router = APIRouter()

class Item:
    def __init__(self, name: str, first_name: str, age: int, date_naissance: str):
        self.name = name
        self.first_name = first_name
        self.age = age
        self.date_naissance = date_naissance

@router.get("/hello")
def say_hello():
    return {"message": "Hello, World!"}

@router.get("/goodbye")
def say_goodbye():
    return {"message": "Goodbye les gens !"}

@router.get("/item/{item_id}")
def read_item(item_id: int):
    item = Item(name="John", first_name="Doe", age=30, date_naissance="1993-01-01")
    return {"item_id": item_id, "name": item.name, "first_name": item.first_name, "age": item.age, "date_naissance": item.date_naissance}