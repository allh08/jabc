import React from 'react';
import Button from '@material-ui/core/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { Link } from 'react-router-dom';

class SurveyDialog extends React.Component {
  render() {
    const { open, link } = this.props;

    return (
      <div>
        <Dialog open={open} aria-labelledby="form-dialog-title" fullScreen>
          <DialogTitle id="form-dialog-title">Survey</DialogTitle>
          <DialogContent>
            <iframe width="100%" height="100%" src="https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_6LmyISNsuGDAYqF" title="qualtrics" />
          </DialogContent>
          <DialogActions>
            <Link to={link} style={{ textDecoration: 'none' }}>
              <Button color="secondary">
                {"Skip"}
              </Button>
            </Link>
            <Link to={link} style={{ textDecoration: 'none' }}>
              <Button color="primary">
                {"Continue"}
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SurveyDialog;