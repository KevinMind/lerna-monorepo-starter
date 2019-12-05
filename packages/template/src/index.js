import  http from 'http';
import path from 'path';
import  Tailor from 'node-tailor';

const templatesPath = path.resolve(__dirname, 'templates');

const tailor = new Tailor({
  templatesPath
});

// Root Server
http
  .createServer((req, res) => {
    if (req.url === '/favicon.ico') {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      return res.end('');
    }
    tailor.requestHandler(req, res);
  })
  .listen(8080, function() {
    console.log('Tailor server listening on port 8080');
  });
