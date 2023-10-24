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


# (推奨)from_ormの非推奨化され、model_validateが新設された
# V1では、ORMインスタンスからPydanticインスタンスを作成する場合は、orm_mode=Trueをセットし、from_ormで処理していましたが
# V2では、from_attributes=Trueをセットし、model_validateで処理するように変更されています。
# ただし、from_ormも現状では従来通り動作します。
