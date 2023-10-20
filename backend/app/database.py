# backend/app/database.py
# データベースハンドリング
# このファイルは、データベース接続とセッション管理を担当します。
# ここでの設定がアプリケーションのデータベース接続の安定性とパフォーマンスに直接影響します。

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .config import DATABASE_URL

engine = create_engine(DATABASE_URL)

# トランザクションの明示的なコミット/ロールバックを要求するセッション設定。
# autocommit=False は、トランザクションのライフサイクルをより細かく制御するため。
# autoflush=False は、クエリ実行前の自動フラッシュを防ぐため、パフォーマンスの最適化に役立つ。
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    """データベースセッションを安全に取り扱うためのコンテキストマネージャ。

    ジェネレータを使用する理由:
    - リソースを効率的に開放するためのコンテキスト管理が可能。
    - セッションのスコープを限定し、使用後のクローズを保証するため、リソースリークを防ぐ。
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()  # リソースの解放を保証。エラー発生時でも接続が適切にクローズされることを確保する。
