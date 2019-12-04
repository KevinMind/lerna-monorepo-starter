'use strict';

const add = require('add');
const _ = require('lodash');
const log = require('log');

module.exports = run;

function run() {
  const random = _.random(0, 10);
  log('adding random(', random, ')');
  const result = add(random);
  log('result: ', result);
}

run();
