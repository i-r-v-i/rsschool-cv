import webpack from 'webpack';
import path from 'path';
import { buildPlugins } from './config/build/buildPlugins';
import { buildLoaders } from './config/build/buildLoaders';

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
   plugins: buildPlugins(),
   module: {
    rules: buildLoaders();
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}

export default config;