import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';
import { BuildPaths } from './config/build/types/config';


const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};

const mode =  'development';
const isDev = mode === 'development';
// const PORT = env.port || 3000;

const config: webpack.Configuration = buildWebpackConfig(
  {
    mode,
    paths,
    isDev,
    // port: PORT,

}
);

export default config;