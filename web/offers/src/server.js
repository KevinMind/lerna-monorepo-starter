import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

export const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export const getMarkup = () => renderToString(
  <StaticRouter>
    <App />
  </StaticRouter>
);
