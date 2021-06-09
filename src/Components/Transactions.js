import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const initialState = {
  transactions: [
    {id: 1, text:'Flower', amount:-20},
    {id: 2, text:'Salary', amount:300},
    {id: 3, text:'Book', amount:-10},
    {id: 4, text:'Camera', amount:150},
    {id: 3, text:'Cash', amount:-100},
    {id: 4, text:'Ojen', amount:600},
  ]
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    payment: {
      // border: 3px solid red,
    },
  }));

export const Transactions = () => {
    const classes = useStyles();

    const payment = initialState.transactions.map((transaction, i) => {
      return (
        <Box
          border={1}
          style={{ display: "flex", justifyContent: "space-between" }}
          key={i}
        >
          <div>{transaction.text}</div>
          <div>{transaction.amount}</div>
        </Box>
      );
    });

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <Typography>History</Typography>
        <hr />
        {payment}
      </form>
    );
}
