import { useState, forwardRef, useEffect } from 'react';
import { Button, Dialog, Slide, ListItemText, DialogTitle, Box, Divider, Grid, TextField, FormControl, Select, InputLabel, MenuItem, Checkbox, OutlinedInput, Typography, Snackbar } from '@mui/material';
import { CloseCircleOutline } from 'mdi-material-ui';
import styles from './modal.module.css'


const leadApiHost = process.env.NEXT_PUBLIC_LEAD_API_HOST;
const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function index({ collegeList, title, btnText }) {
	const [open, setOpen] = useState(false);
	const [state, setState] = useState({
		name: "",
		email: "",
		num: "",
		country: "",
		message: ""
	});
	const [list, setList] = useState({});
	const [college, setCollege] = useState([]);
	const [actionBusy, setActionBusy] = useState(false);
	const [snackBar, setSnackBar] = useState(false);

	const { name, email, num, country, message } = state;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

	const handleFields = (e) => {
		const { name, value } = e.target;
		setState({
      ...state,
      [name]: value,
    })
		if(name == "country") {
			if(collegeList !== undefined) {
				let filterCollege = collegeList.find((item) => item.title == value);
				setList(filterCollege)
			}
		}
	}

	const handleCollege = (e) => {
		const { value } = e.target;
    setCollege(typeof value === 'string' ? value.split(',') : value);
  };

	const handleSubmit = (e) => {
		setActionBusy(true)
		e.preventDefault();
		const data = [
			{
				"Attribute": "FirstName",
        "Value": name.toString()
			},
			{
				"Attribute": "EmailAddress",
        "Value": email.toString()
			},
			{
				"Attribute": "Mobile",
        "Value": num.toString()
			},
			{
				"Attribute": "mx_Country",
        "Value": country.toString()
			},
			{
				"Attribute": "mx_Selected_College",
        "Value": college.toString()
			},
			{
				"Attribute": "mx_Student_Message",
        "Value": message.toString()
			}
		]

		const requestOptions = {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		};


		fetch('https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u$rfcceb09cec1f247d7d3084ef759a741b&secretKey=e9d8107992684560dcec1feae63458503b976890', requestOptions)
		.then((res) => res.json())
		.then((data) => {
			console.log(data)
			setActionBusy(false);
			setSnackBar(true);
		})
		.catch((err) => {
			console.log(err);
			setActionBusy(false)
		});
	}

	const closeSnackBar = () => {
		setSnackBar(false);
	}

	return (
		<div>
			<Button variant="contained" sx={{ color: '#fff', mb: 1.5 }} onClick={handleClickOpen}>
				{btnText}
			</Button>
			<Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} fullWidth={true} maxWidth="md">
				<Box display="flex" alignItems="center" justifyContent="space-between">
					<DialogTitle>{title}</DialogTitle>
					<CloseCircleOutline onClick={handleClose} sx={{ mr: 1.2, cursor: 'pointer' }} />
				</Box>
				<Divider />
				<Box className={styles.container}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<form onSubmit={handleSubmit}>
								<TextField variant="outlined" value={name} label="Name" name="name" fullWidth onChange={handleFields} required sx={{ mb: 2 }} />
								<TextField variant="outlined" value={email} label="Email" name="email" fullWidth onChange={handleFields} required sx={{ mb: 2 }} />
								<TextField variant="outlined" value={num} label="Phone No" name="num" fullWidth onChange={handleFields} required sx={{ mb: 2 }} />
								<FormControl fullWidth sx={{ mb: 2 }}>
									<InputLabel>Country</InputLabel>
									<Select
										value={country}
										label="Select Country"
										name="country"
										onChange={handleFields}
									>
										{
											collegeList !== undefined && collegeList.map((item, i) => <MenuItem key={i} value={item.title}>{item.title}</MenuItem>)
										}
									</Select>
								</FormControl>
								<FormControl fullWidth sx={{ mb: 2 }}>
									<InputLabel>College</InputLabel>
										<Select
											multiple
											value={college}
											onChange={handleCollege}
											input={<OutlinedInput label="Select College" />}
											renderValue={(selected) => selected.join(', ')}
										>
										{"collegeList" in list && list.collegeList.map((item, i) => (
											<MenuItem key={i} value={item.title}>
												<Checkbox checked={college.indexOf(item.title) > -1} />
												<ListItemText primary={item.title} />
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<TextField variant="outlined" value={message} label="Message" name="message" fullWidth multiline rows={4} onChange={handleFields} sx={{ mb: 2 }} />
								<Button variant="contained" type='submit' sx={{ color: '#fff', mb: 1 }} disabled={actionBusy}>Submit</Button>
							</form>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ mb: 1.5 }}>
								<Typography variant="h4" gutterBottom>Contact Us:</Typography>
								<a href="tel:9341666667">+91 (934) 166-6667</a>
							</Box>
							<Box sx={{ mb: 1.5 }}>
								<Typography variant="h4" gutterBottom>For Enquiry:</Typography>
								<a href="mailto:info@mbbsadmissionsinabroad.com">info@mbbsadmissionsinabroad.com</a>
							</Box>
							<Box sx={{ mb: 1.5 }}>
								<Typography variant="h4" gutterBottom>Address:</Typography>
								<Typography variant="body1">404, 1st floor, 4th A Cross Rd, HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru - 560043</Typography>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Dialog>
			<Snackbar
        open={snackBar}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={5000}
        onClose={closeSnackBar}
        message="Your submission has been received"
      />
		</div>
	);
}

export default index;