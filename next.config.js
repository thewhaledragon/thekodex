const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/TheWhaleDragonKodex' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: basePath,
  assetPrefix: basePath,
  output: 'export',        // static HTML export for GitHub Pages
  trailingSlash: true,     // generates /blog/slug/index.html (needed for Pages)
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,     // required for static export
  },
};

module.exports = nextConfig;
