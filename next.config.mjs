/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  output: 'standalone',
  // basePath: '/nextjs-base',
  assetPrefix: 'https://az-demo-lb.digi-team.work/nextjs',
};

export default nextConfig;