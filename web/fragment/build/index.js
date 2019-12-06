'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var http = _interopDefault(require('http'));

http.createServer((req, res) => {
  // just some js
  if (req.url === '/script.js') {
    res.setHeader('Content-Type', 'application/javascript');
    return res.end(`console.log('vanilla javascript app');`);
  } // and some css


  if (req.url === '/styles.css') {
    res.setHeader('Content-Type', 'text/css');
    return res.end('body { background: #303F9F; color: white }');
  } // Every Fragment sends a link header that describes its resources - css and js


  const css = '<http://localhost:8081/styles.css>; rel="stylesheet"'; // this will be fetched using require-js as an amd module

  const js = '<http://localhost:8081/script.js>; rel="buildFragment-script"';
  res.writeHead(200, {
    Link: `${css}, ${js}`,
    'Content-Type': 'text/html'
  });

  if (req.url === '/root') {
    return res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <link href="http://localhost:8081/styles.css" rel="stylesheet" />
      </head>
      <body>
        <div>Fragment 1: vanilla javascript app</div>
        <script src="http://localhost:8081/script.js" rel="script"></script>
      </body>
      </html>
      `);
  } // buildFragment content


  res.end('<div>Fragment 1: vanilla javascript app</div>');
}).listen(8081, function () {
  console.log('Fragment Server listening on port 8081');
});
