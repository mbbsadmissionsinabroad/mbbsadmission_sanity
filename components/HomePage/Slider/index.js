import { useState, useEffect } from 'react'
import {
  ChevronRightCircleOutline,
  ChevronLeftCircleOutline
} from 'mdi-material-ui'
import { CircularProgress } from '@mui/material'
import { urlFor } from '../../../lib/client'
import Link from 'next/link'
import Image from 'next/image'

function Index (props) {
  const { sliderData } = props
  const data = typeof sliderData === 'object' && sliderData.slider

  const [current, setCurrent] = useState(0)
  const length = data.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  useEffect(() => {
    // Automatically move to the next slide every 3 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [current])

  if (!Array.isArray(data) || data.length <= 0) {
    return null
  }

  if (typeof data !== 'object') return <CircularProgress />
  else
    return (
      <section className='slider'>
        <ChevronLeftCircleOutline
          className='left-arrow'
          style={{ color: 'black' }}
          onClick={prevSlide}
        />
        <ChevronRightCircleOutline
          className='right-arrow'
          onClick={nextSlide}
          style={{ color: 'black' }}
        />
        {data.map((obj, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              <Link href={obj.buttonUrl} passHref>
                <a aria-label='Take admission in Abroad'>
                  {index === current && (
                    <div style={{ width: '100%' }}>
                      <Image
                        src={urlFor(obj.sliderImage).url()}
                        alt={obj.title !== '' ? obj.title : 'slider-image'}
                        height={1000}
                        width={2000}
                        className='image'
                        style={{
                          'min-height': '100%',
                          'background-size': 'cover'
                        }}
                      />
                    </div>
                  )}
                </a>
              </Link>
            </div>
          )
        })}
      </section>
    )
}

export default Index
