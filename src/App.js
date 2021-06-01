import React from 'react';
import { Balance } from './Components/Balance';
import { Expenses } from './Components/Expenses';
import { Header } from './Components/Header';


function App() {
  return (
    <div>
      <Header />
      <Balance />
      <Expenses />
    </div>
  );
}

export default App;
