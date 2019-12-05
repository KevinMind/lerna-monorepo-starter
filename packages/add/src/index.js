import log from 'log';

const add_base = 5;

export default function index(x) {
  const result = x + add_base;
  log(add_base, ' + ', x, ' = ', result);
  return result;
}
