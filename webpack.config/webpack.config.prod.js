const merge = require( 'webpack-merge' );
const commonConfig = require( './webpack.config.common.js' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const config = merge( commonConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(sa|sc|c)ss$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin( {
                                filename: '[name].css',
                              } ),
  ],
  module: {
    rules: [
      /*
       * Styles rule
       * */
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './src/assets/js/postcss.config.js'
              }
            }
          },
          'sass-loader',

        ]
      }
    ]
  }

} );

module.exports = config;
