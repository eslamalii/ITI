import './App.css';
import Counter from './components/Counter';
import React from 'react';
import CounterProvider from './context/ContextProvider';
import CounterR from './components/CounterR';
import Users from './components/Users';

function App() {
  return (
    <>
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <CounterR />
      <Users />
    </>
  );
}

export default App;
