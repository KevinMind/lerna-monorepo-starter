export { default } from './server';

if (process.env.NODE_ENV === 'development') {
  import ('./example').then(({ default: run }) => run(process.env));
}
