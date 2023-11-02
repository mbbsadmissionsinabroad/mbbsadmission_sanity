import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import styles from "../homePage.module.css";
import { Headset, LeadPencil, Airplane, Magnify } from "mdi-material-ui";
import Image from "next/image";

const aboutList = [
  {
    icon: "Headset",
    title: "Counselling",
    desc: "Reliable Counseling & Guidance to Select The Country And The University Is The Most Important Service Provided By New-Lyf",
  },
  {
    icon: "LeadPencil",
    title: "Guideness",
    desc: "All Your Travel Requirements Such As Air Ticket, Visa, Airport Pick up And Drop To The Hostel Is Taken Care Of By New-Lyf",
  },
  {
    icon: "Airplane",
    title: "Travel",
    desc: "All Your Travel Requirements Such As Air Ticket, Visa, Airport pick up And Drop To Hostel Is Taken Care Of By New-Lyf",
  },
  {
    icon: "Magnify",
    title: "Mission",
    desc: "We Aim To Reach The Scope of International Education To All Aspiring Student Communities of India. We Vow To Motivate And Guide Candidates To Realize Their Dream.",
  },
];

const icons = { Headset, LeadPencil, Airplane, Magnify };

function index() {
  return (

    <Grid item xs={12}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Image
          src={"/assests/who-are-we.jpeg"}
          alt="mbbs-admission"
          width={1200}
          height={650}
        />
      </div>
    </Grid>
  );
}

export default index;
