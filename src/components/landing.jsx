import React from "react";
import LottieAnimation from "./Lottie";

const Landing = () => {
  return (
    <section className="flex flex-col h-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center sm:self-start md:self-start xl:self-start relative">
          <LottieAnimation />
          <h1 className="xl:text-[25rem] xl:left-88 xl:top-[-10px] md:text-[17rem] md:left-70 md:top-[10px] sm:text-[14rem] sm:left-60 sm:top-8 font-bold instrument-serif-regular-italic absolute xs:text-[9rem] xs:left-[-25px] xs:top-15 ">
            I'M
          </h1>
        </div>
        <h1 className="text-[4rem] xl:text-[22rem] xl:ml-10 xl:top-80 xl:left-0 md:text-[9.5rem] md:left-5 md:top-70 sm:text-[8rem] sm:left-5 sm:top-63 absolute font-bold instrument-serif-regular-italic top-50 left-5 xs:text-[4.5rem] xs:left-[20px] xs:top-50 ">
          SATYADEV
        </h1>
        <h1 className="text-[crimson] text-[1.5rem] font-bold absolute top-75 .BricolageGrotesque-Regular left-5 xl:text-4xl xl:top-190 xl:left-10 md:text-[2rem] md:top-115 md:left-5 sm:text-[1.5rem] sm:top-100 sm:left-5 xs:text-[1.3rem] xs:top-70 xs:left-5 ">
          COMMUNICATION DESIGNER
        </h1>
      </div>
    </section>
  );
};

export default Landing;
