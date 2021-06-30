import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      color: "teal",
      marginTop:"5.5px"
     
    },
   
  });
export const Spinner = () => {
    const classes = useStyles();
    return (
        <CircularProgress disableShrink size="1.3rem" classes={{root: classes.root}}/>
    )
}
