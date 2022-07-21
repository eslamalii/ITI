import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserAction from '../actions/userAction';

const Users = (props) => {
  const { users, getAllUsers } = props;

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="bg-light p-4">
      <h1 className="text-center">Users List</h1>
      {users &&
        users.map((user) => {
          console.log(users);
          return (
            <div className="alert alert-warning mb-3">
              <h1>{user.name}</h1>
            </div>
          );
        })}
    </div>
  );
};

let stateToProps = (state) => {
  return {
    users: state.users,
  };
};
let dispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(UserAction()),
  };
};

export default connect(stateToProps, dispatchToProps)(Users);
