/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    // لتجنب أخطاء المهلة في التطوير، يمكنك تفعيل هذا الخيار
    // unoptimized: true,
  },
};

export default nextConfig;
