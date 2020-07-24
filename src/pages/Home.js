import React from 'react';
import ActivityCard from '../components/ActivityCard';
import { Grid, withStyles } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  }
}


class Home extends React.Component {

  render() {

    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="left" spacing={3}>

              <Grid key='career' item>
                <ActivityCard
                  title="Career Clustering"
                  imageSrc="jabc/careerclustering.png"
                  link="/jabc/career/start"
                  description="In this course you will go on a bit of a journey of self-discovery. It begins with an activity meant to help categorize your interests, skills, strengths and passions."
                />
              </Grid>

              <Grid key='future' item>
                <ActivityCard
                  title="Future"
                  imageSrc="https://i.pinimg.com/originals/7b/41/f7/7b41f7ae3ac370c966f3931ed4ab991c.jpg"
                  link="."
                  description="Coming soon..."
                />
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(Home);
