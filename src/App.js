import React from 'react';
import { Balance } from './Components/Balance';
import { Expenses } from './Components/Expenses';
import { Header } from './Components/Header';
import { Transactions } from './Components/Transactions';


function App() {
  return (
    <div>
      <Header />
      <Balance />
      <Expenses />
      <Transactions />
    </div>
  );
}

export default App;
