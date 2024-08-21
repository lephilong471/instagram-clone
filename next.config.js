const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    // path: '/_next/image',
    // // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
    // loader: 'default',
    // loaderFile: '',
    // disableStaticImages: true,
    formats: ['image/webp']
  }
});

// const { withExpo } = require('@expo/next-adapter');
// const withPlugins = require('next-compose-plugins');
// const withImages = require('next-images');
// const withFonts = require('next-fonts');
// const withTM = require('next-transpile-modules')(['react-native-web']);

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     disableStaticImages: true
//   },
//   compiler: {
//     styledComponents: true
//   }
// };

// module.exports = withPlugins(
//   [withTM, withExpo, withImages, withFonts],
//   nextConfig
// );
