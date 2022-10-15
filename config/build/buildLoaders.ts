import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildLoaders(): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: true,
                        localIdentName: "[path][name]__[local]--[hash:base64:5]",
                        exportLocalsConvention: "camelCaseOnly",
                      }
                }
            },
            "sass-loader",
        ],
    }

    return [
        typeScriptLoader,
        styleLoader
    ]
}