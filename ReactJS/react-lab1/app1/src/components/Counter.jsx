import { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.state.count - 1 >= 0 && this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="alert alert-success p-5 mt-1">
        <p className="text-center fs-1">{this.state.count}</p>

        {this.state.count <= 0 && (
          <p className="text-danger text-center">
            Can't decrease counter less than Zero
          </p>
        )}
        <div className="text-center">
          <button
            className="btn btn-danger btn-lg mx-3"
            onClick={this.decrease}
          >
            -
          </button>
          <button
            className="btn btn-success btn-lg mx-3"
            onClick={this.increase}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
