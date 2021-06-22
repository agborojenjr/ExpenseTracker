import React, { useState } from 'react';
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
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);


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
            value={text}
            onChange={(event) => setText(event.target.value)}
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
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
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
