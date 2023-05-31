import React from 'react';
import '../Keep-in-mind/KeepInMind.css';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const KeepInMind : React.FC = () => {
    return(
        <div>
            <p className='k-i-m'>Things to keep in mind</p>
             <Box sx={{ marginBottom: '7px', borderRadius: '50px'}}>
        <Accordion sx={{ backgroundColor: ' #11141A', color: 'white'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white'}}/>}>
            <Typography>Payment Policy</Typography>
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
            <Typography>Cancellation Policy</Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        <Accordion sx={{ backgroundColor: ' #11141A', color: 'white'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white'}}/>}>
            <Typography>Refund Policy</Typography>
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

export default KeepInMind