import log from '@smava-packages/log';

const add_base = 30;

export default function index(x) {
  const result = x + add_base;
  log(add_base, ' + ', x, ' = ', result);
  log('banana');
  return result;
}
