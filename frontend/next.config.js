// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // リライトの設定
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://fastapi-app:8000/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
