import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const AddTransaction = () => {
    return (
      <form>
        <div>
          <Typography>Add New Transaction</Typography>
        </div>
        <hr />
        <div>
          <Typography>Text</Typography>
          <TextField
            id="outlined-full-width"
            style={{ margin: 8 }}
            placeholder="Enter text..."
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        <div>
          <Typography>Amount</Typography>
          <TextField
            id="outlined-full-width"
            style={{ margin: 8 }}
            placeholder="Enter amount..."
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        <Button variant="contained" color="primary">
          Add Transaction
        </Button>
      </form>
    );
}
