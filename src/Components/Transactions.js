import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const initialState = {
  transactions: [
    {id: 1, text:'Flower', amount:-20},
    {id: 2, text:'Salary', amount:300},
    {id: 3, text:'Book', amount:-10},
    {id: 4, text:'Camera', amount:150},
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

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <Typography>History</Typography>
        <hr />
        <Box
          border={1}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>{initialState.transactions[0].text}</div>
          <div>{initialState.transactions[0].amount}</div>
        </Box>
        <Box
          border={1}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>{initialState.transactions[1].text}</div>
          <div>{initialState.transactions[1].amount}</div>
        </Box>
        <Box
          border={1}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>{initialState.transactions[2].text}</div>
          <div>{initialState.transactions[2].amount}</div>
        </Box>
        {/* <TextField id="outlined-basic" label="Cash" variant="outlined" />
        <TextField id="outlined-basic" label="Book" variant="outlined" />
        <TextField id="outlined-basic" label="Camera" variant="outlined" /> */}
      </form>
    );
}
