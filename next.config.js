const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins([
  [
    optimizedImages,
    {
      basePath: isProd ? '/nextjs-marketing-landing' : '',
      assetPrefix: isProd ? '/nextjs-marketing-landing' : '',
    },
  ],
]);
