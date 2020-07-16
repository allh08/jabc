import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import StartPage from  './pages/career/StartPage';
import DragAndDropPage from  './pages/career/DragAndDropPage';

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const careerRoutes = (
  <Route
    path="/career"
    render={({ match: { url } }) => (
      <>
        <Route path={`${url}/`} component={StartPage} exact />
        <Route path={`${url}/start`} component={StartPage} />
        <Route path={`${url}/dragdrop`} component={DragAndDropPage} />
      </>
    )}
  />
)

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Route exact path="/" component={Home} />
      {careerRoutes}
    </main>
  </Fragment>
);

export default withStyles(styles)(App);
