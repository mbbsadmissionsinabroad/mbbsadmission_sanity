import {useState, forwardRef} from "react";
import {
	Button,
	Dialog,
	Slide,
	DialogTitle,
	Box,
	Divider,
	Grid,
	TextField,
	FormControl,
	Select,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Typography,
	Snackbar,
	Autocomplete,
	Checkbox,
	Stack,
} from "@mui/material";
import {CloseCircleOutline} from "mdi-material-ui";
import styles from "./modal.module.css";
import CountryList from "./countriesAndStates.json";
import Link from "next/link";
import MuiPhoneNumber from 'material-ui-phone-number';

const accessKey = process.env.NEXT_PUBLIC_LEAD_ACCESS_ID;
const secretKey = process.env.NEXT_PUBLIC_LEAD_SECRET_KEY;

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function index({collegeList, title, btnText}) {
	const [open, setOpen] = useState(false);
	const [state, setState] = useState({
		name: "",
		email: "",
		num: "",
		country: "",
		message: "",
	});
	const [list, setList] = useState({});
	const [college, setCollege] = useState([]);
	const [actionBusy, setActionBusy] = useState(false);
	const [snackBar, setSnackBar] = useState(false);

	const [stateList, setStateList] = useState([]);

	const [residentCountry, setResidentCountry] = useState("");
	const [residentState, setResidentState] = useState("");
	const [pPolicy, setPpolicy] = useState(true);

	const {name, email, num, country} = state;

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleFields = (e) => {
		if(typeof e === 'string') {
			setState({
				...state,
				num: e,
			});
		} else {
			setState({
				...state,
				[e.target.name]: e.target.value,
			});
		}
		if(typeof e !== 'string') {
			if (e.target.name == "country") {
				if (collegeList !== undefined) {
					let filterCollege = collegeList.find((item) => item.title == e.target.value);
					setList(filterCollege);
				}
			}
		}
	};

	const handleCollege = (e) => {
		const {value} = e.target;
		setCollege(typeof value === "string" ? value.split(",") : value);
	};

	const handleResidentCountry = (value) => {
		setResidentCountry(value);
		setStateList([]);
		const filteredStates = CountryList.find((item) => item.country == value);
		const getStates = filteredStates?.states;
		setStateList(getStates);
	};

	const handleSubmit = (e) => {
		setActionBusy(true);
		e.preventDefault();
		const data = [
			{
				Attribute: "FirstName",
				Value: name.toString(),
			},
			{
				Attribute: "EmailAddress",
				Value: email.toString(),
			},
			{
				Attribute: "Phone",
				Value: num.toString(),
			},
			{
				Attribute: "mx_Course_Interested",
				Value: country.toString(),
			},
			{
				Attribute: "mx_Country_Interested",
				Value: college.toString(),
			},
			{
				Attribute: "mx_Country",
				Value: residentCountry.toString(),
			},
			{
				Attribute: "mx_States",
				Value: residentState.toString(),
			},
		];

		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};

		fetch(
			"https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=" +
				accessKey +
				"&secretKey=" +
				secretKey,
			requestOptions
		)
			.then((res) => res.json())
			.then((data) => {
				setActionBusy(false);
				setSnackBar(true);
			})
			.catch((err) => {
				console.log(err);
				setActionBusy(false);
			});
	};

	const closeSnackBar = () => {
		setSnackBar(false);
	};

	const handlePpolicy = () => {
		setPpolicy(prev => !prev);
	}

	return (
		<div>
			<Button variant="contained" sx={{color: "#fff", mb: 1.5}} onClick={handleClickOpen}>
				{btnText}
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				fullWidth={true}
				maxWidth="md"
			>
				<Box display="flex" alignItems="center" justifyContent="space-between">
					<DialogTitle>{title}</DialogTitle>
					<CloseCircleOutline onClick={handleClose} sx={{mr: 1.2, cursor: "pointer"}} />
				</Box>
				<Divider />
				<Box className={styles.container}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<form onSubmit={handleSubmit}>
								<TextField
									variant="outlined"
									value={name}
									label="Name"
									name="name"
									fullWidth
									onChange={handleFields}
									required
									sx={{mb: 2}}
								/>
								<TextField
									variant="outlined"
									value={email}
									label="Email"
									name="email"
									fullWidth
									onChange={handleFields}
									required
									sx={{mb: 2}}
								/>
								<MuiPhoneNumber defaultCountry={'in'} fullWidth required variant="outlined" value={num} name="num" onChange={handleFields} sx={{mb: 2}}/>
								<FormControl fullWidth sx={{mb: 2}} required>
									<InputLabel>Course / Job Interested</InputLabel>
									<Select
										value={country}
										label="Course / Job Interested"
										name="country"
										onChange={handleFields}
										required
									>
										{collegeList !== undefined &&
											collegeList.map((item, i) => (
												<MenuItem key={i} value={item.title}>
													{item.title}
												</MenuItem>
											))}
									</Select>
								</FormControl>
								<FormControl fullWidth sx={{mb: 2}} required>
									<InputLabel>Study / Job Country</InputLabel>
									<Select
										value={college}
										onChange={handleCollege}
										input={<OutlinedInput label="Study / Job Country" />}
										required
									>
										{"collegeList" in list &&
											list.collegeList.map((item, i) => (
												<MenuItem key={i} value={item.title}>
													{item.title}
												</MenuItem>
											))}
									</Select>
								</FormControl>

								<Autocomplete
									required
									sx={{mb: 2}}
									freeSolo
									value={residentCountry}
									options={CountryList.map((option) => option.country)}
									renderInput={(params) => <TextField {...params} label="Resident Country" />}
									onChange={(event, newValue) => {
										handleResidentCountry(newValue);
									}}
								/>

								<Autocomplete
									required
									sx={{mb: 2}}
									freeSolo
									value={residentState}
									options={stateList?.map((option) => option)}
									renderInput={(params) => <TextField {...params} label="State / Province" />}
									onChange={(event, newValue) => {
										setResidentState(newValue);
									}}
								/>

								<Stack direction="row" alignItems="center" gap={1} sx={{mb: 2}}>
									<Checkbox checked={pPolicy} onChange={handlePpolicy} />
									<Typography variant="h6">I Agree to the <Link href="/privacy-policy"><a target="_blank">Privacy Policy</a></Link></Typography>
								</Stack>
								<Button variant="contained" type="submit" sx={{color: "#fff", mb: 1}} disabled={actionBusy}>
									Submit
								</Button>
							</form>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{mb: 1.5}}>
								<Typography variant="h4" gutterBottom>
									Contact Us:
								</Typography>
								<a href="tel:8050575767" target="_blank">
									+91 (805) 057-5767
								</a>
							</Box>
							<Box sx={{mb: 1.5}}>
								<Typography variant="h4" gutterBottom>
									For Enquiry:
								</Typography>
								<a href="mailto:info@new-lyf.com" target="_blank">
									info@new-lyf.com
								</a>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Dialog>
			<Snackbar
				open={snackBar}
				anchorOrigin={{vertical: "top", horizontal: "right"}}
				autoHideDuration={5000}
				onClose={closeSnackBar}
				message="Your submission has been received"
			/>
		</div>
	);
}

export default index;
