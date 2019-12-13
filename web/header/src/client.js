import App from './App';
import React from 'react';
import { hydrate } from 'react-dom';

const hydateApp = (id = 'root') => {
  hydrate(
    <App />,
    document.getElementById(id)
  );
};

if (window.Pipe) {
  window.Pipe.onAfterInit((attributes) => hydateApp(attributes.id));
  window.Pipe.onDone(() => console.log('done'));
} else {
  hydateApp()
}

if (module.hot) {
  module.hot.accept();
}
