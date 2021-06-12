import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


export const AddTransaction = () => {
    return (
      <form
        // style={{
        //   display: "flex",
        //   alignItems: "center",
        //   flexDirection: "column",
        // }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: "column",
          }}
        >
          Add New Transaction
        </div>
        <hr />
        <div>
          <Typography>Text</Typography>
          <TextField
            id="outlined-full-width"
            style={{ marginBottom: 8 }}
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
          <Typography>
            Amount
            <br />
            (negative-expense, positive-income)
          </Typography>
          <TextField
            id="outlined-full-width"
            style={{ marginBottom: 8 }}
            placeholder="Enter amount..."
            fullWidth
            // margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        <Box style={{ display: 'grid', justifySelf: 'center' }}>
          <Button variant="contained" color="primary">
            Add Transaction
          </Button>
        </Box>
      </form>
    );
}
