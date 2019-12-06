'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var http = _interopDefault(require('http'));
var Tailor = _interopDefault(require('node-tailor'));

const buildFragmentUrl = (base, port, path) => `${base}${port && `:${port}`}${path ? `/${path}` : ''}`;

var buildFragment = (({
  baseUrl,
  fallbackUrl,
  port
}) => ({
  isAsync = false,
  fragmentId = null,
  isPrimary = false,
  isPublic = false
}) => {
  return `
  <fragment src="${buildFragmentUrl(baseUrl, port, fragmentId)}" id="${fragmentId}" ${fallbackUrl && `fallbackUrl="${fallbackUrl}`}/>
  `;
});

const javascriptApp = buildFragment({
  baseUrl: 'http://localhost',
  port: 8081
});
const razzleApp = buildFragment({
  baseUrl: 'http://localhost',
  port: 3000
});
const reactAppSimple = buildFragment({
  baseUrl: 'http://localhost',
  port: 9000
});
var indexTemplate = (() => `
<!-- Tailor needs an index.html -->
<h1>Basic css and js</h1>
${javascriptApp({
  fragmentId: 'vanilla-app'
})}
<div>
  <h2>fragment 1</h2>
  ${razzleApp({
  fragmentId: 'razzle-app'
})}
</div>
<div>
  <h2>fragment 1</h2>
  ${reactAppSimple({
  fragmentId: 'react-app'
})}
</div>
`);

var NotFoundTemplate = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\nNO CONTENT 404 Page\n</body>\n</html>\n";

const javascriptApp$1 = buildFragment({
  baseUrl: 'http://localhost',
  port: 8081
});
const reactApp = buildFragment({
  baseUrl: 'http://localhost',
  port: 3000,
  innerContent: '<div>banana</div>'
});
var bananaTemplate = (() => `
<!-- Tailor needs an index.html -->
<h1>Basic css and js</h1>
<div>
  <h2>fragment 1</h2>
  ${reactApp({
  fragmentId: 'react-app-two'
})}
  ${javascriptApp$1({
  fragmentId: 'vanilla-app'
})}
  ${reactApp({
  fragmentId: 'react-app-three'
})}
</div>
`);

const TEMPLATE_KEYS = {
  index: '',
  banana: 'banana'
};
const TEMPLATES = {
  [TEMPLATE_KEYS.index]: indexTemplate,
  [TEMPLATE_KEYS.banana]: bananaTemplate
};

const fetchTemplate = async (request, parseTemplate) => {
  try {
    const {
      headers
    } = request;
    const templatePath = headers['x-request-uri'].replace('/', '');
    console.log({
      templatePath
    });
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

const fetchContext = async context => {
  // console.log('fragmentUrl', context.headers);
  return context;
};

const filterRequestHeaders = (attributes, req) => {
  // idk why, but we have to return an object here.

  return {};
};

const tailor = new Tailor({
  filterRequestHeaders,
  fetchContext,
  fetchTemplate
}); // Root Server

http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(200, {
      'Content-Type': 'image/x-icon'
    });
    return res.end('');
  }

  req.headers['x-request-uri'] = req.url; // req.url = req.url || '/index';

  tailor.requestHandler(req, res);
}).listen(8080, function () {
  console.log('Tailor server listening on port 8080');
});
process.on('uncaughtException', function (err) {
  console.log(err);
});
