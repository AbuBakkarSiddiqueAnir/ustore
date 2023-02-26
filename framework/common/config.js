
const merge = require('deepmerge');
const fs = require('fs')

const path = require('path')

function withFrameworkConfig(defaultConfig = {}) {
    const framework = 'shopify'

    const frameworkNextConfig = require(path.join('../', framework, 'next.config'))

    const config = merge(defaultConfig, frameworkNextConfig)



    const tsPath = path.join(process.cwd(),'tsconfig.json')
    const tsConfig = require(tsPath)

    tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`]
    tsConfig.compilerOptions.paths['@framework/*'] = [`framework${framework}/*`]

    fs.writeFileSync(tsPath, JSON.stringify(tsConfig, null, 2))

    console.log(tsConfig)
    return config

}

module.exports = { withFrameworkConfig }