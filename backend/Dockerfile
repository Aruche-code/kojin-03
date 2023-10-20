# ベースイメージ -slim
FROM python:3.11-slim

# ワークディレクトリの設定
WORKDIR /app

# 依存関係のインストール
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# カレントディレクトリの内容を/appのコンテナにコピー。
COPY . .

# ポートの公開
EXPOSE 8000

# 環境変数の定義(現状プレースホルダー) 必要に応じて環境変数を設定して下さい。
# ENV NAME World

# Uvicornでアプリケーションを起動 --reloadオプションは開発環境なので付けています。
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000","--reload"]

