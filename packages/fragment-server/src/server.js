require('dotenv').config();

import express from 'express';
import { pick } from 'lodash';
import path from 'path';

import { renderApp, renderFrag } from './render';

const CONFIG_KEYS = {
  PORT: 'PORT',
  STATIC_PATH: 'STATIC_PATH',
  ROOT_PATH: 'ROOT_PATH',
  FRAG_PATH: 'FRAG_PATH',
  BUILD_FOLDER: 'BUILD_FOLDER',
  getAssets: 'getAssets',
  getMarkup: 'getMarkup',
  appRoot: 'appRoot',
};

const DEFAULT_CONFIG = {
  [CONFIG_KEYS.PORT]: 3000,
  [CONFIG_KEYS.STATIC_PATH]: '/static',
  [CONFIG_KEYS.ROOT_PATH]: '/root',
  [CONFIG_KEYS.FRAG_PATH]: '/',
  [CONFIG_KEYS.BUILD_FOLDER]: path.resolve(__dirname, 'build'),
  [CONFIG_KEYS.getAssets]: () => {},
  [CONFIG_KEYS.getMarkup]: () => {},
  [CONFIG_KEYS.appRoot]: 'root'
};

const startServer = app => config => {
  const port = parseInt(config.PORT, 10);

  app.listen(port, (err) => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server started listening on port ${port}`)
  });

  return app;
};

const serveStatic = app => config => {
  try {
    app.use(config.STATIC_PATH, express.static(config.BUILD_FOLDER));
    console.log(`serving static files at url ${config.STATIC_PATH} from ${config.BUILD_FOLDER}`)
  } catch(e) {
    console.log('error serving static',e);
  }

  return app;
};

const serveFragment = app => config => {
  // serve micro frontend
  app.use(`${config.FRAG_PATH}/:fragmentId`, renderFrag(config));
  console.log(`serving fragment at url ${config.FRAG_PATH}/:fragmentId`);
  return app;
};

const serveApp = app => config => {
  app.use(config.ROOT_PATH, renderApp(config));
  console.log(`serving app at url ${config.ROOT_PATH}`);
  return app;
};

const getPropError = name => {
  throw new Error(`missing or invalid prop '${name}' provided to config.`);
};

const validateEnv = config => {
  if (!config || typeof config !== 'object') {
    throw new Error(`invalid config provided. expected type Object, received ${typeof config}`);
  }

  if (!config.STATIC_PATH) {
    return getPropError('STATIC_PATH');
  }

  if (typeof config.FRAG_PATH === undefined) {
    return getPropError('FRAG_PATH');
  }
  if (typeof config.ROOT_PATH === undefined) {
    return getPropError('ROOT_PATH');
  }
  if (!config.getAssets || typeof config.getAssets !== 'function') {
    return getPropError('getAssets');
  }
  if (!config.getMarkup || typeof config.getMarkup !== 'function') {
    return getPropError('getMarkup');
  }
  if (!config.appRoot) {
    return getPropError('appRoot');
  }
};

export default (rawConfig) => {
  const config = pick(rawConfig, Object.keys(CONFIG_KEYS));
  validateEnv(config);

  const app = express();

  // TODO: make optional
  serveStatic(app)(config);
  serveApp(app)(config);
  serveFragment(app)(config);

  app.start = startConfig => startServer(app)({ ...config, ...startConfig });

  return app;
};
