# backend/app/main.py
# アプリケーションのエントリーポイント
# このファイルは、アプリケーションの起動と設定の初期化を行います。全体の流れを把握するためのエントリーポイントとして機能します。

from fastapi import FastAPI
from . import models
from .routers import user_router
from .database import engine
from .middleware import setup_middleware

app = FastAPI()

# ミドルウェアの設定をロード
setup_middleware(app)

# この操作により、アプリ起動時にテーブルがDBに作成される。すでにあるテーブルは影響されない。
models.Base.metadata.create_all(bind=engine)

app.include_router(user_router.router)
