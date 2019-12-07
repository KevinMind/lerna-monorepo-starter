import FragmentServer from './server';

const getAssets = () => {
  return {
    client: {
      css: '',
      js: '',
      title: 'test title'
    }
  };
};

const getMarkup = () => '<div>testcontent</div>';

export default (exampleEnv) => {
  const app = FragmentServer({ ...exampleEnv, getAssets, getMarkup, appRoot: 'root' });
  app.start();
}


