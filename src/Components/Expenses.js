import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Paper } from '@material-ui/core'
import { green, red } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import { GlobalContext } from '../Context/GlobalState';


const useStyles = makeStyles((theme) => ({
    root: {
      // minWidth: 275,
    },
    divider: {
      margin: theme.spacing(1.5, 0.5),
    },
    income: {
    //   fontSize: 60,
      color: green[300],
      border: 180,
    },
    expense: {
        //   fontSize: 60,
          color: red[300],
        },
  }));

export const Expenses = () => {
   const { transactions } = useContext(GlobalContext);

   const amount = transactions.map((transaction) => transaction.amount);

   const income = amount
     .filter((item) => item > 0)
     .reduce((acc, item) => (acc += item), 0)
     .toFixed(2);

   const expense = (
     amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
     -1
   ).toFixed(2);

   

    const classes = useStyles();
    return (
      <Paper className="expense">
        <Box className="exp_margin">
          <Typography>INCOME</Typography>
          <Typography className={classes.income}>${income}</Typography>
        </Box>
        <Divider flexItem orientation="vertical" className={classes.divider} />
        {/* <div style={{margin: 6, fontSize:35, color:'#DEDFDF' }}>|</div> */}
        <Box className="exp_margin">
          <Typography>EXPENSE</Typography>
          <Typography className={classes.expense}>${expense}</Typography>
        </Box>
      </Paper>
    );
}
