// import express from 'express';
// import app from './server';
//
// if (module.hot) {
//   module.hot.accept('./server', () => {
//     console.log('🔁  HMR Reloading `./server`...');
//   });
//   console.info('✅  Server-side HMR Enabled!');
// }
//
// const port = process.env.PORT || 3000;
//
// export default express()
//   .use((req, res) => app.handle(req, res))
//   .listen(port, err => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(`> Started on port ${port}`);
//   });

require('dotenv').config();
import fragmentServer from 'fragment-server';
import { getMarkup, assets } from "./server";

const { PORT, BUILD_FOLDER, FRAG_PATH, ROOT_PATH, STATIC_PATH } = process.env;

const newServer = fragmentServer({
  BUILD_FOLDER,
  FRAG_PATH,
  PORT,
  ROOT_PATH,
  STATIC_PATH,
  appRoot: 'root',
  getMarkup,
  getAssets: () => Promise.resolve(assets),
});

newServer.start();

