import buildFragment from '../buildFragment';

const javascriptApp = buildFragment({ baseUrl: 'http://localhost', port: 8081 });
const razzleApp = buildFragment({ baseUrl: 'http://localhost', port: 3000 });

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
  ${razzleApp({ fragmentId: 'razzle-app-two' })}
</div>
`;
