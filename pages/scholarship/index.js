import React from "react";
import Vaidya from "./assets/Vaidya.png";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Logo from "./assets/Logo.png";
import Intro from "../../components/ScholarshipComponents/Intro";
import ScholarshipUniversities from "../../components/ScholarshipComponents/ScholarshipUniversities";
import Enroll from "../../components/ScholarshipComponents/Enroll";

const index = () => {
  const isDesktopOrTablet = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <>
      <div className="relative">
        <Image
          src={Vaidya}
          height={isDesktopOrTablet ? 400 : 500} // Increased height for tablet/desktop
          className="md:w-1/4 w-5/6 h-5/6"
          alt="Vaidya Image"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center md:mt-28">
              <Image
                src={Logo}
                height={50} // Increased height for tablet/desktop
                width={50} // Increased height for tablet/desktop
                alt="Logo"
                className="mr-2 md:w-12 opacity-90"
              />
              <p className=" text-xl md:text-4xl font-bold text-gray-200 ml-4 opacity-80">
                THE VAIDYA VIGYAN SCHOLARSHIP
              </p>
            </div>
          </div>
        </div>
      </div>
      <Intro />
      <ScholarshipUniversities />
      <Enroll />
    </>
  );
};

export default index;
