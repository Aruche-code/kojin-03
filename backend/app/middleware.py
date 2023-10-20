# backend/app/middleware.py
# CORSの設定: フロントエンドとの通信を許可するため、特定のオリジンからの
# クロスオリジンリクエストを許可します。
# これはブラウザのセキュリティを維持するために重要です。
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


origins = ["http://localhost:3000"]


def setup_cors(app: FastAPI) -> None:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,  # 本番環境では具体的なオリジンを設定すること
        allow_credentials=True,
        allow_methods=["*"],  # 任せます
        allow_headers=["*"],  # 任せます
    )


# ミドルウェアの設定
def setup_middleware(app: FastAPI) -> None:
    setup_cors(app)  # CORS設定を追加
    # 必要に応じて他のミドルウェアをここに追加


# カスタムエラーハンドリング (必要に応じて)
def setup_exception_handlers(app: FastAPI) -> None:
    pass  # ここでカスタムエラーハンドラーを設定
