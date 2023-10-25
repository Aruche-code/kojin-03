# backend/app/models.py
# データベースモデルの整理
# このファイルは、データベースのテーブル構造とビジネスロジックを定義します。
# ORMを通じて、コードとデータベースのスキーマが密接に連動します。

from sqlalchemy import Column, Integer, String, Sequence
from sqlalchemy.ext.declarative import declarative_base

"""
将来的に新しいテーブルやクラスが増えた場合、それぞれのモデルクラスを別々のファイルに分割して、
modelsディレクトリの中に配置すること  (例)./models/user_models.py .. hello_models.py ...
"""

# declarative_baseクラスは、モデルクラスの基底クラスとして機能し、
# テーブルとモデルクラスのマッピングを自動化します。
Base = declarative_base()


# アイデアテーブル作成
class Idea(Base):
    __tablename__ = "ideas"

    id = Column(Integer, primary_key=True, index=True)
    text = Column(String, index=True)
