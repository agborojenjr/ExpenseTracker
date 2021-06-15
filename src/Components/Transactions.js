import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const initialState = {
  transactions: [
    {id: 1, text:'Flower', amount:-20},
    {id: 2, text:'Salary', amount:300},
    {id: 3, text:'Book', amount:-10},
    {id: 4, text:'Camera', amount:150},
    {id: 5, text:'Ojen', amount:600},
  ]
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        // width: '25ch',
      },
    },
  }));

export const Transactions = () => {
    const classes = useStyles();

    const payment = initialState.transactions.map((transaction, i) => {
      return (
        <Paper
          elevation={2}
          border={1}
          className={transaction.amount>0 ? 'history_green' : 'history_red'}
          key={i}
        >
          <div className='leftMargin'>{transaction.text}</div>
          <div className='rightMargin'>{transaction.amount}</div>
        </Paper>
      );
    });

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <h4>History</h4>
        <hr className='width' />
        {payment}
      </form>
    );
}
