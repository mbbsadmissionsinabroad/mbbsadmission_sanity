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
      {
        source:
          "/fee-of-mbbs-in-russia-from-mci-approved-universities-for-2023-admission",
        destination:
          "/fee-of-mbbs-in-russia-from-mci-approved-universities-for-2024-admission",
        permanent: true, // 301 redirection (permanent)
      },
      {
        source: "/2023-mbbs-fee-in-philippines-for-indian-students",
        destination: "/mbbs-in-philippines",
        permanent: true, // 301 redirection (permanent)
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"], // Add your domain here now
  },
};

module.exports = nextConfig;
