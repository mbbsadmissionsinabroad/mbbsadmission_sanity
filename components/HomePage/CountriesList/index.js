import styles from "../homePage.module.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const countriesList = [
  {
    img: "/assests/country-flag-2/Russia.png",
    title: "STUDY MBBS IN RUSSIA",
    alt: "russia-flag",
    slug: "mbbs-in-russia",
  },
  {
    img: "/assests/country-flag-2/Bosnia.png",
    title: "STUDY MBBS IN BOSNIA",
    alt: "bosnia-flag",
    slug: "mbbs-in-bosnia",
  },
  {
    img: "/assests/country-flag-2/Georgia.png",
    title: "STUDY MBBS IN GEORGIA",
    alt: "georgia-flag",
    slug: "mbbs-in-georgia",
  },
  {
    img: "/assests/country-flag-2/malaysia.png",
    title: "STUDY MBBS IN MALAYSIA",
    alt: "malasiya-flag",
    slug: "mbbs-admission-in-malaysia-for-indian-students",
  },
  {
    img: "/assests/country-flag-2/Kazakhstan.png",
    title: "STUDY MBBS IN KAZAKHSTAN",
    alt: "kyrgyzstan-flag",
    slug: "mbbs-in-kazakhstan",
  },
  {
    img: "/assests/country-flag-2/poland.png",
    title: "STUDY MBBS IN POLAND",
    alt: "poland-flag",
    slug: "mbbs-admission-in-poland-for-indian-students",
  },
  {
    img: "/assests/country-flag-2/Germany.png",
    title: "STUDY MBBS IN GERMANY",
    alt: "germany-flag",
    slug: "mbbs-admission-in-germany-for-indian-students",
  },
  {
    img: "/assests/country-flag/france-flag.png",
    title: "STUDY MBBS IN FRANCE",
    alt: "france-flag",
    slug: "mbbs-in-france",
  },
  {
    img: "/assests/country-flag/armenia-flag.png",
    title: "STUDY MBBS IN ARMENIA",
    alt: "armenia-flag",
    slug: "mbbs-in-armenia",
  },
  {
    img: "/assests/country-flag/kyrgyzstan-flag.png",
    alt: "kyrgyzstan-flag",
    title: "STUDY MBBS IN KYRGYZSTAN",
    slug: "mbbs-in-kyrgyzstan",
  },
];
function index() {
  return (
    <Grid container sx={{ width: "90%", margin: "30px auto 30px auto" }}>
      {/* <Grid item xs={12} md={2}></Grid>
      <Grid item xs={12} md={12}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            classNameName={styles.title}
            sx={{ color: "#1c1c84" }}
          >
            LIST OF COUNTRIES
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            {countriesList.map((item, i) => (
              <Grid
                item
                xs={12}
                md={3}
                key={i}
                sx={{ textAlign: "center", margin: "0 auto" }}
              >
                <Image
                  src={item.img}
                  height={100}
                  width={100}
                  className={styles.countryImg}
                  alt={item.alt}
                />
                <Typography variant="h3" className={styles.countryName}>
                  {item.title}
                </Typography>
                <Link href={item.slug}>
                  <a>
                    <Button
                      variant="contained"
                      sx={{ color: "#fff", fontWeight: 300, mb: 1.5 }}
                    >
                      Enquire Now
                    </Button>
                  </a>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={2}></Grid> */}

      <section className="text-gray-600 body-font">
        <div className="sm:px-12 px-2 py-8">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-5xl text-2xl font-bold title-font mb-2 text-blue-900">
                Most Popular Countries
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-900">
              Deciding where to pursue your MBBS degree is a crucial step in
              your medical education journey. Several countries have gained
              recognition for their high-quality medical education, affordable
              tuition fees, and favorable living conditions for international
              students. Let's delve into some of the most popular destinations
              for MBBS admission
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {countriesList.map((item, i) => (
              <div className="xl:w-1/4 md:w-1/2 p-4 ">
                <Link href={item.slug}>
                  <div className="bg-white p-2 rounded-lg border border-gray-300 cursor-pointer">
                    <Image
                      className="h-40 rounded w-full object-fill object-center mb-6"
                      src={item.img}
                      height={150}
                      width={300}
                      alt="content"
                    />
                    <h2 className="text-md text-gray-900 font-small title-font mb-4 text-center p-4">
                      {item.title}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Grid>
  );
}

export default index;
