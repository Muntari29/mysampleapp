/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  experimental: {
    appDir: true,
  },
  // output: "export" 속성은 정적 웹의 크기를 줄이고 웹 서버에 배포하는 속도를 높이고 싶을 때 사용
  // 워닝을 없애기 위해 빌드 및 prod에서만 속성을 추가
  output: isProd ? "export" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
