/** @type {import('next').NextConfig} */
const nextConfig = {
  // この devIndicators の部分を追記します
  devIndicators: {
    allowedDevOrigins: [
      // 自分のPCのローカルIPアドレスをここに追加
      "http://192.168.0.42:3000",
      "http://localhost:3000",
    ],
  },
};

export default nextConfig;