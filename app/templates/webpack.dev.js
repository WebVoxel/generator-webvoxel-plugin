const merge = require('webpack-merge');

module.exports = merge(require('./webpack.common'), {
    mode: 'development',
    watch: true,
});