import styles from "../homePage.module.css";
import { Box, Grid, Typography } from "@mui/material";
import { ChevronRightCircle } from "mdi-material-ui";

const data = [
  {
    title: "Admission in the top-ranked Universities/Colleges:",
    desc: "We assist you to obtain a seat in the top universities for studying medicine in the Philippines, Armenia, Belize, France, Kazakhstan, and many more.",
  },
  {
    title: "",
    desc: "Pursue MBBS in abroad with best MCI approved medical universities with very reasonable tuition fees structure and the expense of living is also low.",
  },
  {
    title: "Top MCI & WHO approved medical universities:",
    desc: "Most of the medical universities are MCI and WHO accredited. The student will be eligible to practice in India or any other country after completing the MBBS course from abroad.",
  },
];

const data2 = [
  {
    title: "No entrance test:",
    desc: "There is no requirement of the entrance exam to take admission in the MBBS course abroad. Indian students only require fulfilling the eligibility criteria to study in abroad.",
  },
  {
    title: "No Donation:",
    desc: "There is no donation and capitation fee for pursuing MBBS in abroad.",
  },
  {
    title: "The medium of teaching is English:",
    desc: "The whole course of MBBS is conducted in English in spite of having their own official language. It is not mandatory for Indian students to learn the local language for classroom learning.",
  },
];
function index() {
  return (
    <Grid container sx={{ width: "90%", margin: "0 auto" }}>
      <Grid item xs={12} md={2}></Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            className={styles.title}
            sx={{ color: "#1c1c84" }}
          >
            WHY STUDY MBBS IN ABROAD?
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {data.map((item, i) => (
              <Typography variant="body1" sx={{ mb: 2.2 }} key={i}>
                <span>
                  {" "}
                  <ChevronRightCircle sx={{ fontSize: "14px" }} />{" "}
                  <b>{item.title}</b>
                </span>{" "}
                {item.desc}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            {data2.map((item, i) => (
              <Typography variant="body1" sx={{ mb: 2.2 }} key={i}>
                <span>
                  {" "}
                  <ChevronRightCircle sx={{ fontSize: "14px" }} />{" "}
                  <b>{item.title}</b>
                </span>{" "}
                {item.desc}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={2}></Grid>
    </Grid>
  );
}

export default index;
