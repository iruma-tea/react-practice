/** @type {import('next').NextConfig} */
const nextConfig = {
  //  ⚠ See more info here: https://nextjs.org/docs/messages/invalid-next-config
  //  ⚠ Server Actions are available by default now, `experimental.serverActions` option can be safely removed.
  //   experimental: {
  //     serverActions: true,
  //   },
  images: {
    remotePatterns: [
      {
        hostname: "books.google.com",
      },
    ],
  },
};

export default nextConfig;
