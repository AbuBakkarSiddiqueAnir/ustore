/** @type {import('next').NextConfig} */

const {withFrameworkConfig}  = require('./framework/common/config')

module.exports = withFrameworkConfig({
  i18n: {
    locales : ['en-US', 'es'],
    defaultLocale:'en-US'
  }
})

// const nextConfig = {
//   reactStrictMode: true,
// }

console.log(module.exports)

// module.exports = nextConfig
