import FragmentServer from './server';

export default (exampleEnv) => {
  const app = FragmentServer(exampleEnv);
  app.start();
}


