import React from 'react';
import '../Questions/questions.css';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Questions : React.FC = () => {
    return(
        <div>
            <p className='faq'>FAQ</p>
             <Box sx={{ marginBottom: '7px', borderRadius: '50px'}}>
        <Accordion sx={{ backgroundColor: ' #11141A', color: 'white'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white'}}/>}>
            <Typography>What if I'm not available at the listed times?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={{ marginBottom: '7px' }}>
        <Accordion sx={{ backgroundColor: ' #11141A', color: 'white'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white'}}/>} >
            <Typography>What would a typical coaching session look like?</Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={{ marginBottom: '7px' }}>
        <Accordion sx={{ backgroundColor: ' #11141A', color: 'white'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white'}}/>}>
            <Typography>Can you help players that are new to the game?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={{ marginBottom: '7px' }}>
        <Accordion sx={{ backgroundColor: ' #11141A', color: 'white'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white'}}/>}>
            <Typography>Why should I choose you out of all the other coaches?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        <Accordion sx={{ backgroundColor: ' #11141A', color: 'white'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white'}}/>}>
            <Typography>What are some activities we can do to help me improve?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
    )
}

export default Questions