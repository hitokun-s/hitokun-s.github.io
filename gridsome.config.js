// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')
const merge = require('webpack-merge')

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/*.scss')
            ],
        })
}

module.exports = {
    siteName: 'Gridsome',
    plugins: [],
    chainWebpack: config => {
        config.module
            .rule('md')
            .test(/.md$/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true
            })
        // .use('vue-loader')
        // .loader('vue-loader')
        // .end()
        // .use('markdown-loader')
        // .loader('markdown-loader')
        // // .use('vue-markdown-loader')
        // // .loader('vue-markdown-loader/lib/markdown-compiler')
        // .options({
        //   raw: true,
        //     exportSource: true
        // preset: 'default',
        // breaks: true,
        // preprocess: function(markdownIt, source) {
        //     // do any thing
        //     return source
        // },
        // use: [
        //     /* markdown-it plugin */
        //     require('markdown-it-attrs'),
        //     require('markdown-it-div'),
        // ]
        // });

        // Load variables for all vue-files
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

        types.forEach(type => {
            addStyleResource(config.module.rule('sass').oneOf(type))
        })

        // or if you use scss
        types.forEach(type => {
            addStyleResource(config.module.rule('scss').oneOf(type))
        })
    },
    configureWebpack(config) {
        return merge(
            {
                node: {
                    fs: 'empty'
                },
                output:{
                    globalObject: "this"
                }
            }
            , config)
    }

}
