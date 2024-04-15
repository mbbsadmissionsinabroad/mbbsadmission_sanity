import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import About from "./About";
import OurServices from "./OurServices";
import MileStones from "./MileStones";
import StudyMbbsInAbroad from "./StudyMbbsInAbroad";
import CountriesList from "./CountriesList";
import FoundersMessage from "./FoundersMessage";
import Testimonials from "./Testimonials";
import StaticComponent from "./StaticComponent";
import Faq from "./Faq";
import TextSerializer from "../TextSerializer";
import styles from "./homePage.module.css";
import LookingForMBBS from "../LookingForMBBS";

const staticObj = {
  title: `${new Date().getFullYear()} - ${
    new Date().getFullYear() + 1
  } MBBS ADMISSION IN ABROAD`,
  desc: `<p>MBBS is an extremely valued course and degree across the globe and it is totally worth to <a href="mci-approved-medical-universities-in-abroad">study MBBS in abroad with top MCI approved medical universities/colleges</a> with a reasonable fee structure & without any donation and capitation fees for MBBS admission in different countries such as Russia, Ukraine, Belize, <a href="mbbs-in-philippines">Philippines</a>, and many more. Abroad universities/colleges provide a high quality of education. Every year, more than 20,000 Indian students are taking <a href="/">MBBS Admission in Abroad</a>.</p>`,
};
const staticObj2 = {
  title2: "MBBS ABROAD CONSULTANCY IN INDIA",
  desc2: `<p>New-Lyf is one of the <a href="/" aria-label="best MBBS Abroad Consultancy in India">best MBBS Abroad Consultancy in India</a> that offers professional consultancy services to aspiring students who wish to pursue a lucrative career in the field of medicine. Most of the students want to obtain an immensely valued MBBS degree from some of the top-class universities abroad. <br/> <br/> If you also wish to pursue an MBBS degree from some prestigious educational college/university abroad, contact the reliable <a href="/" aria-label="New-Lyf MBBS abroad consultants in India">New-Lyf MBBS abroad consultants in India</a>. We have a team of highly qualified and experienced MBBS consultants that aims at delivering the best results for your professional MBBS career. <br/> <br/> Our counselors have more than 10 years of experience in the given field that provide in-depth, accurate information that you require to know about MBBS abroad. We suggest the best-suited MBBS program for you on the basis of your personal academic & financial profile, future career plans, and so more.</p>`,
};
const { title, desc } = staticObj;
const { title2, desc2 } = staticObj2;

const howCanWeAssistYou = [
  {
    title: "Counseling Process",
    desc: `<p>We have a dedicated team of experts who provide quality guidance to students who want to fulfill their dream of pursuing MBBS in abroad. Students can book their appointment for the counseling process round the clock using our helpline numbers, chat support or over the email.</p>`,
  },
  {
    title: "Course and Country selection",
    desc: `<p>We have a highly experienced and professional team that assists you to select the best course in the popular university in the well-renowned country providing the best MBBS course. So, leave your worries about the selection process as we resolve your problem in minutes with proper counseling.</p>`,
  },
  {
    title: "Admission guidance & process",
    desc: `<p>The admission process can be tough for Indian students as they are not familiar with it. We make the admission process of MBBS abroad hassle-free by assisting you in preparing applications and documents that need to be submitted.</p>`,
  },
  {
    title: "Visa assistance",
    desc: `<p>A student visa is an essential part of taking admission in the MBBS course abroad. We assist students in preparing the required documents important for visa application and make students comply with the complete visa eligibility for 100% approvals.</p>`,
  },
  {
    title: "Travel and Forex assistance",
    desc: `<p>Safe and secure travel is the hearty wish of each student who travels abroad for the MBBS course. We help in booking air tickets for the selected destination and make students’ stay and travel easy. We also help with the travel and forex conversion without any additional price.</p>`,
  },
  {
    title: "Pre-Departure guidance",
    desc: `<p>Travel abroad for pursuing MBBS includes specific terms and conditions such as how much luggage allowed in flights, check-in, boarding terminal, safe & secure travel. Our experts assist you through the pre-departure procedures and give all the information to have a safe and cheerful journey.</p>`,
  },
];

const faq = [
  {
    title: "Is it a Good Option to Study MBBS in Abroad?",
    desc: `<p>MBBS in Abroad is a great option to Study MBBS because the fee structure of MCI approved universities is very affordable. Every year, more than 20,000 Indian students take admission in abroad to study MBBS.</p>`,
  },
  {
    title: "Studying MBBS in Abroad is too expensive?",
    desc: `<p>Studying MBBS in Abroad is affordable as compared to India. Many countries provide high-quality medical education at very reasonable fees.</p>`,
  },
  {
    title: "Are these Medical Universities/Colleges are approved by MCI?",
    desc: `<p>Yes, these Medical Universities/Colleges are approved by MCI. Indian students can study MBBS and come back to India after completing MBBS and will then get the license of Doctor to work in India after clearing the NEXT / MCI Test.</p>`,
  },
  {
    title: "Is the NEET required for an MBBS Abroad?",
    desc: `<p>Yes, the students need to qualify for the NEET exam conducted by the National Testing Agency.</p>`,
  },
  {
    title: "Which Country is best for MBBS abroad?",
    desc: `<p>Most of the Indian students wish to pursue MBBS abroad. Countries all over the world develop the structural design of the course as per the criteria they deem as best suited. The top countries to study MBBS are Russia, Ukraine, Belize, Philippines, Armenia, France, Kazakhstan, and many more.</p>`,
  },
  {
    title: "How is education for an MBBS abroad?",
    desc: `<p>The students who want to study MBBS abroad can get the best quality education at a reasonable fee of 15-25 Lakhs. There is no requirement to pay any donation or capitation fees.</p>`,
  },
  {
    title: "What is the eligibility to do MBBS in Abroad?",
    desc: `<p>The students who want to study MBBS abroad can get the best quality education at a reasonable fee of 15-25 Lakhs. There is no requirement to pay any donation or capitation fees.</p> <ul>
		<li>The students should have aggregate 50% marks in physics, chemistry, and biology in the 12th standard.</li>
		<li>The students should have English subject in their higher secondary.</li>
		<li>The students should be at least 17 years of age on or before 31st December of the admission year.</li>
		<li>The students need to qualify for the NEET entrance examination conducted by the (NTA) National Testing Agency.</li>
		<li>The students must not be more than 25 years of age.</li>
		</ul>`,
  },
  {
    title: "What is the procedure for MBBS Admission in Abroad?",
    desc: `<p>The students who want to study MBBS abroad need a student visa. Therefore, the required documents for getting the Student’s Visa are as follows:</p> <ul>
		<li>Original and photocopies of Passport.</li>
		<li>Original and one photocopy of mark sheets of both 10th & 12th standard.</li>
		<li>Leaving certificate from the previous studying college.</li>
		<li>A medical checkup certificate is also essential</li>
		<li>Passport size photographs</li>
		<li>Birth certificate and other mandatory certificates must be submitted to the concerned authority.</li>
		<li>The students must clear the National Medical Admission Test.</li>
		<li>A code of conduct certificate must be submitted.</li>
		<li>The students must fill the online admission form with their accurate details</li>
		<li>A bank statement of the guardian should be submitted which should include the fee structure of the 1st year of the education.</li>
		</ul>`,
  },
  {
    title: "Why do I choose your MBBS Abroad Consultancy?",
    desc: `<p>We are one of the top MBBS Abroad Consultancy in India that offers professional consultancy services to aspiring students who wish to pursue a lucrative career in the field of medicine. We have a team of highly qualified and experienced MBBS consultants that aims at delivering the best results for your professional career. We provide in-depth, accurate information that you require to know about MBBS abroad.</p>`,
  },
  {
    title: "What is the Cost of Studying MBBS in Abroad?",
    desc: `<p>The cost of studying MBBS in abroad would range anywhere between 15-25 Lakhs.</p>`,
  },
  {
    title: "Will COVID-19 affects MBBS Abroad?",
    desc: `<p>We are keeping a close watch on COVID-19 effects on MBBS Abroad education. As per the current situation, countries that are famous for MBBS Abroad such as Ukraine, Russia, and Philippines have minor effects and have contained the virus very well. According to the reviews from countries and universities, they will be accepting the admissions in MBBS in ${new Date().getFullYear()} - ${
      new Date().getFullYear() + 1
    } without any restrictions. MBBS abroad ${new Date().getFullYear()} - ${
      new Date().getFullYear() + 1
    } students will be traveling in October ${new Date().getFullYear()} - ${
      new Date().getFullYear() + 1
    } and by that time the complete situation will be under control. So, the students no need to worry, admissions in MBBS Abroad ${new Date().getFullYear()} - ${
      new Date().getFullYear() + 1
    } will remain unaffected and New-Lyf MBBS Abroad Consultancy in India will help you get admission in MBBS abroad smoothly and safely.</p>`,
  },
];

function index(props) {
  // useEffect(() => {
  //   const popupTimeout = setTimeout(() => {
  //     const isFormFilled = localStorage.getItem("isFormFilled");
  //     if (isFormFilled === undefined || isFormFilled === null) {
  //       setShowPopup(true);
  //     } else {
  //       setShowPopup(false);
  //     }
  //   }, 5000);

  //   return () => {
  //     clearTimeout(popupTimeout);
  //   };
  // }, []);
  // const [showPopup, setShowPopup] = React.useState(false);

  const { testimonials, homePageContents } = props;
  return (
    <>
      {/* <CollegeModal
        isHomePage={true}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      /> */}
      <Grid container sx={{ justifyContent: "center", mb: 2 }}>
        {/* <Grid item xs={12}>
          <Typography
            variant="h2"
            className={styles.title}
            sx={{ color: "#1c1c84" }}
          >
            Mbbs In Abroad
          </Typography>
        </Grid> */}
        <Grid
          item
          xs={11}
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Grid
            container
            spacing={2}
            style={{
              width: "95%",
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Grid item xs={12} md={12}>
              <Image
                src={"/assests/looking-for-mbbs-2.jpeg"}
                alt="mbbs-admission"
                width={2000}
                height={1000}
              />
            </Grid> */}
            {/* <Grid
              item
              xs={12}
              md={5.5}
              sx={{ display: "flex", alignItems: "center" }}
            > */}
            {/* <Grid item xs={12} md={6}>
              <Image
                src={"/assests/doctor-image.jpeg"}
                alt="mbbs-admission"
                width={400}
                height={400}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </Grid>
            <Box>
              <Typography variant="h3" className={styles.subTitle} gutterBottom>
                "Don't Worry We Are Here To Assist You"
              </Typography>
              <Typography variant="body1" gutterBottom>
                Grab the top abroad education consultant to fulfill your
                aspiration with:
              </Typography>
              {studyAbroadList.map((item, index) => (
                <Box sx={{ display: "flex", alignItems: "center" }} key={index}>
                  <Typography
                    className={styles.circleNum}
                    sx={{ color: "#1c1c84" }}
                    variant="body1"
                  >
                    {index + 1}
                  </Typography>
                  <Typography variant="body1">{item}</Typography>
                </Box>
              ))}
            </Box> */}
            <LookingForMBBS />
          </Grid>
        </Grid>
      </Grid>
      {/* </Grid> */}
      <About />
      <OurServices />
      {/* <MileStones /> / */}
      <StudyMbbsInAbroad />
      <Faq title="HOW CAN WE ASSIST YOU" data={howCanWeAssistYou} />
      <CountriesList />
      {homePageContents && (
        <Box className={styles.testimonialsContainer}>
          <TextSerializer
            data={homePageContents.homePageContent}
            className="homePageTitle"
          />
        </Box>
      )}
      <FoundersMessage />
      <Box className={styles.testimonialsContainer}>
        <Testimonials testimonials={testimonials} />
      </Box>
      <StaticComponent title={title} desc={desc} />
      <StaticComponent title={title2} desc={desc2} />
      <Faq title="MBBS ADMISSION CONSULTANCY IN INDIA" data={faq} />
    </>
  );
}

export default index;
