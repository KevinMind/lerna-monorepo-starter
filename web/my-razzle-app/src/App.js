import React, { Fragment, useState, useEffect } from 'react';
import image from './razzle.png';

const getCount = after => async add => {
  const response = await fetch(`http://localhost:3054?add=${add}`);
  const { result } = await response.json();

  after(result);
};

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      getCount(setCount)(count);
    }, 1000);

    return () => clearInterval(int);
  });
  return (
    <Fragment>
      <div>
        hello react {count}
        <img src={image} />
      </div>
    </Fragment>
  );
};

export default App;
