/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "bini.abs-cbn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "yt3.ggpht.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
