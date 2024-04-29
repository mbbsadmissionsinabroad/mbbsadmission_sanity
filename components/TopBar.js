import { Typography } from "@mui/material";
import { Phone, EmailOutline } from "mdi-material-ui";
import Link from "next/link";

function TopBar() {
  return (
    <div className="topBarBg flex items-center">
      <p className="flex h-10 items-center flex-grow justify-center text-lg font-bold text-yellow-300 px-20 textBounce">
        <Link href="/scholarship">
          <span className="cursor-pointer">
            * The Vaidya Vigyan Scholarships worth 1 Crore!{" "}
            <span className="text-xs">(*T&C apply)</span>. Explore Now! *
          </span>
        </Link>
      </p>
      <p className="flex items-center ml-4">
        <Phone sx={{ mr: 1 }} />
        <a href="tel:8050575767" target="_blank">
          <span className="text-white mr-6">+91 (805) 057-5767</span>
        </a>
      </p>
    </div>
  );
}

export default TopBar;
