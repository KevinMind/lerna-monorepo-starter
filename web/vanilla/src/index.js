require('dotenv').config();
import fragmentServer from 'fragment-server';

const { PORT, BUILD_FOLDER, FRAG_PATH, ROOT_PATH, STATIC_PATH } = process.env;

const assets = {
  client: {
    js: 'http://localhost:5050/static/static.js',
    css: 'http://localhost:5050/static/styles.css',
    title: 'vanilla-js'
  }
};

const app =`
<div>Fragment 1: vanilla javascript app</div>
<img src="http://localhost:5050/static/javascript.png" />
`;

const server = fragmentServer({
  BUILD_FOLDER,
  FRAG_PATH,
  PORT,
  ROOT_PATH,
  STATIC_PATH,
  appRoot: 'root',
  getMarkup: () => Promise.resolve(app),
  getAssets: () => Promise.resolve(assets),
});

server.start();

