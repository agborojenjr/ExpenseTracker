import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export const Transactions = () => {
    const classes = useStyles();

    return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Cash" variant="outlined" />
        <TextField id="outlined-basic" label="Book" variant="outlined" />
        <TextField id="outlined-basic" label="Camera" variant="outlined" />
    </form>
    )
}
