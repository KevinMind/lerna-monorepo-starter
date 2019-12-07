require('dotenv').config();

import express from 'express';
import { pick } from 'lodash';
import path from 'path';

const CONFIG_KEYS = {
  PORT: 'PORT',
  STATIC_PATH: 'STATIC_PATH',
  ROOT_PATH: 'ROOT_PATH',
  FRAG_PATH: 'FRAG_PATH',
  BUILD_FOLDER: 'BUILD_FOLDER'
};

const DEFAULT_CONFIG = {
  [CONFIG_KEYS.PORT]: 3000,
  [CONFIG_KEYS.STATIC_PATH]: '/static',
  [CONFIG_KEYS.ROOT_PATH]: '/root',
  [CONFIG_KEYS.FRAG_PATH]: '/',
  [CONFIG_KEYS.BUILD_FOLDER]: path.resolve(__dirname, 'build'),
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
  app.use(`${config.FRAG_PATH}/:fragmentId`, (req, res) => {
    const { fragmentId } = req.params;
    res.json({ fragmentId });
  });
  console.log(`serving fragment at url ${config.FRAG_PATH}/:fragmentId`);
  return app;
};

const serveApp = app => config => {
  // serve client root
  app.use(config.ROOT_PATH, (req, res) => {
    res.json({ root: true });
  });
  return app;
};

const getPropError = name => {
  throw new Error(`missing or invalid prop ${name} provided to config.`);
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
