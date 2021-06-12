import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Paper } from '@material-ui/core';
// import ToggleButton from '@material-ui/lab/ToggleButton';

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
        <Paper
          elevation={2}
          border={1}
          style={{ display: "flex", justifyContent: "space-between", width:260 }}
          key={i}
        >
          <div style={{ marginLeft: 5 }}>{transaction.text}</div>
          <div style={{ marginRight: 5 }}>{transaction.amount}</div>
        </Paper>
      );
    });

    return (
      <form className={classes.root} noValidate autoComplete="off">
        {/* <ToggleButton value="bold" aria-label="bold"> */}
          <Typography>History</Typography>
        {/* </ToggleButton> */}
        <hr style={{ width:260 }} />
        {payment}
      </form>
    );
}
