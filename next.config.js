const withSvgr = require(`next-svgr`)
const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')()
const withImages = require(`next-images`)

const IMAGE_HOST_DOMAINS = ['res.cloudinary.com']

const nextConfig = {
  target: 'serverless',
  reactStrictMode: true,
  images: {
    domains: IMAGE_HOST_DOMAINS,
  },
  async redirects() {
    return []
  },
}

module.exports = withPlugins(
  [
    withSvgr,
    withImages(),
    withMDX({
      pageExtensions: ['ts', 'tsx', 'mdx'],
      remarkPlugins: [
        require('remark-slug'),
        require('remark-footnotes'),
        require('remark-code-titles'),
      ],
      rehypePlugins: [require('mdx-prism')],
    }),
  ],
  nextConfig,
)
