/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 영상(.mov/.mp4/.avi)은 Next 내장 asset 모듈로 처리한다(과거 file-loader 설정과 같은 URL: /_next/static/videos/<이름>)
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4|avi)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/videos/[name][ext]',
        publicPath: '/_next/',
      },
    });
    return config;
  },
};

module.exports = nextConfig;
