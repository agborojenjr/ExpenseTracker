import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 8,
  },
}));

export const AddTransaction = () => {
  const classes =useStyles();

    return (
      <form
        className='width'
      >
        <div
          className='boldu'
        >
          Add New Transaction
        </div>
        <hr />
        <div>
          <div className='labelSize'>Text</div>
          <TextField
            id="outlined-full-width"
            className={classes.root}
            placeholder="Enter text..."
            fullWidth
            // margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        <div>
          <div className='labelSize'>
            Amount
            <br />
            (negative-expense, positive-income)
          </div>
          <TextField
            id="outlined-full-width"
            className={classes.root}
            placeholder="Enter amount..."
            fullWidth
            // margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        <Box className='addTrans'>
          <Button variant="contained" color="primary">
            Add Transaction
          </Button>
        </Box>
      </form>
    );
}
