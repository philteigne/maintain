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
