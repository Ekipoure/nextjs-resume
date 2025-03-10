import { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: "export"
};

export default withContentlayer(nextConfig);
