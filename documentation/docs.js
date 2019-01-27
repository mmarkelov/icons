const webpack = require('webpack');
const webpackConfig = require('./webpack.config-docs');
const rimraf = require('rimraf');
const path = require('path');

console.log('creating doc');

const directory = path.join(process.cwd(), 'documentation/docs');

rimraf.sync(`${directory}/*`);

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  console.log(stats.toString({
    colors: true,
    children: false,
    modules: false,
    version: false,
    chunks: false,
    warnings: false
  }));
});
