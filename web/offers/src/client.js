import App from './App';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { hydrate } from 'react-dom';

const hydateApp = (id = 'root') => {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
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
