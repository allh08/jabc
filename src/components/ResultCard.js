import React from 'react';
import {
  withStyles,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Collapse,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Fab
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumIcon from '@material-ui/icons/Forum';
import { Link } from 'react-router-dom';


import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  Title
} from '@devexpress/dx-react-chart-material-ui';

import classnames from 'classnames';

import culinaryData from '../jobData/culinary';
import engineeringData from '../jobData/engineering';
import educationData from '../jobData/education';


const styles = {
  card: {
    width: '100%',
  },
  media: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
}

class ResultCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  mapToData = (field) => {
    switch (field) {
      case 'culinary':
        return culinaryData;
      case 'engineering':
        return engineeringData;
      case 'education':
        return educationData;
      default:
        return {};
    }
  }

  render() {
    const { classes, fitCategory, score, field } = this.props;
    const data = this.mapToData(field);

    return (

      <Card className={classes.card} >
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Box align="center">
                <Typography variant="h6">
                  {data.name}
                </Typography>
                <img src={data.link} alt="logo" className='icon' style={{ 'height': '10em', 'margin': '2em' }} />
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box>
                <Typography variant="h6" align="left">
                  {`${fitCategory} (${score}%)`}
                </Typography>
                <br />
                <br />
                <Typography paragraph align="left">
                  {data.description}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <Box>
                <Link to='/jabc/career/forum'>
                  <Fab color="secondary" aria-label="Go to Forum" component="span">
                    <ForumIcon />
                  </Fab>
                </Link>

              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h6">
              {"Occupations in BC"}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>

                <Chart
                  data={data.occupations}
                  rotated
                >
                  <ArgumentAxis />
                  <ValueAxis showGrid={false} />
                  <Title
                    text="Employeed Workers"
                  />
                  <BarSeries
                    valueField="employeedWorkers"
                    argumentField="title"
                  />
                </Chart>
              </Grid>
              <Grid item xs={6}>

                <Chart
                  data={data.occupations}
                  rotated
                >
                  <ArgumentAxis />
                  <ValueAxis showGrid={false} />
                  <Title
                    text="Growth Rate"
                  />
                  <BarSeries
                    valueField="growthRate"
                    argumentField="title"
                  />
                </Chart>
              </Grid>
            </Grid>
            <br />
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Degree Requirement</TableCell>
                    <TableCell>Median Hourly Wage</TableCell>
                    <TableCell>Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.occupations.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell>{row.degree}</TableCell>
                      <TableCell>${row.medianWage}/hr</TableCell>
                      <TableCell><a href={row.workBCLink} target="_blank" rel="noopener noreferrer" >{row.workBCLink}</a></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(ResultCard);
