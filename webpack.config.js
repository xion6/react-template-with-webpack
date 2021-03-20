/**
 * webpack.config.js
 */

const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	entry: './src/app.tsx',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
  resolve: {
    // 解説：省略可能な拡張子に .tsx を追加
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              // 解説： JSX のコンパイルを可能にする
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public", to: "" },
      ],
    }),
  ],
}