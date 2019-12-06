'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var express = _interopDefault(require('express'));
var add = _interopDefault(require('add'));

const app = express();
app.use('', (req, res) => {
  const input = parseInt(req.query.add, 10) || 0;
  const result = add(input);
  return res.json({
    result
  });
});
app.listen(3000, err => {
  if (err) {
    return console.log('error encountered starting app', err);
  }

  return console.log('started app on port', 3000);
});
