const getHtmlRoot = (fragmentId, body) => {
  return `
  <div id="${fragmentId}" style="width:100%;">
      ${body}
    </div>
  `;
}

const getHtmlDoc = (content) => {
  return `
    <!doctype html>
    <html lang="">
    ${content}
    </html>`;
};

const getHtmlHead = ({ client: { css, js, title } }, fragmentId) => {
  return `
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta charset="utf-8" />
  <title>${title}</title>
  <style>
  body {
    padding: 10px;
    background: grey;
  }
  ${fragmentId && `
    #${fragmentId} {
      background: white;
      box-shadow: 2px 2px 10px 2px #0000005e;
    }
  `}
  </style>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${css
    ? ` <link rel="stylesheet" href="${css}">`
    : ''
    }
  ${js && (process.env.NODE_ENV === 'production'
      ? `<script src="${js}" defer></script>`
      : `<script src="${js}" defer crossorigin></script>`
  )}
  `;
};

export const renderApp = ({ getMarkup, getAssets, appRoot }) => async (req, res) => {
  const assets = await getAssets(req);
  const markup = await getMarkup(req);
  return res.end(
    getHtmlDoc(
      `
        ${getHtmlHead(assets, appRoot)}
        ${getHtmlRoot(appRoot, markup)}
        `
    )
  );
};

export const renderFrag = ({ getAssets, getMarkup }) => async (req, res) => {
  const { fragmentId } = req.params;
  const isProd = process.env.NODE_ENV === 'production';
  const assets = await getAssets(req);

  const cssPath = isProd ? `http://localhost:3000${assets.client.css}`: assets.client.css;
  const jsPath = isProd ? `http://localhost:3000${assets.client.js}`: assets.client.js;

  const css = `<${cssPath}>; rel="stylesheet"`;
  // this will be fetched using require-js as an amd module
  const js = `<${jsPath}>; rel="fragment-script"`;

  res.writeHead(200, {
    Link: `${css}, ${js}`,
    'Content-Type': 'text/html'
  });

  const markup = await getMarkup(req);
  return res.end(getHtmlDoc(getHtmlRoot(fragmentId, markup)));

};
