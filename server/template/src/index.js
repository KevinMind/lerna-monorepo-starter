import  http from 'http';
import  Tailor from 'node-tailor';

import indexTemplate from './templates';
import NotFoundTemplate from './templates/404.html';
import bananaTemplate from './templates/banana';
import vueTemplate from './templates/vue';

const TEMPLATE_KEYS = {
  index: '',
  banana: 'banana',
  vue: 'vue',
};

const TEMPLATES = {
  [TEMPLATE_KEYS.index]: indexTemplate,
  [TEMPLATE_KEYS.banana]: bananaTemplate,
  [TEMPLATE_KEYS.vue]: vueTemplate,
};

const fetchTemplate = async (request, parseTemplate) => {
  try {
    const { headers } = request;
    const templatePath = headers['x-request-uri'].replace('/', '');

    console.log({ templatePath });

    const template = TEMPLATES[templatePath];

    if (!template) {
      throw new Error('no template found');
    }
    return parseTemplate(template());
  } catch (e) {
    console.error(e);
    return parseTemplate(NotFoundTemplate);
  }


};

const fetchContext = async (context) => {
  // console.log('fragmentUrl', context.headers);
  return context;
};

const filterRequestHeaders = (attributes, req) => {
  // console.log('buildFragment request headers', attributes);
  const { query, params } = req;
  // console.log({ query, params });
  // idk why, but we have to return an object here.
  return {};
};

const tailor = new Tailor({
  filterRequestHeaders,
  fetchContext,
  fetchTemplate,
});

// Root Server
http
  .createServer((req, res) => {
    if (req.url === '/favicon.ico') {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      return res.end('');
    }
    req.headers['x-request-uri'] = req.url;
    // req.url = req.url || '/index';
    tailor.requestHandler(req, res);
  })
  .listen(8080, function() {
    console.log('Tailor server listening on port 8080');
  });

process.on('uncaughtException', function (err) {
  console.log(err);
});
