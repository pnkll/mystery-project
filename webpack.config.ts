import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server'
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';


export default (env: BuildEnv) => {

    const isDev = env.mode==='development'?true:false

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        static: path.join(__dirname, 'public'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const config: webpack.Configuration = buildWebpackConfig({
        mode: env.mode,
        paths,
        port: env.port || 3000,
        isDev,
    })

    return config
}