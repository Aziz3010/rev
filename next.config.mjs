/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        DASHBOARD_DOMAIN: process.env.DASHBOARD_DOMAIN
    }
};

export default nextConfig;
