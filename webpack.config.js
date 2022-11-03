//Сборка проекта

//Константа с встроенным модулём
const path = require('path')
// константа с подключенным модулём
const htmlWebpackPlagin = require('html-webpack-plugin')


module.exports = {
    // Режим в котором выполняеться команда webpack
    mode: "production",
    //Перемещение файлов
    entry: {
        filename: path.resolve(__dirname,'src/index.js')
    },
    //Куда будет перекидываться наш скобинированный файл
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[name][contenthash].js",
        assetModuleFilename: '[name][ext]',
        clean: true
    },
    //Настройка локального сервера
    devServer: {
        port:3000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname,'dist')
        }
    },
    //Праивла подключения всех наших файлов
    module: {
        rules: [
            {
                //Правила работы с SASS
                test: /\.scss$/,
                //Библиотеки ипользующийся в правилах работы с SASS
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                //Правила работы с изображениями
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            }

        ]
    },
    // Указываем плагины
    plugins: [
        new htmlWebpackPlagin({
            title: "Webpack App",
            filename: "index.html",
            template: "src/index.html"
        })

    ]
}