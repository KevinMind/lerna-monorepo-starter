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

const app = FragmentServer({ ...process.env, getAssets, getMarkup, appRoot: 'root' });
app.start();


