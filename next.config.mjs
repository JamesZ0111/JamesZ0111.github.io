/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static HTML export
    distDir: 'out', // Specifies the output directory
    images: {
      unoptimized: true, // Disables image optimization for static export
    },
  };
  
  export default nextConfig;
  