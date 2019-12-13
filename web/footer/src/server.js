import {createVueApp} from './App';

const renderer = require('vue-server-renderer').createRenderer();

export const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export const getMarkup = async () => {
  const { app } = createVueApp();
  return await renderer.renderToString(app);
};
