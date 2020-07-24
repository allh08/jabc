import React from 'react';
import {
  Paper,
  Button,
  withStyles,
  Typography,
  Grid,
  Box,
} from '@material-ui/core';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import StarProgressBar from '../../components/StarProgressBar';
import ResultCard from '../../components/ResultCard';
import SurveyDialog from '../../components/SurveyDiaglog';
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';

const styles = {
  content: {
    width: '80vw',
    minWidth: '320px',
    margin: 'auto',
    borderSpacing: 'auto',
    padding: '4vw'
  },
  nextButton: {
    alignItems: 'flex-start',
    justify: 'flex-end',
    direction: 'row'
  }
}


class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSurveyDialogOpen: false };
    this.onOpenSurvey = this.onOpenSurvey.bind(this);
    this.onClickDownload = this.onClickDownload.bind(this);
  }

  onOpenSurvey() {
    this.setState({ isSurveyDialogOpen: true });
  }

  onClickDownload() {
    const input = document.getElementById('resultBox');
    const pdf = new jsPDF();
    if (pdf) {
      domtoimage.toPng(input)
        .then(imgData => {
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.setPage(3);
          pdf.save('download.pdf');
        });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Paper className={classes.content} elevation={3}>
          <Box>
            <Typography variant="h4" >
              Result
            </Typography>
          </Box>
          <br />
          <Box id="resultBox">
            <ResultCard
              fitCategory="Best Fit"
              score="91"
              field="culinary"
            />
            <br />
            <ResultCard
              fitCategory="Very Good Fit"
              score="84"
              field='engineering'
            />
            <br />
            <ResultCard
              fitCategory="Good Fit"
              score="76"
              field='education'
            />
            <br />
          </Box>
          <br />
          <Grid container className={classes.nextButton} justify='flex-end' spacing={3}>
            <Grid item>
              <Button variant="contained" color="primary">
                {"Download  "}
                <CloudDownloadIcon style={{paddingLeft: 4}} />
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={this.onOpenSurvey}>Finish</Button>
            </Grid>
          </Grid>
          <SurveyDialog link="/jabc/career/end" open={this.state.isSurveyDialogOpen} />
        </Paper>
        <StarProgressBar currStars={4} maxStars={5} />


      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ResultPage);

