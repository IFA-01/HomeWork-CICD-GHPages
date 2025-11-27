const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Точка входа
  entry: './src/script.js',

  // Куда собирать
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Удаляет dist перед сборкой
  },

  // Режим (development или production)
  mode: 'development',

  // Для удобства отладки
  devtool: 'source-map',

  // Модули: обработка CSS
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  // Плагины
  plugins: [
    // Генерация HTML
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),

    // Вынос CSS в отдельный файл
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],

  // Оптимизация (опционально)
  optimization: {
    minimize: false, // true — если хочешь минифицировать в production
  },

  // Настройка dev-server (если будешь использовать)
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    port: 3000,
  },
};
