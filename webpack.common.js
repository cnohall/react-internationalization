const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.tsx',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
       template: './public/index.html'
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
    rules: [
        { 
            test: /\.(js|jsx|tsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        },
        {
            test: /\.(css|scss)$/,
            use: ["style-loader", "css-loader"],
        },
        { 
            test: /\.(woff(2)?|ttf|eot|jpg|jpeg|png|gif|mp3|svg)$/,
            use: ["file-loader"] 
        },
    ],
},
 };