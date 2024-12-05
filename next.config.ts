/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.ecoquity.club",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
