import { createVueApp } from './App';

if (module.hot) {
  module.hot.accept();
}

const hydateApp = (id = 'root') => {
  const { app } = createVueApp();
  app.$mount(`#${id}`);
};

if (window.Pipe) {
  window.Pipe.onAfterInit((attributes) => hydateApp(attributes.id));
  window.Pipe.onDone(() => console.log('done'));
} else {
  hydateApp()
}
