import { WebpackConfiguration } from "webpack-dev-server";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options:BuildOptions):WebpackConfiguration{
    
    const {paths,mode,isDev}=options

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        devServer: isDev?buildDevServer(options):undefined,
        devtool: isDev?'inline-source-map':undefined,
        resolve: buildResolvers(options),
        module: {
            rules: buildLoaders(),
        }
    }
}