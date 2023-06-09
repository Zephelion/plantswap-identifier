/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'bs.plantnet.org',
            },
            {
                hostname: 'media.graphassets.com',
            }
        ],
    },
}

module.exports = nextConfig
