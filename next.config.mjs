/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Apply the SVGR loader to SVG files
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
        return config;
      },
    images: {
        domains: ['assets.aceternity.com'],
      },
};

export default nextConfig;
