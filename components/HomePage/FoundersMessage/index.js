import styles from "../homePage.module.css";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

function index() {
  return (
    <Grid container sx={{ width: "90%", margin: "30px auto 0px auto" }}>
      <Grid item xs={12} md={2}></Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            className={styles.title}
            sx={{ color: "#1c1c84" }}
          >
            FOUNDER’S MESSAGE
          </Typography>
          <Typography variant="body1" gutterBottom>
            Hello! I am Dr. Vinnit Singh, a study abroad consultant working
            since 2009. I am specialized in MBBS Admission Abroad and guided
            several students regarding the best selection of university, course
            as well as the country. I have traveled to various universities and
            countries such as the Russia, Ukraine, Philippines, Armenia, Belize,
            France, and Kazakhstan for our MBBS students.
          </Typography>
          <Typography variant="body1" gutterBottom>
            My main objective is to provide transparency in the MBBS abroad
            admission process and information. I want to make New-Lyf the most
            trusted MBBS abroad consultancy for Indian students. Feel free to
            contact me at our helpline numbers, chat support or drop a mail at{" "}
            <Link href="mailto:info@mbbsadmissionsinabroad.com">
              <a>info@mbbsadmissionsinabroad.com</a>
            </Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Apply today for Free Counseling and Start your Journey with us!!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={2}></Grid>
    </Grid>
  );
}

export default index;
