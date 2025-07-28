/** @type {import('next').NextConfig} */
import { i18n } from './next-i18next.config';


const nextConfig = {
 i18n: {
    locales: ['en', 'bn'],
    defaultLocale: 'en', } ,
  reactStrictMode: true,
  images: {
    domains: ['cdn.10minuteschool.com'],
  },
};

module.exports = nextConfig;
