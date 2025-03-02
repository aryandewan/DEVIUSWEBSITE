import React from "react";

const Cards = ({ props }) => {
  return (
    <div className="flex flex-col bg-[#222] rounded-lg border border-[crimson] border-2 p-4 w-[390px] md:w-[45%] h-[400px] text-white md:shrink-0 lg:h-[550px] justify-between xs:w-[350px] xs:h-[350px] ">
      <h1 className="font-bold text-[3.5rem] BricolageGrotesque-Regular md:text-[2rem] lg:text-[3rem] xl:text-[4rem] xs:text-[2rem]">
        {props.title}
      </h1>
      <div className="flex gap-2 p-3 bg-white rounded-3xl w-fit">
        <h1 className="instrument-serif-regular-italic text-[3.5rem] text-black md:text-[2rem] lg:text-[3rem] xl:text-[4rem] xs:text-[2rem]">
          {props.description}
        </h1>
      </div>
    </div>
  );
};

export default Cards;
