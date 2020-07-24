import React from 'react';
import {
  Paper,
  withStyles,
  Typography,
  Box
} from '@material-ui/core';

import NextButton from '../../components/NextButton';

const styles = {
  content: {
    width: '60vw',
    margin: 'auto',
    borderSpacing: 'auto',
    padding: '4vw'
  }
}


class StartPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Paper className={classes.content} elevation={3}>
          <Box>
            <Typography variant="h4" >
              Welcome
            </Typography>
            <br />
            <img src="https://www.jobbank.gc.ca/themes-jb/images/quiz/quiz_intelligences.svg" alt="logo" className='icon' style={{ 'height': '20em', 'margin': '2em' }} />
            <Typography variant="body1">

              If you were to compare your goals with those of friends, you'd probably notice that lots of you have different goals.

              Goals are often different because everyone has different interests, skills, strengths, and passions.  You need to know about yourself to set appropriate goals.

              In this course you will go on a bit of a journey of self-discovery. It begins with an activity meant to help categorize your interests, skills, strengths and passions. Complete the Career Word Cloud to the right to begin.

              Once you've chosen the words that best align with your interests, move the slider at the bottom of the image to the right to see how your interests align with various career clusters.

            </Typography>
          </Box>
          <NextButton link="/jabc/career/dragdrop" text="Start" color='secondary' />
        </Paper>


      </React.Fragment>
    );
  }
}

export default withStyles(styles)(StartPage);

