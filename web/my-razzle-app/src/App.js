import React, { Fragment, useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      const newCount = count + 2;
      setCount(newCount);
    }, 1000);

    return () => clearInterval(int);
  });
  return (
    <Fragment>
      <div>
        hello react {count}
      </div>
    </Fragment>
  );
};

export default App;
