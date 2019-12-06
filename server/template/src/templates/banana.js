import buildFragment from '../buildFragment';

const javascriptApp = buildFragment({ baseUrl: 'http://localhost', port: 8081 });
const reactApp = buildFragment({ baseUrl: 'http://localhost', port: 3000, innerContent: '<div>banana</div>' });

export default () => `
<!-- Tailor needs an index.html -->
<h1>Basic css and js</h1>
<div>
  <h2>fragment 1</h2>
  ${reactApp({ fragmentId: 'react-app-two' })}
  ${javascriptApp({ fragmentId: 'vanilla-app' })}
  ${reactApp({ fragmentId: 'react-app-three' })}
</div>
`;
