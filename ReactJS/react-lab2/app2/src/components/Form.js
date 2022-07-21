import React, { useState } from 'react';

const Form = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitData = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
    };

    props.onSavedDataAcc(data);
    setUsername('');
    setPassword('');
    setEmail('');
  };
  return (
    <form
      className="w-50 p-3 mx-auto d-flex flex-column justify-content-center"
      onSubmit={onSubmitData}
    >
      <div className="mb-3">
        <label htmlFor="inputUsername" className="form-label">
          Username
        </label>
        <input
          type="text"
          pattern="[a-zA-Z0-9._]{3,}"
          className="form-control"
          id="inputUsername"
          value={username}
          onChange={usernameChangeHandler}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          pattern="[a-zA-Z0-9._%+-]+@[A-Za-z]+.com"
          className="form-control"
          value={email}
          id="inputEmail1"
          aria-describedby="emailHelp"
          onChange={emailChangeHandler}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          pattern="[a-zA-Z0-9._%+-]{4,}"
          className="form-control"
          value={password}
          id="inputPassword1"
          onChange={passwordChangeHandler}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
