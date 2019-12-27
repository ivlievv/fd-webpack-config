const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: './src/assets/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve( __dirname, '../build' ),

  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin( {
                             template: './src/index.html',
                             meta: {
                               viewport: 'width=device-width, initial-scale=1',
                             }
                           } )
  ],
  module: {
    rules: [
      /*
       * Images rule
       * */
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            }
          }
        ]
      },
      /*
       * Fonts rule
       * */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          'file-loader'
        ]
      },
    ]
  }
};

module.exports = config;

