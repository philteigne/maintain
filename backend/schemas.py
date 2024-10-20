from pydantic import BaseModel

# Schema for creating a task
class TaskCreate(BaseModel):
    title: str
    description: str
    completed: bool = False

# Schema for updating a task
class TaskUpdate(BaseModel):
    title: str
    description: str
    completed: bool

# Schema for returning a task
class Task(BaseModel):
    id: int
    title: str
    description: str
    completed: bool

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str | None = None

class UserBase(BaseModel):
    username: str
    email: str
    is_active: bool

class UserCreate(BaseModel):
    username: str
    email: str
    password: str

class User(UserBase):
    id: int

    class Config:
        orm_mode = True