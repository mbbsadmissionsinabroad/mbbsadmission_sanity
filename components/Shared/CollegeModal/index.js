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

const accessKey = process.env.NEXT_PUBLIC_LEAD_ACCESS_ID;
const secretKey = process.env.NEXT_PUBLIC_LEAD_SECRET_KEY;

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

  const courseNames = ["MBBS", "PG", "Nursing", "Ausbildung"];

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
            Value: convertedNum,
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
            Attribute: "Course",
            Value: "",
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

        fetch("https://admission-backend.vercel.app/send-email", requestOptions)
          .then((res) => res.json())
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
        maxWidth="lg"
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
          <section className="text-gray-600 body-font">
            <div className="mx-auto flex  py-10 md:flex-row flex-col">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
                  Announcing the Vaidya Vigyan Scholarship by New-lyf
                </h1>
                {/* <p className="mb-8 leading-relaxed"> */}
                <ul className="list-none">
                  <li className="my-4 text-black font-sans">
                    Exciting News for aspiring medical students! New-lyf
                    presents the Vaidya Vigyan Scholarship, up to{" "}
                    <span className="font-semibold text-red-600">
                      10 LAC INR*
                    </span>
                  </li>
                  <li className="my-4 text-black">
                    Don't let financial constraints hold you back from pursuing
                    your passion for medicine.
                  </li>
                  <li className="my-4 text-xl text-red-500 font-semibold">
                    Apply now and make your dreams a reality!
                  </li>
                </ul>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
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
                  {/* <TextField
                    variant="outlined"
                    value={email}
                    role="dialog"
                    aria-label="Entered Email"
                    label="Email"
                    name="email"
                    fullWidth
                    onChange={handleFields}
                    required
                    sx={{ mb: 2 }}
                  /> */}
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
                  <>
                    <FormControl fullWidth sx={{ mb: 2 }} required>
                      <InputLabel>Select Your Preferred Course</InputLabel>
                      <Select
                        value={country}
                        role="dialog"
                        label="Select Your Preferred Course"
                        name="country"
                        aira-label="Entered country"
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
                    {/* <FormControl fullWidth sx={{ mb: 2 }} required>
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
                        required
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
                    </FormControl> */}
                  </>
                  {/* <Autocomplete
                    required
                    sx={{ mb: 2 }}
                    freeSolo
                    value={residentCountry}
                    options={CountryList.map((option) => option.country)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        required
                        label="Resident Country"
                        role="dialog"
                        aria-label="Resident Country"
                      />
                    )}
                    onChange={(event, newValue) => {
                      handleResidentCountry(newValue);
                    }}
                  /> */}
                  {/* / */}
                  {/* // ) : (
                  //   <Autocomplete
                  //     required
                  //     sx={{ mb: 2 }}
                  //     freeSolo
                  //     value={residentState}
                  //     role="dialog"
                  //     aria-label="State / Province"
                  //     options={stateList?.map((option) => option)}
                  //     renderInput={(params) => (
                  //       <TextField
                  //         {...params}
                  //         required
                  //         label="State / Province"
                  //       />
                  //     )}
                  //     onChange={(event, newValue) => {
                  //       setResidentState(newValue);
                  //     }}
                  //   />
                  // )} */}
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
                    <h2 className="text-lg text-gray-700 title-font mb-2 font-bold">
                      Your submission has been received
                    </h2>
                  )}
                </form>
              </div>
            </div>
          </section>
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
