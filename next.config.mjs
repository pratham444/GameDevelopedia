/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // Uncomment and update these lines if your repository is not your main GitHub Pages site
  // basePath: '/your-repository-name',
  // assetPrefix: '/your-repository-name/',
}

export default nextConfig
