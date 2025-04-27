/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc"
      }
    ]
  }
}

export default nextConfig;
