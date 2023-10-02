import styles from '../homePage.module.css'
import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'

function index () {
  return (
    <Grid container sx={{ width: '90%', margin: '30px auto 0px auto' }}>
      <Grid item xs={12} md={2}></Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant='h2'
            className={styles.title}
            sx={{ color: 'primary.main' }}
          >
            OUR SERVICES
          </Typography>
          <Typography variant='body1' sx={{ mb: 1.2 }}>
            {' '}
            We provide complete study abroad admission solution services to
            Indian students in seeking admission to the popular course MBBS. We
            render Indian students to the best when it comes to{' '}
            <Link href='/'>
              <a aria-label='MBBS Admission in Abroad'>
                {' '}
                MBBS admission in abroad{' '}
              </a>
            </Link>
            including MBBS in Philippines, Armenia, Belize, France, support
            services at an affordable consulting fee.
          </Typography>
          <Typography variant='body1'>
            We build careers with great opportunities, come and join us for a
            great future!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={2}></Grid>
    </Grid>
  )
}

export default index
