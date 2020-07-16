import React from 'react';
import { Star, StarBorder } from '@material-ui/icons'
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const styles = {
  stickToBottom: {
    width: '100%',
    height: '10em',
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'gold',
    backgroundColor: 'white'
  },
};

class StarProgressBar extends React.Component {

  render() {
    const { classes, maxStars, currStars } = this.props;
    return (
      <Box className={classes.stickToBottom}>
        {
          Array.apply(0, Array(currStars)).map(function (x, i) {
            let fontSize = 40 * (1.2 ** i);
            return <Star style={{ fontSize }} />;
          })
        }
        {
          Array.apply(0, Array(maxStars - currStars)).map(function (x, i) {
            let fontSize = 40 * (1.2 ** (currStars + i));
            return <StarBorder style={{ fontSize }} />;
          })
        }
      </Box>
    );
  }
}

export default withStyles(styles)(StarProgressBar);
