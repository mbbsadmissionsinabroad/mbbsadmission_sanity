import { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { urlFor } from '../lib/client'

const apiHost = process.env.NEXT_PUBLIC_API_HOST
function Gallery () {
  const [data, setData] = useState()

  useEffect(() => {
    let query = encodeURIComponent(`*[ _type == "galleryPage"]`)
    fetch(apiHost + query)
      .then(res => res.json())
      .then(data => setData(data.result[0]))
  }, [])

  const gallery = data !== undefined && data
  return (
    <div>
      <Grid container>
        <Grid item xs={12} className='globalTitleBg'>
          <Typography variant='h1' sx={{ textAlign: 'center' }}>
            {gallery.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2.5 }}>
        {gallery &&
          gallery.galleryImage.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <img
                src={urlFor(item.galleryImg)}
                alt='galleryItem'
                loading='lazy'
                style={{ width: '-webkit-fill-available' }}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default Gallery
