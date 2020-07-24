import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import StartPage from './pages/career/StartPage';
import DragAndDropPage from './pages/career/DragAndDropPage';
import SelectionPage from './pages/career/SelectionPage'
import ChatPage from './pages/career/ChatPage';
import ResultPage from './pages/career/ResultPage';
import EndPage from './pages/career/EndPage';
import ForumPage from './pages/career/ForumPage';

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
    path="/jabc/career"
    render={({ match: { url } }) => (
      <>
        <Route path={`${url}/`} component={StartPage} exact />
        <Route path={`${url}/start`} component={StartPage} />
        <Route path={`${url}/dragdrop`} component={DragAndDropPage} />
        <Route path={`${url}/selection`} component={SelectionPage} />
        <Route path={`${url}/chat`} component={ChatPage} />
        <Route path={`${url}/result`} component={ResultPage} />
        <Route path={`${url}/end`} component={EndPage} />
        <Route path={`${url}/forum`} component={ForumPage} />
      </>
    )}
  />
)

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>

      <Switch>
        <Route exact path="/jabc/" component={Home} />
        {careerRoutes}
      </Switch>
    </main>
  </Fragment>
);

export default withStyles(styles)(App);
