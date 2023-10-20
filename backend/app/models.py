# backend/app/models.py
# データベースモデルの整理
# このファイルは、データベースのテーブル構造とビジネスロジックを定義します。
# ORMを通じて、コードとデータベースのスキーマが密接に連動します。

from sqlalchemy import Column, Integer, String, Sequence
from sqlalchemy.ext.declarative import declarative_base

# declarative_baseクラスは、モデルクラスの基底クラスとして機能し、
# テーブルとモデルクラスのマッピングを自動化します。
Base = declarative_base()


# ユーザーテーブルを作成
class User(Base):
    __tablename__ = "users"
    id = Column(
        Integer, primary_key=True, index=True
    )  # idが一意であり、高速な検索が可能なインデックスとして機能するようにします
    name = Column(String, index=True)  # 名前での検索を最適化する可能性があるため、インデックスを追加します
    age = Column(Integer)
