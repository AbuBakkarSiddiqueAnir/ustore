/** @type {import('next').NextConfig} */

const {withFrameworkConfig}  = require('./framework/common/config')

module.exports = withFrameworkConfig({
  framework: {
    name:'shopify'
  },
  i18n: {
    locales : ['en-US', 'es'],
    defaultLocale:'en-US'
  }
})

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
