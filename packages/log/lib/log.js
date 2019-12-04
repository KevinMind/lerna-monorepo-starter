'use strict';

const chalk = require('chalk');

module.exports = log;

function log(...message) {
  chalk.green(new Date().toDateString(), ': ', ...message);
  chalk.blue('done');
}
