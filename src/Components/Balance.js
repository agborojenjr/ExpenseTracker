import React, { useContext } from 'react'; 
import Typography from '@material-ui/core/Typography';
import { GlobalContext } from '../Context/GlobalState';


export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount =transactions.map(transaction => (transaction.amount));
  
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
      <div className='header'>
          <div className='boldu'>YOUR BALANCE</div>
          <Typography variant="h4">${total}</Typography>
      </div>
    );
}
