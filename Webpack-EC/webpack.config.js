const path = require('path');
const webpack = require('webpack')
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
module.exports = {
    entry: './dist/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader", //2. Turns css into commonjs
                ],
                // 'options': {
                //     'plugins': ['lodash'],
                //     'presets': [['env', { 'modules': false, 'targets': { 'node': 4 } }]]
                //   }
            }
        ]
    },
    plugins: [new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }), 
    // new LodashModuleReplacementPlugin,
    // new webpack.optimize.UglifyJsPlugin
    // new LodashModuleReplacementPlugin,
    // ({
    //     lodash: 'lodash'
    // })
    ],

};