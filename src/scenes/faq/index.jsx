import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Questions Page' />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            What are two things you can never eat for breakfast?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lunch and Dinner</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            If it takes eight men ten hours to build a wall, how long would it
            take four men?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>No time, because the wall is already built</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Where Do Permanently Deleted Files Go In Computers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>I honestly have no idea...</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            What is my favourite food?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Fried chicken and... fried chicken.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Favourite childhood memory?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>F > Kerning PQ @@@@ @@@@ @@@@ @@@@</Typography>
          <img src='../../assets/kerningpq.jpeg' alt='kerningpq' />
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ
