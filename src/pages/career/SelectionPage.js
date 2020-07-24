import React from 'react';
import {
  Paper,
  Grid,
  withStyles,
  Typography,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Checkbox,
  FormControlLabel,
  Switch,
  Slider,
  Box
} from '@material-ui/core';

import StarProgressBar from '../../components/StarProgressBar';
import NextButton from '../../components/NextButton';
import SimpleTransferList from '../../components/SimpleTransferList';

const styles = {
  content: {
    width: '80vw',
    margin: 'auto',
    borderSpacing: 'auto',
    padding: '4vw'
  },
  radioGroup: {
    width: '80%',
    margin: '2%'
  }
}

const radioQuestions = [
  "I try out new activities.",
  "I consider other people’s feelings.",
  "I like to understand the underlying theory."
];

const switchQuestions = [
  "I enjoy meeting new people",
  "I like helping people",
  "I sometimes make mistakes",
  "I'm easily disappointed",
  "I enjoy repairing things"
]

const checkboxQuestions = [
  "I conceal my feelings.",
  "I am nervous before big events.",
  "I review work critically."
]


class SelectionPage extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Paper className={classes.content} elevation={3}>
          <Box>
            <Typography variant="h4" >
              Personalities
            </Typography>
          </Box>
          <br />
          <Box border={1} borderRadius="borderRadius">
            {switchQuestions.map((q, index) => (
              <FormControl className={classes.radioGroup} component="fieldset">
                <FormControlLabel
                  control={<Switch name={`swichquestion-${index}`} />}
                  label={q}
                />
              </FormControl>
            ))}
          </Box>
          <br />
          <Box border={1} borderRadius="borderRadius">
            {radioQuestions.map((q, index) => (
              <FormControl className={classes.radioGroup} component="fieldset">
                <FormLabel component="legend">
                  <Typography>
                    {q}
                  </Typography>
                </FormLabel>
                <RadioGroup aria-label={`radioquestion-${index}`} name={`radioquestion-${index}`} row={true} >
                  <FormControlLabel value="Strongly Agree" control={<Radio />} label="StronglyAgree" />
                  <FormControlLabel value="Agree" control={<Radio />} label="Agree" />
                  <FormControlLabel value="Neutral" control={<Radio />} label="Neutral" />
                  <FormControlLabel value="Disagree" control={<Radio />} label="Disagree" />
                  <FormControlLabel value="Strong Disagree" control={<Radio />} label="StronglyDisagree" />
                </RadioGroup>
              </FormControl>
            ))}
          </Box>
          <br />

          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Box border={1} borderRadius="borderRadius">
                {checkboxQuestions.map((q, index) => (
                  <FormControl className={classes.radioGroup} component="fieldset">
                    <FormControlLabel
                      control={<Checkbox name={`checboxquestion-${index}`} />}
                      label={q}
                    />
                  </FormControl>
                ))}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box border={1} borderRadius="borderRadius" style={{height: '100%'}}>
                {checkboxQuestions.map((q, index) => (
                  <FormControl className={classes.radioGroup} component="fieldset">
                    <FormLabel component="legend">
                      <Typography>
                        {q}
                      </Typography>
                    </FormLabel>

                    <Slider
                      defaultValue={3}
                      aria-labelledby="discrete-slider-small-steps"
                      step={1}
                      marks
                      min={0}
                      max={5}
                      valueLabelDisplay="auto"
                    />
                  </FormControl>
                ))}
              </Box>
            </Grid>
          </Grid>
          <br />
          <Box border={1} borderRadius="borderRadius">
            <SimpleTransferList />
          </Box>
          <br />
          <NextButton link="/jabc/career/chat" />
        </Paper>
        <StarProgressBar currStars={2} maxStars={5} />


      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SelectionPage);

