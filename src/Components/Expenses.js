import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core'
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    income: {
    //   fontSize: 60,
      color: green[300],
    },
    expense: {
        //   fontSize: 60,
          color: red[300],
        },
    pos: {
      marginBottom: 12,
    },
  });

export const Expenses = () => {
    const classes = useStyles();
    return (
        <Typography component='div'>
            <Box>
                <Typography>
                    INCOME
                </Typography>
                <Typography className={classes.income}>
                    $500.00
                </Typography>
            </Box>
            <Box>
                <Typography>
                    EXPENSE
                </Typography>
                <Typography className={classes.expense}>
                    $240.00
                </Typography>
            </Box>
        </Typography>
    )
}
