import styles from "../homePage.module.css";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import CarouselController from "../../CarouselController";
import { urlFor } from "../../../lib/client";
import Image from "next/image";

function index(props) {
  const { testimonials } = props;
  const data = typeof testimonials === "object" && testimonials.review;
  const responsive = {
    0: 1,
    960: 2,
  };

  if (typeof data !== "object") return <CircularProgress />;
  return (
    <Box sx={{ margin: "30px auto 0px auto" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          className={styles.title}
          id="testimonials"
          sx={{ color: "#1c1c84" }}
        >
          Testimonials
        </Typography>
      </Box>
      <CarouselController show={responsive} infiniteLoop>
        {data.map((item, i) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "10px",
            }}
            key={i}
          >
            <Image
              src={urlFor(item.studentImage).url()}
              className={styles.studentImage}
              height={150}
              width={150}
              alt={item.metaTitle}
            />
            <Typography variant="body1" sx={{ fontSize: "18px" }}>
              {item.studentName}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "primary.blue", fontSize: "14px" }}
            >
              {item.collegeName}, {item.country}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontSize: "15px", padding: "10px" }}
            >
              {item.studentTestimonial}
            </Typography>
          </Box>
        ))}
      </CarouselController>
    </Box>
  );
}

export default index;
