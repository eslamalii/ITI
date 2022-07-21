import React, { useContext } from 'react';
import { connect } from 'react-redux';
const Counter = (props) => {
  const { count, increase, decrease } = props;
  return (
    <div className="alert alert-dark p-5 mt-1">
      <h1 className="text-center">Counter with Redux</h1>
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

let dispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: 'INCREASE' }),
    decrease: () => dispatch({ type: 'DECREASE' }),
  };
};

let stateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};
export default connect(stateToProps, dispatchToProps)(Counter);
