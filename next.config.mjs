/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brd.devclick.net",
      },
    ],
  },
};

export default nextConfig;
