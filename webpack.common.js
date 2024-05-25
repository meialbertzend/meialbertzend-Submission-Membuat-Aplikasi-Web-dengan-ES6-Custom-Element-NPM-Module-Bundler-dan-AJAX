const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js", // Menggunakan [contenthash] untuk menghasilkan nama file yang berbeda saat berubah
        clean: true, // Membersihkan direktori output sebelum setiap build
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
    ],
    optimization: {
        minimize: true, // Mengaktifkan minifikasi
        splitChunks: {
            chunks: 'all',
        },
    },
};
