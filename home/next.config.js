module.exports = {
  reactStrictMode: true,
  async rewrites() {
        return [
        {
            source: '/:path*',
            destination: `/:path*`,
        },
        {
            source: '/discord-leaderboard',
            destination: `https://leaderboards.mcley.me/discord-leaderboard`,
        },
        {
            source: '/discord-leaderboard/:path*',
            destination: `https://leaderboards.mcley.me/discord-leaderboard/:path*`,
        },
        ]
    }
}