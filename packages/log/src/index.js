const chalk = require('chalk');

export default function log(...message) {
  chalk.green(new Date().toDateString(), ': ', ...message);
  chalk.blue('done');
}
