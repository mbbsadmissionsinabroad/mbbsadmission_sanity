import styles from '../homePage.module.css'
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'
import { ChevronDownCircleOutline } from 'mdi-material-ui'

function index ({ title, data }) {
  return (
    <Grid container sx={{ width: '90%', margin: '30px auto 30px auto' }}>
      <Grid item xs={12} md={2}></Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant='h2'
            className={styles.title}
            sx={{ color: 'primary.main' }}
          >
            {title}
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          {data.map((item, i) => (
            <Accordion key={i} sx={{ background: 'rgba(0,0,0,.03)' }}>
              <AccordionSummary expandIcon={<ChevronDownCircleOutline />}>
                <Typography variant='h3' sx={{ fontSize: '18px' }}>
                  <b>{item.title}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ background: '#fff' }}>
                <div
                  className={styles.faqPTag}
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={2}></Grid>
    </Grid>
  )
}

export default index
