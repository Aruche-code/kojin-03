# backend/app/config.py
# このファイルは、アプリケーションの設定情報を管理します。
# 環境に依存する変数や設定値を集約、
# 接続情報。この情報は環境に依存し、安全に保管する必要があるため、環境変数から取得することが望ましい。

import os
from dotenv import load_dotenv

# .envファイルから環境変数を読み込む
load_dotenv()

# 環境変数を使用してデータベースURLを取得
DATABASE_URL = os.getenv("DATABASE_URL")
