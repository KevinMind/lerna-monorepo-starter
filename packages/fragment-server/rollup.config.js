import babel from 'rollup-plugin-babel';
import run from 'rollup-plugin-run';
import html from 'rollup-plugin-html';
import resolve from 'rollup-plugin-node-resolve';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies || {});

let plugins = [
  babel(),
  html(),
  resolve({
    preferBuiltins: true,

  }),
];

if (process.env.NODE_ENV === 'development') {
  plugins.push(run())
}

const config = {
  input: './src/index.js',
  output: {
    dir: 'build',
    format: 'cjs',
    sourceMap: true
  },
  plugins,
  external
};

const exampleConfig = {
  input: './src/example.js',
  output: {
    dir: 'example',
    format: 'cjs',
    sourceMap: true
  },
  plugins,
  external
};

export default [config, exampleConfig];
