import React from 'react';
import { Grid, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  nextButton: {
    alignItems: 'flex-start',
    justify: 'flex-end',
    direction: 'row'
  }
})

const NextButton = (props) => {
  const classes = useStyles();
  const {link} = props;
  return (
    <Grid container className={classes.nextButton} justify='flex-end'>

      <Link to={link} style={{ textDecoration: 'none' }}>
        <Button variant="contained">Next</Button>
      </Link>
    </Grid>
  );
}

export default NextButton;
