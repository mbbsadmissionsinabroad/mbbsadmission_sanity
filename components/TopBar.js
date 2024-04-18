import { Typography } from "@mui/material";
import { Phone, EmailOutline } from "mdi-material-ui";

function TopBar() {
  return (
    <div className="topBarBg flex items-center">
      <div className="flex-grow"></div>
      <p className="flex h-10 items-center justify-center px-4 text-md font-bold text-yellow-300 sm:px-6 lg:px-8">
        The Vaidya Vigyan Scholarships worth 1 Crore! (*T&C apply). Explore Now!
      </p>
      <p className="flex items-center ml-4">
        <Phone sx={{ mr: 1 }} />
        <a href="tel:8050575767" target="_blank">
          <span className="text-white mr-6">+91 (805) 057-5767</span>
        </a>
        <EmailOutline sx={{ mr: 1 }} />
        <a href="mailto:info@new-lyf.com" target="_blank">
          <span className="text-white mr-4">info@new-lyf.com</span>
        </a>
      </p>
    </div>
  );
}

export default TopBar;
