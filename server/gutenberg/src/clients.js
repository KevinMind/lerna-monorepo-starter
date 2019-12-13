import buildFragment from './buildFragment';

const baseUrl = 'http://localhost';

export const fragment = buildFragment({ baseUrl, port: 5050 });
export const myRazzleApp = buildFragment({ baseUrl, port: 6060 });
export const reactSimple = buildFragment({ baseUrl, port: 7070 });
export const withVue = buildFragment({ baseUrl, port: 8080 });
