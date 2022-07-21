import React, { useState } from 'react';
import CounterContext from './CounterContext';

const AuthContext = (props) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default AuthContext;
