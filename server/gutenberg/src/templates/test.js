import buildFragment from '../buildFragment';

const reactAppSimple = buildFragment({ baseUrl: 'http://localhost', port: 3000 });

export default () => `
<!-- Tailor needs an index.html -->
<div>
  <h2>fragment 1</h2>
  ${reactAppSimple({ fragmentId: 'react-app' })}
</div>
`;


