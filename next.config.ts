/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
 i18n: {
    locales: ['en', 'bn'],
    defaultLocale: 'bn', } ,
  reactStrictMode: true,
  images: {
    domains: ['cdn.10minuteschool.com'],
  },
};

module.exports = nextConfig;
