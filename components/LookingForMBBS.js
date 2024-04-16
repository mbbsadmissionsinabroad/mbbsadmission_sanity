import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./HomePage/homePage.module.css";
const studyAbroadList = [
  "Free Counseling",
  "Guaranteed Admission In Top- Universities/Colleges",
  "Low Admission Fees",
  "100% Visa Clearance Assistance",
  "No Donation & Capitation Fees",
  "All Documentation Support",
];

const LookingForMBBS = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="mx-auto flex px-4 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/3 w-full mb-10 md:mb-0">
            <Image
              src={"/assests/doctor-image.jpeg"}
              className="object-cover object-center rounded"
              alt="mbbs-admission"
              width={800}
              height={900}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900 text-justify">
              Are you Looking for Study Abroad
            </h1>
            <p className="mb-8 leading-relaxed ">
              Do not worry, we are Here to Assist you. Grab the top Abroad
              Education Consultant to fulfill your aspiration with:
            </p>
            <hr />
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default LookingForMBBS;
