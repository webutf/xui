const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devMode = process.env.NODE_ENV != 'production';

let entry = (function() {
  var entries = {}
  var plugins = []
  var arr = ['./src/index.js', './src/views/**/*.js']
  arr.forEach(function(val) {
    glob.sync(val).forEach(file => {
      var dirname = path.dirname(file)
      dirname = dirname.substring(6)
      entries[dirname || 'index'] = file
      var obj = {
        filename: `${dirname || 'index'}.html`,
        template: `./src/${dirname}/index.html`,
        inject: true,
        hash: true,
        chunks: ['manifest', 'vendor', dirname || 'index'],
        chunksSortMode: 'dependency'
      }
      plugins.push(new HtmlWebpackPlugin(obj))
    })
  })
  return { entries, plugins }
})()

const webpackConfig = {
	entry: entry.entries,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[hash:8].js'
	},
  mode: devMode ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.html?$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: devMode ? false : true
            }
          }
        ]
      },
      {
        test: /\.md?$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: devMode ? false : true
            }
          },
          "markdown-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                postcssImport(),
                postcssPresetEnv(),
                cssnano()
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                postcssImport(),
                postcssPresetEnv(),
                cssnano()
              ]
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                postcssImport(),
                postcssPresetEnv(),
                cssnano()
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [path.join(__dirname, 'src')],
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.(png|bmp|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: devMode ? '/' : '../',
            name: 'assets/[name].[hash:7].[ext]'
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.less', '.vue'],
    modules: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')],
    alias: {
      '@': path.join(__dirname, 'src'),
      '@assets': path.join(__dirname, 'src/assets'),
      '@views': path.join(__dirname, 'src/views'),
      "@styles": path.join(__dirname, 'src/styles')
    }
  },
  devtool: devMode ? 'cheap-source-map' : 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    noInfo: true,
    inline: true,
    hot: true,
    quiet: true,
    clientLogLevel: 'warning',
    host: '0.0.0.0',
    progress: true,
    proxy: {
      '/api': 'localhost:3000'
    }
  },

	plugins: [
    new webpack.ProgressPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/assets/favicon.ico', to: 'assets/'}
    ]),
    devMode ? new webpack.HotModuleReplacementPlugin()
      : new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
      chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[contenthash:8].css',
      ignoreOrder: false
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 10000
    }),
    ...entry.plugins
	]
}

if (!devMode) {
  webpackConfig.optimization = {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeAssetsPlugin({})
    ]
  }
}

module.exports = webpackConfig;
