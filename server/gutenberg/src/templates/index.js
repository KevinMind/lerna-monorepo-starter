import { fragment, myRazzleApp, reactSimple } from "../clients";

export default () => `
<!-- Tailor needs an index.html -->
<style>
img {
  width: 200px;
}
body {
  background: blue;
  color: white;
}      
</style>
<h1>Basic css and js</h1>
<div>
  <h2>Pure Javascript App (no framework)</h2>
  ${fragment({ fragmentId: 'vanilla-app' })}
</div>

<div>
  <h2>React Razzle App</h2>
  ${myRazzleApp({ fragmentId: 'razzle-app' })}
</div>
<div>
  <h2>Simple React App</h2>
  ${reactSimple({ fragmentId: 'react-app' })}
</div>
`;
