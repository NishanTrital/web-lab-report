from pydantic import BaseModel, EmailStr, field_validator

# User schemas
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

    @field_validator("name")
    @classmethod
    def name_must_not_be_empty(cls, v):
        if not v.strip():
            raise ValueError("Name must not be empty")
        return v.strip()

    @field_validator("password")
    @classmethod
    def password_min_length(cls, v):
        if len(v) < 4:
            raise ValueError("Password must be at least 4 characters long")
        return v

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    class Config:
        orm_mode = True

# Todo schemas
class TodoCreate(BaseModel):
    title: str

    @field_validator("title")
    @classmethod
    def title_must_not_be_empty(cls, v):
        if not v.strip():
            raise ValueError("Title must not be empty")
        if len(v) > 200:
            raise ValueError("Title must be 200 characters or fewer")
        return v.strip()

class TodoResponse(BaseModel):
    id: int
    title: str
    completed: bool
    owner_id: int
    class Config:
        orm_mode = True
