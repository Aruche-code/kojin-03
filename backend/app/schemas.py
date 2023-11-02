# backend/app/schemas.py
# スキーマの定義
# このファイルは、リクエストとレスポンスのデータ構造を定義します。
# ここでのバリデーションがデータの整合性を保証する重要な役割を果たします。

from pydantic import BaseModel


# アイデア作成用スキーマ
class IdeaCreate(BaseModel):
    text: str


# アイデア読み込み用スキーマ（レスポンス用）
class Idea(BaseModel):
    id: int
    text: str

    class Config:
        from_attributes = True
