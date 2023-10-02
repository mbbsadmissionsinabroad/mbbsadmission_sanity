import { Box, Grid, Typography, Button } from '@mui/material'
import { Phone, EmailOutline, Whatsapp } from 'mdi-material-ui'

function TopBar () {
  return (
    <div className='topBarBg'>
      <Grid container alignItems='center'>
        <Grid item xs={12}>
          <Box>
            <Box sx={{ width: '90%' }} className='topBarContents'>
              <Box display='flex' alignItems='center'>
                <Phone sx={{ mr: 1 }} />
                <a href='tel:8050575767' target='_blank'>
                  <Typography variant='body1' sx={{ fontWeight: 500 }}>
                    +91 (805) 057-5767
                  </Typography>
                </a>
              </Box>
              <Box display='flex' alignItems='center'>
                <EmailOutline sx={{ mr: 1 }} />
                <a href='mailto:info@new-lyf.com' target='_blank'>
                  <Typography variant='body1' sx={{ fontWeight: 500 }}>
                    info@new-lyf.com
                  </Typography>
                </a>
              </Box>
              <Box display='flex' alignItems='center'>
                <a href='https://wa.me/+918050006077' target='_blank'>
                  <Button
                    className='whatsappBtn'
                    sx={{
                      background: '#003770',
                      '.MuiButton-startIcon': {
                        margin: '0px'
                      }
                    }}
                    startIcon={
                      <Whatsapp
                        sx={{ color: '#fff', fontSize: '25px !important' }}
                        alt='whatsapp'
                      />
                    }
                  />{' '}
                </a>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default TopBar
