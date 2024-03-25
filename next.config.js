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
      {
        source: "/melaka-manipal-university-college-malaysia",
        destination: "/melaka-manipal-medical-college-malaysia",
        permanent: true, // 301 redirection (permanent)
      },
      {
        source: "/top-mbbs-colleges-in-philippines-for-2023-admission",
        destination: "/top-mbbs-colleges-in-philippines-for-2024-admission",
        permanent: true, // 301 redirection (permanent)
      },
      {
        source: "/2023-mbbs-fee-structure-in-india-and-abroad",
        destination: "/2024-mbbs-fee-structure-in-india-and-abroad",
        permanent: true, // 301 redirection (permanent)
      },
      {
        source:
          "/top-philippines-medical-college-for-indian-students-2023-admission",
        destination:
          "/top-philippines-medical-college-for-indian-students-2024-admission",
        permanent: true, // 301 redirection (permanent)
      },
      {
        source:
          "/2020-mci-approved-medical-colleges-in-ukraine-for-indian-students",
        destination:
          "/2024-mci-approved-medical-colleges-in-ukraine-for-indian-students",
        permanent: true, // 301 redirection (permanent)
      },
      {
        source:
          "/top-philippines-medical-college-for-indian-students-2023-admission",
        destination:
          "/top-philippines-medical-college-for-indian-students-2024-admission",
        permanent: true, // 301 redirection (permanent)
      },
      {
        source:
          "/top-philippines-medical-college-for-indian-students-2023-admission",
        destination:
          "/top-philippines-medical-college-for-indian-students-2024-admission",
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
