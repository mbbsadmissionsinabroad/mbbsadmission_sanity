import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import {
  Stethoscope,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin
} from 'mdi-material-ui'

function Footer ({ footerData }) {
  const navItems = Object.keys(footerData).length > 0 && footerData.navItems
  return (
    <>
      <Box className='footer-container'>
        <div>
          <Typography
            variant='body1'
            color='white'
            gutterBottom
            sx={{ textAlign: 'center', fontSize: '20px' }}
          >
            Quick Links
          </Typography>
          <ul className='footer-li'>
            {navItems.length > 0 &&
              navItems.map((item, i) => (
                <li key={i} style={{ listStyleType: 'none', padding: '4px' }}>
                  <Link href={item.slug}>
                    <a
                      aria-label={item.title}
                      style={{
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Stethoscope sx={{ fontSize: '16px', mr: 2 }} />{' '}
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className='buttons-and-insta'>
          <Box>
            <Link href='/blog'>
              <button className='button-footer' text='BLOG'>
                BLOG
              </button>
              {/* <Typography variant="body1">Blog</Typography> */}
              {/* </a> */}
            </Link>
            <Link href='/gallery'>
              <a aria-label='GALLERY'>
                <button
                  className='button-footer'
                  sx={{ textAlign: 'center', fontSize: '20px' }}
                  text='GALLERY'
                >
                  GALLERY
                </button>
              </a>
            </Link>
            {/* <Typography variant="body1">Sitemap</Typography> */}
          </Box>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{ mt: 2.5, a: { color: '#fff !important' } }}
          >
            <a
              href='https://www.facebook.com/pg/mbbsadmissionsinabroad/'
              target='_blank'
              aria-label='facebook mbbsadmission'
            >
              <Facebook className='social-icon' />
            </a>
            <a
              href='https://twitter.com/_mbbsabroad'
              target='_blank'
              aria-label='twitter mbbsadmission'
            >
              <Twitter className='social-icon' />
            </a>
            <a
              href='https://www.instagram.com/mbbsadmissionsinabroad/'
              target='_blank'
              aria-label='instagram mbbsadmission'
            >
              <Instagram className='social-icon' />
            </a>
            <a
              href='https://www.youtube.com/channel/UCGdRZ74SghrH9K8BE5U0zVw'
              target='_blank'
              aria-label='youtube mbbsadmission'
            >
              <Youtube className='social-icon' />
            </a>
            <a
              href='http://www.linkedin.com/in/mona-kumari-8a53321aa'
              target='_blank'
              aria-label='linkedin mbbsadmission'
            >
              <Linkedin className='social-icon' />
            </a>
          </Box>
        </div>
      </Box>
      {/* <Box className="footer-subContainer" display="flex" alignItems="center" justifyContent="space-between">
				<Link href="/blog">
					<a>
						<Typography variant="body1">Blog</Typography>
					</a>
				</Link>
				<Link href="/gallery">
					<a>
						<Typography variant="body1">Gallery</Typography>
					</a>
				</Link>
				<Typography variant="body1">Sitemap</Typography>
			</Box> */}
    </>
  )
}

export default Footer
