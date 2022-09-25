import basicConfig from './rollup.config';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace'; // 代码压缩器

const config = {
  ...basicConfig,
  output: [
    {
      name: 'designComponent',
      file: 'dist/index.umd.js',
      format: 'umd',
      exports: 'named', // 全局变量命名的方式
      globals: { // 对应的第三方库
        react: 'React',
        'react-dom': 'ReactDOM',
        axios: 'Axios',
      },
      plugins: [terser()],
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    ...basicConfig.plugins,
  ],
  external: ['react', 'react-dom', 'axios'],
};

export default config;
