import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    width: 320,
    height: 460
  },
  media: {
    height: 260,
  },
  content: {
    height: 400,
  }
};

class ActivityCard extends React.Component {


  render() {
    const { classes, title, description, imageSrc, link } = this.props;
    return (
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Card className={classes.root}>
          <CardActionArea className={classes.content} >
            <CardMedia
              className={classes.media}
              image={imageSrc}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
          </Button>
            <Button size="small" color="primary">
              Learn More
          </Button>
          </CardActions>
        </Card>
      </Link>
    );
  }
}

export default withStyles(styles)(ActivityCard);
