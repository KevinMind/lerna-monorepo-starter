import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Advisors from './Advisors';
import Customers from './Customers';

const App = () => (
  <Switch>
    <Route path="*/customers" component={Customers} />
    <Route path="*/advisors" component={Advisors} />
  </Switch>
);

export default App;
