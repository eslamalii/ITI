import React from 'react';
import Form from './Form';

const NewAcc = (props) => {
  const savedDataAccHandler = (data) => {
    const dataAcc = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddAcc(dataAcc);
  };

  return (
    <div>
      <Form onSavedDataAcc={savedDataAccHandler} />
    </div>
  );
};

export default NewAcc;
