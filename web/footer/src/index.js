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
  getAssets: async () => {
    assets.client.title = 'vue-app';
    return assets;
  },
});

newServer.start();

