import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname:'electro.madrasthemes.com'
      }
    ]
  }
};

export default nextConfig;
