import React, { useContext } from 'react';
import CounterContext from '../context/CounterContext';
const Counter = () => {
  const { count, increase, decrease } = useContext(CounterContext);

  return (
    <div className="alert alert-success p-5 mt-1">
      <h1 className="text-center">Counter with Context API</h1>
      <p className="text-center fs-1">{count}</p>

      {count <= 0 && (
        <p className="text-danger text-center">
          Can't decrease counter less than Zero
        </p>
      )}
      <div className="text-center">
        <button className="btn btn-danger btn-lg mx-3" onClick={decrease}>
          -
        </button>
        <button className="btn btn-success btn-lg mx-3" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
