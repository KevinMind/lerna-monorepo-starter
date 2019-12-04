'use strict';

module.exports = log;

function log(...message) {
  console.log(new Date().toDateString(), ': ', ...message);
}
