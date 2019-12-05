import chalk from 'chalk';

export default function log(...message) {
  console.log(chalk.green(new Date().toDateString(), ': ', ...message));
  console.log(chalk.blue('finished'));
}
