import React, { useState, useEffect, useRef, useGSAP } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const pg1Ref = useRef(null);
  const pg2Ref = useRef(null);
  const h1Ref = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const pg2 = pg2Ref.current;
    const h1 = h1Ref.current;
    const section = sectionRef.current;

    const animation = gsap.to(pg2, {
      rotateZ: 5,
      translateX: 35,
      duration: 1,
      ease: "power2.inOut",
      transformOrigin: "100% 100%",
      opacity: 0.5,
      scrollTrigger: {
        trigger: h1,
        start: 0,
        end: 0,
        scrub: 1,
      },
    });
  }, []);

  const handlePg1Click = () => {
    const pg1 = pg1Ref.current;
    const pg2 = pg2Ref.current;

    gsap.to(pg1, {
      zIndex: 0,
    });

    gsap.to(pg2, {
      rotateZ: 0,
      translateX: 0,
      zIndex: 1,
      opacity: 1,
    });
  };

  const handlePg2Click = () => {
    const pg1 = pg1Ref.current;
    const pg2 = pg2Ref.current;

    gsap.to(pg2, {
      zIndex: 0,
      opacity: 0,
    });

    gsap.to(pg1, {
      zIndex: 1,
    });
  };

  return (
    <section ref={sectionRef} className="flex flex-col relative">
      <h1
        ref={h1Ref}
        className="text-[1.5rem] text-[crimson] font-bold ml-5 mt-5 self-start md:ml-7 lg:text-[2rem] lg:ml-10 xl:text-[3rem] xl:ml-20"
      >
        Resume
      </h1>
      <div className="flex flex-col relative mt-10">
        <img
          ref={pg1Ref}
          id="pg-1"
          src="./CV/pg-1.gif"
          alt="Resume PG-1"
          className="z-1 w-4/5 ml-5 md:ml-7 lg:ml-10 lg:mt-5 xl:w-[60%] xl:ml-20 cursor-pointer"
          onClick={handlePg1Click}
        />
        <img
          ref={pg2Ref}
          id="pg-2"
          src="./CV/pg-2.gif"
          alt="Resume PG-2"
          className="w-4/5 ml-5 md:ml-7 lg:ml-10 lg:mt-5 xl:w-[60%] xl:ml-20"
        />
      </div>
    </section>
  );
};

export default Resume;
