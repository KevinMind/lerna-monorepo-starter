import React, { Fragment, useState, useEffect } from 'react';
import image from './react.svg';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      const newCount = count + 1;
      setCount(newCount);
    }, 1000);

    return () => clearInterval(int);
  });
  return (
    <Fragment>
      <div>
        <img src={image} width="50px" />
        hello react {count}
      </div>
    </Fragment>
  );
};

export default App;
