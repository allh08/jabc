import React from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const FAQAccordian = (props) => {
  const { question, answer } = props;
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="textSecondary">
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default FAQAccordian;
