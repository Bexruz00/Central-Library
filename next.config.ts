import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'api.mutolaa.com',
        pathname: 'api.centeral-library.fullstackdev.uz',
      },
    ],
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
