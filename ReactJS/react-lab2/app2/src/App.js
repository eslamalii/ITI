import './App.css';
import ListData from './components/ListData';
import NewAcc from './components/NewAcc';
import React, { useState } from 'react';

function App() {
  const [itemsData, setData] = useState([]);
  let checkValid = true;
  const addNewItemHandler = (data) => {
    itemsData.forEach((v) => {
      if (v.email === data.email) {
        alert('This Mail is Already Taken');
        checkValid = false;
      } else {
        checkValid = true;
      }
    });

    if (checkValid) {
      setData((prevData) => {
        return [data, ...prevData];
      });
    }
  };
  return (
    <div>
      <NewAcc onAddAcc={addNewItemHandler} />
      <ListData data={itemsData} />
    </div>
  );
}

export default App;
