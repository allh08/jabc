import React from 'react';
import {
  Paper,
  withStyles,
  Typography,
  Box
} from '@material-ui/core';

import ChatScreen from '../../components/ChatScreen';
import StarProgressBar from '../../components/StarProgressBar';
import NextButton from '../../components/NextButton';

const styles = {
  content: {
    width: '80vw',
    margin: 'auto',
    borderSpacing: 'auto',
    padding: '4vw'
  },
  chat: {
    background: 'seashell',
    borderRadius: 16,
    height: '80vh',
    width: '60%',
    display: 'flex',
    margin: 'auto',
    justifyContent: "center"
  }
}


class ChatPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Paper className={classes.content} elevation={3}>
          <Box>
            <Typography variant="h4" >
              Abilities
            </Typography>
          </Box>
          <Paper elevation={3} className={classes.chat}>
            <ChatScreen />
          </Paper>
          <br />
          <NextButton link="/jabc/career/result" />
        </Paper>
        <StarProgressBar currStars={3} maxStars={5} />


      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ChatPage);

