var webpack = require('webpack');

let entry = {
    "index" : [
        "./src/Index.tsx" , 
    ] , 
}

let plugins = [
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
            ]
        }
    })
];

module.exports = {
    cache:true , 
    entry: entry ,
    output: {
        filename: "[name].js",
        path: __dirname + "/dist/"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            },
            {
                test: /\.sass$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" 
                }, {
                    loader: "import-glob-loader" 
                }]
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader" ,
                options: {
                },
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|otf|ttf|svg)$/,
                loader: 'url-loader?limit=100000&name=/[hash].[ext]'
            }
        ]
    },
    plugins: plugins , 
};
