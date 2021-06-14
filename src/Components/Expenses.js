import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Paper } from '@material-ui/core'
import { green, red } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
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
    const classes = useStyles();
    return (
          <Paper style={{ display: 'flex', justifyContent:'space-around', width:260 }}>
            <Box style={{margin: 10, borderLeft:10 }}>
              <Typography>
                  INCOME
              </Typography>
              <Typography className={classes.income}>
                  $500.00
              </Typography>
            </Box>
            <Divider flexItem orientation="vertical" className={classes.divider} />
            {/* <div style={{margin: 6, fontSize:35, color:'#DEDFDF' }}>|</div> */}
            <Box style={{margin: 10 }}>
              <Typography>
                  EXPENSE
              </Typography>
              <Typography className={classes.expense}>
                  $240.00
              </Typography>
            </Box>
          </Paper>
    )
}
