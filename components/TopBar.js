import { Box, Grid, Typography, Button } from "@mui/material"
import { Phone, MapMarker, Whatsapp } from 'mdi-material-ui';

function TopBar() {
	return (
		<div className="topBarBg">
			<Grid container alignItems="center">
				<Grid item xs={12}>
					<Box className="topBarContents">
						<Box display="flex" alignItems="center">
							<Phone />
							<a href="tel:9341666667"><Typography variant="body1" sx={{ fontWeight: 500 }}>+91 (934) 166-6667</Typography></a>
						</Box>
						<Box display="flex" alignItems="center">
							<Phone />
							<a href="tel:9343787475"><Typography variant="body1" sx={{ fontWeight: 500 }}>+91 (934) 378-7475</Typography></a>
						</Box>
						<Box display="flex" alignItems="center">
							<MapMarker />
							<Typography variant="body1" sx={{ fontWeight: 500 }}>404, 1st floor, 4th A Cross Rd, HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru - 560043</Typography>
						</Box>
						<Box display="flex" alignItems="center">
							<a href="https://api.whatsapp.com/send?phone=918147030030"><Button className="whatsappBtn" sx={{ background: '#003770', ".MuiButton-startIcon": {
								margin: '0px'
							} }} startIcon={<Whatsapp sx={{ color: "#fff", fontSize: '25px !important' }} />} /> </a>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	)
}

export default TopBar