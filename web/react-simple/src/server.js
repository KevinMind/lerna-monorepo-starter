import App from './App';
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';

export const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
// const fragmentId = process.env.FRAGMENT_ID;

export const getMarkup = () => {
  return renderToString(
    <App />
  );
};

const getHtmlDoc = (fragmentId, content) => {
  return `
    <!doctype html>
    <html lang="">
    <div id="${fragmentId}">
      ${content}
    </div>
    </html>`;
};

const getHtmlHead = ({ css, js }) => {
  return `
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta charset="utf-8" />
  <title>Welcome to Razzle</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${css
      ? ` <link rel="stylesheet" href="${css}">`
      : ''
  }
  ${process.env.NODE_ENV === 'production'
      ? `<script src="${js}" defer></script>`
      : `<script src="${js}" defer crossorigin></script>`
  }
  `;
};

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/root', (req, res) => {
    const context = {};
    const markup = getMarkup();

    if (context.url) {
      return res.redirect(context.url);
    } else {
      return res.end(
        getHtmlDoc(
          'root',
        `
        ${getHtmlHead(assets.client)}
        ${getMarkup(markup)}
        `
        )
      );
    }
  })
  .get('/:fragmentId', (req, res) => {
    const { fragmentId } = req.params;
    const isProd = process.env.NODE_ENV === 'production';

    const cssPath = isProd ? `http://localhost:3000${assets.client.css}`: assets.client.css;
    const jsPath = isProd ? `http://localhost:3000${assets.client.js}`: assets.client.js;

    const css = `<${cssPath}>; rel="stylesheet"`;
    // this will be fetched using require-js as an amd module
    const js = `<${jsPath}>; rel="fragment-script"`;

    res.writeHead(200, {
      Link: `${css}, ${js}`,
      'Content-Type': 'text/html'
    });
    const markup = getMarkup(req.url);
    return res.end(getHtmlDoc(fragmentId, markup));
  });

export default server;
