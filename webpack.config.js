const path = require('path')
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin')
let {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry: './src/index.js',  // 入口文件
    output: {
        filename: '[name].js',
        path: path.resolve('dist'),
        publicPath: ''
    }, // 出口文件
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0",
                include: /src/, //只转化src目录下的js
                exclude: /node-modules/ // 排除掉node-modules，优化打包速度
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'images/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            limit: 8192,
                            disable: true,
                            outputPath: 'images/'
                        }

                    }
                ]
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
            },
            {
                enforce: "pre",  //  代表在解析loader之前就先解析eslint-loader
                test: /\.js$/,
                exclude: /node_modules/,
                include:/src/,
                loader: "eslint-loader",
            },
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use: 'file-loader'
            }
    ]
    }, // 处理对应模块
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['vendor', 'index', 'utils'],  //  引入需要的chunk 
            hash: true // 会在打包好的bundle.js后面加上hash串
        }),
        new CleanWebpackPlugin()
    ], // 对应的插件

    resolve: {
        // 别名
        alias: {
          pages:path.join(__dirname,'src/pages'),
          component:path.join(__dirname,'src/component'),
          actions:path.join(__dirname,'src/redux/actions'),
          reducers:path.join(__dirname,'src/redux/reducers'),
        },
        // 省略后缀
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {   // 抽离第三方插件
                    test: /node_modules/,   // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor',  // 打包后的文件名，任意命名    
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10
                },
                utils: {
                    // 抽离自己写的公共代码，utils里面是一个公共类库
                    chunks: 'initial',
                    name: 'utils',  //  任意命名
                    minSize: 0    // 只要超出0字节就生成一个新包
                }
            }
        }
    },
    devServer: {
        port: 3032,             // 端口
        open: true,             // 自动打开浏览器
        hot: true,               // 开启热更新
        overlay: true, // 浏览器页面上显示错误
        historyApiFallback: true
    }, //开发服务器配置
    mode: 'development' // 模式配置
}