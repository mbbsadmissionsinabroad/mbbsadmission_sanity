import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import styles from '../homePage.module.css';
import { Headset, LeadPencil, Airplane, Magnify } from 'mdi-material-ui';

const aboutList = [
	{
		icon: 'Headset',
		title: 'Counselling',
		desc: 'Reliable Counseling & Guidance to Select The Country And The University Is The Most Important Service Provided By New-Lyf'
	},
	{
		icon: 'LeadPencil',
		title: 'Guideness',
		desc: 'All Your Travel Requirements Such As Air Ticket, Visa, Airport Pick up And Drop To The Hostel Is Taken Care Of By New-Lyf'
	},
	{
		icon: 'Airplane',
		title: 'Travel',
		desc: 'All Your Travel Requirements Such As Air Ticket, Visa, Airport pick up And Drop To Hostel Is Taken Care Of By New-Lyf'
	},
	{
		icon: 'Magnify',
		title: 'Mission',
		desc: 'We Aim To Reach The Scope of International Education To All Aspiring Student Communities of India. We Vow To Motivate And Guide Candidates To Realize Their Dream.'
	}
]

const icons = { Headset, LeadPencil, Airplane, Magnify };

function index() {
	return (
		<div className={styles.aboutBg}>
			<Grid container sx={{ width: '95%', margin: '0 auto' }}>
				<Grid item xs={12} md={6}>
					<Box className={styles.aboutCard}>
						<Typography variant="h3" className={styles.aboutTitle} gutterBottom sx={{ textAlign: 'center' }}>Who Are We?</Typography>
						<Typography variant='body1'>With the core objective of rendering the best services and quality guidance to Indian students to fulfill their <Link href="/"><a>dream of studying MBBS abroad</a></Link>, we are engaged in providing the professional study abroad consulting services since 2009. We are the one-stop and most trusted <Link href="/"><a>MBBS study abroad consultant</a></Link> offering the complete admission support services round the clock. We have great experience in the education field and have a team of experts who help and guide Indian students to select the right course and country. You can always assure the highly satisfactory and professional services with us.</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box className={styles.aboutGrid}>
						{
							aboutList.map((item, i) => {
								let Icon = icons[item.icon];
								return (
									<Box key={i} className={styles.aboutCard}>
										<Icon sx={{ fontSize: '30px', margin: '0 auto' }} />
										<Typography variant="h3" className={styles.aboutTitle} sx={{ textAlign: 'center' }}>{item.title}</Typography>
										<Typography variant="body1">{item.desc}</Typography>
									</Box>
								)
							})
						}
					</Box>
				</Grid>
			</Grid>
		</div>
	)
}

export default index