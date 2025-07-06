# ステージ1: ビルド環境
FROM node:22-alpine AS builder
WORKDIR /app

# 依存関係をコピーしてインストール
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# Next.jsアプリをビルド
RUN npm run build

# ステージ2: 本番実行環境
FROM node:22-alpine
WORKDIR /app

# ビルド成果物のみをコピー
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# 本番用の依存関係をインストール
# Next.jsは一部の`node_modules`をビルド後に必要とします
COPY --from=builder /app/node_modules ./node_modules


# ポートを開放
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]