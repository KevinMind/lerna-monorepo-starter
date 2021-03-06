import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import run from 'rollup-plugin-run';
import html from 'rollup-plugin-html';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';


let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

let plugins = [
  babel(),
  html(),
  resolve(),
  copy({
    targets: [
      { src: 'src/templates', dest: 'build' },
    ]
  }),
  postcss({
    extensions: ['.css']
  })
];

if (process.env.NODE_ENV === 'development') {
  plugins.push(run())
}

const config = {
  input: './src/index.js',
  output: {
    file: 'build/index.js',
    format: 'cjs',
    sourceMap: true
  },
  plugins,
  external
};

export default config;
