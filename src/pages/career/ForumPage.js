import React from 'react';
import {
  Paper,
  withStyles,
  Typography,
  TextField,
  Box
} from '@material-ui/core';

import StarProgressBar from '../../components/StarProgressBar';
import FAQAccordian from '../../components/FAQAccordian';

const styles = {
  content: {
    width: '80vw',
    margin: 'auto',
    borderSpacing: 'auto',
    padding: '4vw'
  }
}


class ForumPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Paper className={classes.content} elevation={3}>
          <Box>
            <Typography variant="h4" >
              Forum - Culinary
            </Typography>
          </Box>
          <br />
          <Box width="80%" margin="2%">
            <Typography variant="h6" >
              Frequently Asked Questions
            </Typography>
            <FAQAccordian
              question="What courses do I need to take?"
              answer="You can refer to the information in ..."
            />
            <FAQAccordian
              question="Which univiersities offer these programs?"
              answer="A, B, and C, and University A ranks the highest."
            />
            <FAQAccordian
              question="Which univiersities offer these programs?"
              answer="A, B, and C, and University A ranks the highest."
            />
          </Box>
          <br />
          <Box width="80%" margin="2%">
            <Typography variant="h6" >
              Community
            </Typography>
          </Box>
          <br />
          <Box width="80%" margin="2%">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField fullWidth variant="outlined" label="Ask a Question" />
            </form>
          </Box>
        </Paper>
        <StarProgressBar currStars={3} maxStars={5} />


      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ForumPage);

