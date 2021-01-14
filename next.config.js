const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = { fr: "fr", en: "en" };

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  images: {
    deviceSizes: [82, 110, 140, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};
