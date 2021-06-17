import React from 'react';
import { AddTransaction } from './Components/AddTransaction';
import { Balance } from './Components/Balance';
import { Expenses } from './Components/Expenses';
import { Header } from './Components/Header';
import { Transactions } from './Components/Transactions';
import './Components/Tracker.css';

import { GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <div style={{ display:'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#EDEEEE' }}>
        <Header />
        <Balance />
        <Expenses />
        <Transactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
