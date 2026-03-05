/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // static HTML export for GitHub Pages
  trailingSlash: true,     // generates /blog/slug/index.html (needed for Pages)
  images: {
    unoptimized: true,     // required for static export
  },
};

module.exports = nextConfig;
