require('dotenv').config();
import fragmentServer from '@smava-packages/fragment-server';
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


if (module.hot) {
  module.hot.accept();
}
