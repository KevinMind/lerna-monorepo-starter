import FragmentServer from '@smava-packages/fragment-server';

const { PORT, BUILD_FOLDER, FRAG_PATH, ROOT_PATH, STATIC_PATH } = process.env;
import { assets, getMarkup } from "./server";

const server = FragmentServer({
  BUILD_FOLDER,
  FRAG_PATH,
  PORT,
  ROOT_PATH,
  STATIC_PATH,
  appRoot: 'root',
  getMarkup,
  getAssets: async () => {
    assets.client.title = 'header';
    return assets;
  },
});

server.start();
