import React from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles,
  Paper,
  Typography,
  Grid,
  Button,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import ReplayIcon from '@material-ui/icons/Replay';
import ShareIcon from '@material-ui/icons/Share';
import LinkIcon from '@material-ui/icons/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import SendIcon from '@material-ui/icons/Send';
import StarProgressBar from '../../components/StarProgressBar';



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const styles = {
  content: {
    width: '80vw',
    margin: 'auto',
    borderSpacing: 'auto',
    padding: '4vw'
  }
}

class EndPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
    this.onOpenShareMenu = this.onOpenShareMenu.bind(this);
    this.onCloseShareMenu = this.onCloseShareMenu.bind(this);
  }

  onOpenShareMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  };

  onCloseShareMenu() {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, } = this.props;
    const { anchorEl } = this.state;

    return (
      <React.Fragment>
        <Paper className={classes.content} elevation={3}>
          <Box>
            <Typography variant="h4" >
              Congratulations!
            </Typography>
            <br />
            <Typography paragraph variant="body2" >
              You have completed this activity!
            </Typography>
          </Box>
          <br />
          <br />

          <Grid container className={classes.nextButton} justify="flex-end" spacing={3}>
            <Grid item>
              <Link to='/jabc/career/start' style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="secondary">
                  {"Try again"}
                  <ReplayIcon style={{paddingLeft: 4}} />
                </Button>
              </Link>
            </Grid>

            <Grid item>
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={this.onOpenShareMenu}
              >
                {"Share this activity\t\t"}
                <ShareIcon style={{paddingLeft: 4}} />
              </Button>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={this.onCloseShareMenu}
              >
                <StyledMenuItem>
                  <ListItemIcon>
                    <SendIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Email" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <TwitterIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Social Media" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <LinkIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Link" />
                </StyledMenuItem>
              </StyledMenu>
            </Grid>
          </Grid>
        </Paper>
        <StarProgressBar currStars={5} maxStars={5} />


      </React.Fragment >
    );
  }
}

export default withStyles(styles)(EndPage);

