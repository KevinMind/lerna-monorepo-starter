import buildFragment from '../buildFragment';

const javascriptApp = buildFragment({ baseUrl: 'http://localhost', port: 8081 });
const razzleApp = buildFragment({ baseUrl: 'http://localhost', port: 3000 });
const reactAppSimple = buildFragment({ baseUrl: 'http://localhost', port: 9000 });
const vueApp = buildFragment({ baseUrl: 'http://localhost', port: 6060 });

export default () => `
<!-- Tailor needs an index.html -->
<h1>Basic css and js</h1>
${javascriptApp({ fragmentId: 'vanilla-app' })}
<div>
  <h2>fragment 1</h2>
  ${razzleApp({ fragmentId: 'razzle-app' })}
</div>
<div>
  <h2>fragment 1</h2>
  ${reactAppSimple({ fragmentId: 'react-app' })}
</div>
<div>
  <h2>fragment 3</h2>
  ${vueApp({ fragmentId: 'vue-app' })}
</div>
`;
