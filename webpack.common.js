const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'main-bundle-[hash].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss'],
        alias: {
            '@': path.join(__dirname, 'src'),
            '@styles': path.resolve(__dirname, 'src/presentation/styles'),
        },
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images',
                            publicPath: 'images',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
};
