'use strict';

const log = require('log');

module.exports = add;

const add_base = 10;

function add(x) {
  const result = x + add_base;
  log(add_base, ' + ', x, ' = ', result);
  return result;
}
