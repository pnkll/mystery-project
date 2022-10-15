export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string,
    build: string,
    static: string,
    html: string
}

export interface BuildOptions{
    mode: BuildMode,
    paths: BuildPaths,
    port: number,
    isDev: boolean,
}

export interface BuildEnv {
    port: number,
    mode: BuildMode
}