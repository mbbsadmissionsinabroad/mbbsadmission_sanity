import styles from "../homePage.module.css";
import { Box, Grid, Typography } from "@mui/material";

function index({ title, desc }) {
  return (
    <Grid container sx={{ width: "90%", margin: "30px auto 0px auto" }}>
      <Grid item xs={12} md={2}></Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            className={styles.title}
            sx={{ color: "primary.main" }}
          >
            {title}
          </Typography>
          <div
            className={styles.faqPTag}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={2}></Grid>
    </Grid>
  );
}

export default index;
