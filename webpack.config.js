const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 1. Import plugin

module.exports = {
  // Đặt mode để fix WARNING
  mode: 'development',

  // Điểm vào
  entry: './src/index.js',

  // Đầu ra
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Tự động xóa thư mục 'dist' cũ
  },

  // LOADERS: Cực kỳ quan trọng, fix lỗi CSS
  module: {
    rules: [
      {
        test: /\.css$/i, // Tìm tất cả các tệp .css
        use: ['style-loader', 'css-loader'], // Dùng 2 loaders này để xử lý
      },
    ],
  },

  // PLUGINS: Để tự động tạo file HTML
  plugins: [
    new HtmlWebpackPlugin({ // 2. Sử dụng plugin
      title: 'Demo Webpack Chuẩn',
      template: './src/index.html', // Dùng file này làm mẫu
    }),
  ],

  // Cấu hình cho server phát triển (lệnh 'npm start')
  devServer: {
    static: './dist',
  },
};