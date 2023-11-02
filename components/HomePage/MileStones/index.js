import { Box, Grid, Typography } from "@mui/material";
import styles from "../homePage.module.css";
import { Earth, AccountSchool, Handshake, AccountGroup } from "mdi-material-ui";

const data = [
  {
    icon: "Earth",
    title: "13 Countries",
    desc: "Medical Program At The Cost Of Private Medical College",
  },
  {
    icon: "AccountSchool",
    title: "5000+",
    desc: "Students Already Enrolled Through Us",
  },
  {
    icon: "Handshake",
    title: "250+",
    desc: "Universities Authorized Partners",
  },
  {
    icon: "AccountGroup",
    title: "15+",
    desc: "Years of Experience In Guiding & Assisting Students",
  },
];

const icons = { Earth, AccountSchool, Handshake, AccountGroup };

function index() {
  return (
    <div className={styles.mileStonesBg}>
      <Box sx={{ width: "95%", margin: "0 auto" }}>
        <Grid container spacing={2}>
          {data.map((item, i) => {
            let Icon = icons[item.icon];
            return (
              <Grid item xs={12} md={3} sx={{ textAlign: "center" }} key={i}>
                <Icon sx={{ color: "#fff", fontSize: "30px", mb: 1.5 }} />
                <Typography
                  variant="h3"
                  sx={{ pb: 1.5 }}
                  className={styles.mileStonesTitle}
                >
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  {item.desc}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default index;
