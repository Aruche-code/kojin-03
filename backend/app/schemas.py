# backend/app/schemas.py
# スキーマの定義
# このファイルは、リクエストとレスポンスのデータ構造を定義します。
# ここでのバリデーションがデータの整合性を保証する重要な役割を果たします。

from typing import List, Dict, Set, Union, Optional
from pydantic import BaseModel


# リクエスト用のユーザー作成スキーマ
class CreateUserRequest(BaseModel):
    name: str
    age: int


# レスポンスとして返されるユーザー情報のスキーマ
class UserResponse(BaseModel):
    id: int
    name: str
    age: int


# 複数のユーザー情報を含むレスポンスのスキーマ
class UsersResponse(BaseModel):
    users: List[UserResponse]


# ユーザーの更新リクエストのためのスキーマ
class UpdateUserRequest(BaseModel):
    name: str
    age: int


# ユーザーの削除レスポンスのためのスキーマ
class DeleteUserResponse(BaseModel):
    message: str
