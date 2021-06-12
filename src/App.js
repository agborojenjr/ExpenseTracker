import { red } from '@material-ui/core/colors';
import React from 'react';
import { AddTransaction } from './Components/AddTransaction';
import { Balance } from './Components/Balance';
import { Expenses } from './Components/Expenses';
import { Header } from './Components/Header';
import { Transactions } from './Components/Transactions';


function App() {
  return (
    <div style={{ display:'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#EDEEEE' }}>
      <Header />
      <Balance />
      <Expenses />
      <Transactions />
      <AddTransaction />
    </div>
  );
}

export default App;
