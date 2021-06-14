import React from 'react'
import Typography from '@material-ui/core/Typography';

export const Balance = () => {
    return (
      <div style={{ display:'flex', width:150, flexWrap:'wrap', marginLeft: -110 }}>
          <Typography style={{ fontWeight: "bold" }}>YOUR BALANCE</Typography>
          <Typography variant="h4">$260.00</Typography>
      </div>
    );
}
