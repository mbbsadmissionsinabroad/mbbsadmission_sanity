import { useState, forwardRef, useEffect } from "react";
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
import { CloseCircleOutline } from "mdi-material-ui";
import styles from "./modal.module.css";
import CountryList from "./countriesAndStates.json";
import Link from "next/link";
import MuiPhoneNumber from "material-ui-phone-number";
import {
  formatPhoneNumberIntl,
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";

const URL = process.env.NEXT_PUBLIC_LEAD_URL;
const accessToken = process.env.NEXT_PUBLIC_LEAD_SECRET_KEY;

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function index({
  collegeList,
  title,
  btnText,
  isHomePage = false,
  showPopup = false,
  setShowPopup = false,
}) {
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
  const [phoneErr, setPhoneErr] = useState({
    err: false,
    message: "Tap the Flag Icon to Change Country Code",
  });
  const [success, setSuccess] = useState(false);

  const { name, email, num, country } = state;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    isHomePage === true ? setShowPopup(false) : null;
  };

  useEffect(() => {
    if (!isValidPhoneNumber(num) || !isPossiblePhoneNumber(num)) {
      setPhoneErr({ err: true, message: "Please Enter Valid Phone Number" });
    } else {
      setPhoneErr({ err: false, message: "" });
    }
  }, [num]);

  const handleFields = (e) => {
    if (typeof e === "string") {
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
    if (typeof e !== "string") {
      if (e.target.name == "country") {
        if (collegeList !== undefined) {
          let filterCollege = collegeList.find(
            (item) => item.title == e.target.value
          );
          setList(filterCollege);
        }
      }
    }
  };

  const handleCollege = (e) => {
    const { value } = e.target;
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
    let convertedNum = formatPhoneNumberIntl(num).replace(/\s+/g, "-");
    e.preventDefault();
    if (isValidPhoneNumber(num) || isPossiblePhoneNumber(num)) {
      if (num.length > 1) {
        setActionBusy(true);
        const data2 = {
          fields: {
            Name: name.toString(),
            Phone: convertedNum,
            Email: email.toString(),
            Course: country.toString(),
            CountryIntreasted: college.toString(),
            ResidentCountry: residentCountry.toString(),
            ResidentState: residentState.toString(),
          },
          actions: [
            {
              type: "SYSTEM_NOTE",
              text: "Lead Source: Contact Page",
            },
          ],
        };
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(data2),
        };

        fetch(URL, requestOptions)
          .then((data) => {
            setSuccess(true);
            setActionBusy(false);
            setSnackBar(true);
            setTimeout(() => {
              setOpen(false);
              localStorage.setItem("isFormFilled", "true");
              isHomePage === true ? setShowPopup(false) : null;
            }, 3000);
          })
          .catch((err) => {
            setSuccess(false);
            console.log(err);
            setActionBusy(false);
            setTimeout(() => {
              setOpen(false);
              isHomePage === true ? setShowPopup(false) : null;
            }, 3000);
          });
      } else {
        setPhoneErr({ err: true, message: "Please Enter your Phone Number" });
      }
    } else {
      setPhoneErr({ err: true, message: "Please Enter Valid Phone Number" });
    }
  };

  const closeSnackBar = () => {
    setSnackBar(false);
  };

  const handlePpolicy = () => {
    setPpolicy((prev) => !prev);
  };

  return (
    <div>
      {isHomePage !== true ? (
        <Button
          variant="contained"
          sx={{ color: "#fff", mb: 1.5 }}
          onClick={handleClickOpen}
        >
          {btnText}
        </Button>
      ) : null}

      <Dialog
        open={open || showPopup}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth={true}
        maxWidth="md"
        id="mbbs-admission"
        title="admission"
        aria-label="admission"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <DialogTitle>{title}</DialogTitle>
          <CloseCircleOutline
            onClick={handleClose}
            sx={{ mr: 1.2, cursor: "pointer" }}
          />
        </Box>
        <Divider />
        <Box className={styles.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <form onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  role="dialog"
                  value={name}
                  label="Name"
                  aria-label="Entered Name"
                  name="name"
                  fullWidth
                  onChange={handleFields}
                  required
                  sx={{ mb: 2 }}
                />
                <MuiPhoneNumber
                  defaultCountry={"in"}
                  fullWidth
                  required
                  role="dialog"
                  aria-label="phone num entered"
                  variant="outlined"
                  value={num}
                  name="num"
                  type="tel"
                  onChange={handleFields}
                  sx={{ mb: 2 }}
                  error={phoneErr.err}
                  helperText={phoneErr.message}
                />
                <TextField
                  variant="outlined"
                  value={email}
                  role="dialog"
                  aria-label="Entered Email"
                  label="Email"
                  name="email"
                  fullWidth
                  onChange={handleFields}
                  // required
                  sx={{ mb: 2 }}
                />

                {isHomePage === false ? (
                  <>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <InputLabel>Course / Job Interested</InputLabel>
                      <Select
                        value={country}
                        role="dialog"
                        label="Course / Job Interested"
                        name="country"
                        aira-label="Entered country"
                        onChange={handleFields}
                        // required
                      >
                        {collegeList !== undefined &&
                          collegeList.map((item, i) => (
                            <MenuItem key={i} value={item.title}>
                              {item.title}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <InputLabel
                        role="dialog"
                        aria-label="Study / Job Country"
                      >
                        Study / Job Country
                      </InputLabel>
                      <Select
                        value={college}
                        onChange={handleCollege}
                        input={<OutlinedInput label="Study / Job Country" />}
                        // required
                      >
                        {"collegeList" in list &&
                          list.collegeList.map((item, i) => (
                            <MenuItem
                              key={i}
                              value={item.title}
                              aria-label={item.title}
                            >
                              {item.title}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                    <Autocomplete
                      // required
                      sx={{ mb: 2 }}
                      freeSolo
                      value={residentCountry}
                      options={CountryList.map((option) => option.country)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          // required
                          label="Resident Country"
                          role="dialog"
                          aria-label="Resident Country"
                        />
                      )}
                      onChange={(event, newValue) => {
                        handleResidentCountry(newValue);
                      }}
                    />

                    <Autocomplete
                      // required
                      sx={{ mb: 2 }}
                      freeSolo
                      value={residentState}
                      role="dialog"
                      aria-label="State / Province"
                      options={stateList?.map((option) => option)}
                      renderInput={(params) => (
                        <TextField {...params} label="State / Province" />
                      )}
                      onChange={(event, newValue) => {
                        setResidentState(newValue);
                      }}
                    />
                  </>
                ) : null}

                <Stack
                  direction="row"
                  alignItems="center"
                  gap={1}
                  sx={{ mb: 2 }}
                >
                  <Checkbox
                    checked={pPolicy}
                    onChange={handlePpolicy}
                    name="agree"
                    role="dialog"
                    aria-label="agree"
                    id="agree"
                  />
                  <Typography variant="h6">
                    I Agree to the{" "}
                    <Link href="/privacy-policy">
                      <a target="_blank">Privacy Policy</a>
                    </Link>
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  type="submit"
                  name="submit form"
                  sx={{ color: "#fff", mb: 1 }}
                  disabled={actionBusy}
                >
                  Enquire Now
                </Button>
                {success && (
                  <Typography variant="h4">
                    Your submission has been received
                  </Typography>
                )}
              </form>
            </Grid>
            {/* <Grid item xs={12} md={6}>
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
						</Grid> */}
          </Grid>
        </Box>
      </Dialog>
      <Snackbar
        open={snackBar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={5000}
        onClose={closeSnackBar}
        message="Your submission has been received"
      />
    </div>
  );
}

export default index;
