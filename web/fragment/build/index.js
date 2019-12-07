'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fragmentServer = _interopDefault(require('fragment-server'));

require('dotenv').config();
const {
  PORT,
  BUILD_FOLDER,
  FRAG_PATH,
  ROOT_PATH,
  STATIC_PATH
} = process.env;
const assets = {
  client: {
    js: 'http://localhost:8081/static/static.js',
    css: 'http://localhost:8081/static/styles.css',
    title: 'vanilla-js'
  }
};
const server = fragmentServer({
  BUILD_FOLDER,
  FRAG_PATH,
  PORT,
  ROOT_PATH,
  STATIC_PATH,
  appRoot: 'root',
  getMarkup: () => '<div>Fragment 1: vanilla javascript app</div>',
  getAssets: () => Promise.resolve(assets)
});
server.start();
