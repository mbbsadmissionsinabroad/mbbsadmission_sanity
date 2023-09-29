'use client'
import {
  Grid,
  Typography,
  Box,
  Tabs,
  Tab,
  CircularProgress
} from '@mui/material'
import { useEffect, useState } from 'react'
import styles from './contact.module.css'
import { Phone, EmailOutline } from 'mdi-material-ui'
import CollegeModal from '../../components/Shared/CollegeModal'
import Image from 'next/image'

const apiHost = process.env.NEXT_PUBLIC_API_HOST
function index ({ collegeList }) {
  const [data, setData] = useState()
  const [value, setValue] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    setIsFetching(true)
    let query = encodeURIComponent(`*[ _type == "contactPage"]`)
    fetch(apiHost + query)
      .then(res => res.json())
      .then(data => setData(data.result))
      .then(() => setIsFetching(false))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (data !== undefined && data.length > 1) {
        let branchName = data[data.length - 1].branchName
        setValue(branchName)
      }
    }, 1500)
  }, [data])

  if (isFetching) return <CircularProgress />
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} className='globalTitleBg'>
          <Typography variant='h1' sx={{ textAlign: 'center' }}>
            Contact
          </Typography>
        </Grid>
      </Grid>
      <Box className={styles.mainContainer} sx={{ padding: '2em 0 2em 0' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant='h2' className={styles.title}>
              OUR BRANCH LOCATIONS
            </Typography>
            <Image src='/assests/india-map.png' style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h2' className={styles.title}>
              OUR BRANCH OFFICES
            </Typography>
            {value && (
              <>
                <Tabs
                  value={value}
                  indicatorColor={''}
                  onChange={handleChange}
                  sx={{
                    '& .MuiTabs-flexContainer': {
                      overflowX: 'scroll',
                      '& > -webkit-scrollbar': {
                        display: 'none'
                      }
                    }
                  }}
                  className={styles.tabsContainer}
                >
                  {data !== undefined &&
                    data
                      .slice(0)
                      .reverse()
                      .map((item, i) => (
                        <Tab
                          value={item.branchName}
                          label={item.branchName}
                          className={
                            value === item.branchName
                              ? styles.selectedTab
                              : styles.defaultTab
                          }
                          key={i}
                        />
                      ))}
                </Tabs>
                <Box sx={{ mt: 1 }}>
                  {data !== undefined &&
                    data
                      .slice(0)
                      .reverse()
                      .map(
                        (item, i) =>
                          item.branchName === value && (
                            <Box key={i}>
                              <Box className={styles.container}>
                                <iframe
                                  src={item.branchLocation}
                                  className={styles.responsiveIframe}
                                ></iframe>
                              </Box>
                              <Typography
                                variant='body1'
                                sx={{ marginTop: '8px' }}
                              >
                                {item.branchAddress}
                              </Typography>
                              <Box display='flex' alignItems='center'>
                                {item.branchMobNo.map((item, i) => (
                                  <Box
                                    key={i}
                                    className={styles.mobNoContainer}
                                  >
                                    <Phone sx={{ fontSize: '18px', mr: 1 }} />
                                    <Typography
                                      variant='body1'
                                      sx={{ padding: '10px 30px 10px 0px' }}
                                    >
                                      <a
                                        href={`tel:${item.mobNum}`}
                                        target='_blank'
                                      >
                                        {item.mobNum}
                                      </a>
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          )
                      )}
                </Box>
              </>
            )}
            <Box className={styles.mobNoContainer}>
              <EmailOutline sx={{ fontSize: '18px', mr: 1 }} />
              <Typography
                variant='body1'
                sx={{ padding: '10px 30px 10px 0px' }}
              >
                <a href='mailto:info@new-lyf.com' target='_blank'>
                  info@new-lyf.com
                </a>
              </Typography>
            </Box>
            <CollegeModal
              collegeList={collegeList}
              title='Contact'
              btnText='Enquire Now'
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default index
