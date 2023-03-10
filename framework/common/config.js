
const merge = require('deepmerge');
const fs = require('fs')
const prettier = require('prettier')
const path = require('path')

function withFrameworkConfig(defaultConfig = {}) {

    const framework = defaultConfig?.framework.name

    const frameworkNextConfig = require(path.join('../', framework, 'next.config'))

    const config = merge(defaultConfig, frameworkNextConfig)



    const tsPath = path.join(process.cwd(),'tsconfig.json')
    const tsConfig = require(tsPath)

    tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`]
    tsConfig.compilerOptions.paths['@framework/*'] = [`framework/${framework}/*`]

    fs.writeFileSync(tsPath, prettier.format(JSON.stringify(tsConfig),
    {
        parser:'json'
    }))


    return config

}

module.exports = { withFrameworkConfig }