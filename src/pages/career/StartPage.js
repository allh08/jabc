import React from 'react';
import {
  Box,
  makeStyles,
  Typography
} from '@material-ui/core';

import NextButton from '../../components/NextButton';

const useStyles = makeStyles({
  content: {
    width: '60%',
    margin: 'auto',
    justifyContent: 'center'
  }
})

const StartPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.content}>
        <Typography variant="h2" >
          Welcome
        </Typography>

        <img src="https://www.jobbank.gc.ca/themes-jb/images/quiz/quiz_intelligences.svg" alt="logo" className='icon' style={{ 'height': '20em', 'margin': '2em' }} />
        <Typography variant="body1">

          If you were to compare your goals with those of friends, you'd probably notice that lots of you have different goals.

          Goals are often different because everyone has different interests, skills, strengths, and passions.  You need to know about yourself to set appropriate goals.

          In this course you will go on a bit of a journey of self-discovery. It begins with an activity meant to help categorize your interests, skills, strengths and passions. Complete the Career Word Cloud to the right to begin.

          Once you've chosen the words that best align with your interests, move the slider at the bottom of the image to the right to see how your interests align with various career clusters.

        </Typography>
        
        <NextButton link="/career/dragdrop" />
      </Box>


    </React.Fragment>
  );
}


export default StartPage;
