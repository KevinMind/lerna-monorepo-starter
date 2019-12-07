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
  getAssets: () => assets,
});

newServer.start();

// let app = require('./server').default;
//
// const server = http.createServer(app);
//
// let currentApp = app;
//
// server.listen(process.env.PORT || 3000, error => {
//   if (error) {
//     console.log(error);
//   }
//
//   console.log('🚀 started');
// });
//
// if (module.hot) {
//   console.log('✅  Server-side HMR Enabled!');
//
//   module.hot.accept('./server', () => {
//     console.log('🔁  HMR Reloading `./server`...');
//
//     try {
//       app = require('./server').default;
//       server.removeListener('request', currentApp);
//       server.on('request', app);
//       currentApp = app;
//     } catch (error) {
//       console.error(error);
//     }
//   });
// }
