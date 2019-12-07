import App from './App';
import React from 'react';
import { renderToString } from 'react-dom/server';

export const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export const getMarkup = () => {
  return renderToString(
    <App />
  );
};
