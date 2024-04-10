/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: false,
  env: {
    "PAT":"pathG01K9MKfquMEX.4e24456bd923cdf1f177ab51b4f7a30a925d4e6d768f452719e29ea6db7eab3b",
    "API_URL": "https://api.airtable.com/v0/appXs1bmVdVRumBb9/try_kinara",
    "NEXT_PUBLIC_GTAG": "G-BZG83YSFZS",
  }
});
