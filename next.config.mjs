/** @type {import('next').NextConfig} */
const nextConfig = {
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
