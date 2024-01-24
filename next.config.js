/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source:
          "/2020-admission-fees-structure-for-indian-students-to-study-mbbs-in-ukraine",
        destination:
          "/2024-admission-fees-structure-for-indian-students-to-study-mbbs-in-ukraine",
        permanent: true, // 301 redirection (permanent)
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"], // Add your domain here
  },
};

module.exports = nextConfig;
