import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles({
    title: {
      fontSize: 60,
      color: orange[700],
    },
  });

export const Header = () => {
  const classes = useStyles();
  return (
        <Typography
          className={classes.title}
          >
          Expense Tracker
        </Typography>
  );
};
