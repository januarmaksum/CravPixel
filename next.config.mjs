/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/jasa-pembuatan-website',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
