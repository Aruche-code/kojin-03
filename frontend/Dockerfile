# ベースイメージ
FROM node:18.18.0-alpine
# ワークディレクトリの設定
WORKDIR /app

# 依存関係のインストール
COPY package*.json ./
RUN npm install

# アプリケーションのコピー
COPY . .

# プロダクション環境用
# RUN npm run build

# ポートの公開
EXPOSE 3000

# 開発サーバの起動
CMD ["npm", "run", "dev"]

# プロダクション環境でアプリケーションを起動
#CMD ["npm", "start"]
