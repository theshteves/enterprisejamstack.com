require('dotenv-flow').config()

module.exports = {
  siteUrl: `https://enterprisejamstack.com`,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [
    '/confirm',
    '/confirmed',
    '/excited',
    '/unsubscribed',
    '/placeholder-article',
  ],
}
