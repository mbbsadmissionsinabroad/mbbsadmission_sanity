import styles from "../homePage.module.css";
import {Box, Button, Grid, Typography} from "@mui/material";
import Link from "next/link";

const countriesList = [
	{
		img: '/assests/country-flag/russia-flag.jpg',
		title: "STUDY MBBS IN RUSSIA",
		slug: 'mbbs-in-russia'
	},
	{
		img: '/assests/country-flag/ukraine-flag.png',
		title: "STUDY MBBS IN UKRAINE",
		slug: 'mbbs-in-ukraine'
	},
	{
		img: '/assests/country-flag/georgia-flag.png',
		title: "STUDY MBBS IN GEORGIA",
		slug: 'mbbs-in-georgia'
	},
	{
		img: '/assests/country-flag/armenia-flag.png',
		title: "STUDY MBBS IN ARMENIA",
		slug: 'mbbs-in-armenia'
	},
	{
		img: '/assests/country-flag/kazakhstan-flag.png',
		title: "STUDY MBBS IN KAZAKHSTAN",
		slug: 'mbbs-in-kazakhstan'
	},
	{
		img: '/assests/country-flag/philippines-flag.png',
		title: "STUDY MBBS IN PHILIPPINES",
		slug: 'mbbs-in-philippines'
	},
	{
		img: '/assests/country-flag/belize-flag.png',
		title: "STUDY MBBS IN BELIZE",
		slug: 'mbbs-in-belize'
	},	
	{
		img: '/assests/country-flag/france-flag.png',
		title: "STUDY MBBS IN FRANCE",
		slug: 'mbbs-in-france'
	},
	{
		img: '/assests/country-flag/kyrgyzstan-flag.png',
		title: "STUDY MBBS IN KYRGYZSTAN",
		slug: 'mbbs-in-kyrgyzstan'
	},
]
function index() {
	return (
		<Grid container sx={{width: "90%", margin: "30px auto 30px auto"}}>
			{/* <Grid item xs={12} md={2}></Grid> */}
			<Grid item xs={12} md={12}>
				<Box sx={{textAlign: "center"}}>
					<Typography variant="h2" className={styles.title} sx={{color: "primary.main"}}>
						LIST OF COUNTRIES
					</Typography>
				</Box>
				<Box sx={{mt: 2}}>
					<Grid container spacing={2}>
						{
							countriesList.map((item, i) =>(
								<Grid item xs={12} md={3} key={i} sx={{ textAlign: 'center', margin: '0 auto' }}>
									<img src={item.img} className={styles.countryImg} />
									<Typography variant="h6" className={styles.countryName}>{item.title}</Typography>
									<Link href={item.slug}>
										<a>
											<Button variant="contained" sx={{ color: "#fff", fontWeight: 300, mb: 1.5 }}>Enquire Now</Button>
										</a>
									</Link>
								</Grid>
							))
						}
					</Grid>
				</Box>
			</Grid>
			<Grid item xs={12} md={2}></Grid>
		</Grid>
	)
}

export default index