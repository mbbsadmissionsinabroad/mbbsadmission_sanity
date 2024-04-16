import { Box, Grid, Typography, Button } from "@mui/material";
import { Phone, EmailOutline, Whatsapp } from "mdi-material-ui";

function TopBar() {
  return (
    <div className="topBarBg">
      <p className="flex h-10 items-center justify-center  px-4 text-sm font-bold text-white sm:px-6 lg:px-8">
        The Vaidya Vigyan Scholarships worth 1 Crore! (*T&C apply). Explore Now!
      </p>
    </div>
  );
}

export default TopBar;
