/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/CEO-Profile/',
  basePath: '/CEO-Profile',
}

export default function(phase, { defaultConfig }) {
  return nextConfig;
}
