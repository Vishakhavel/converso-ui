/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // If true, indicates it's a permanent redirect (HTTP 308)
      },
    ];
  },
};

export default nextConfig;
