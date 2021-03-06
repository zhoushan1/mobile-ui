// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var ora = require('ora')
var webpack = require('webpack')
var conf = require('./webpack.prod.conf')
var ghpages = require('gh-pages')
var path = require('path')

var spinner = ora('building for production...')
spinner.start()

rm('-rf', 'dist')
mkdir('dist')
cp('-R', 'static', conf.output.path)

webpack(conf, function (err, stats) {
  spinner.stop()
  if (err) throw err

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')

  // Deploy to gh-pages
  spinner = ora('deploying for gh-pages...')
  spinner.start()
  ghpages.publish(path.join(__dirname, '../dist'), function (err) {
    spinner.stop()
    if (err) throw err

    console.log('gh-pages deployed.')
  })
})
