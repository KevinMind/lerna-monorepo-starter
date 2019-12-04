'use strict';

const log = require('log');

module.exports = add;

function add(x) {
  const result = x + 2;
  log(2, ' + ', x, ' = ', result);
  return result;
}
