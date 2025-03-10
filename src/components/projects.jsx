import React from "react";
import Cards from "./cards";
const Projects = () => {
  const projects = [
    {
      key: 1,
      title: "ZO WORLD",
      description: "Web3",
    },
    {
      key: 2,
      title: "MIXED MEDIA",
      description: "Multimedia",
    },
    {
      key: 3,
      title: "MO GRAPHS",
      description: "Logos & UI",
    },
    {
      key: 4,
      title: "RAPIDO",
      description: "Personal",
    },
  ];

  return (
    <section className="flex flex-col flex-grow">
      <div className="flex flex-col relative justify-center items-center h-full">
        <h1 className="text-[1.5rem] text-[crimson] font-bold mr-7 mt-5 self-end lg:text-[2rem] lg:mr-15 xl:text-[3rem] xl:mr-20">
          Projects
        </h1>
        <div className="flex flex-col gap-4 md:w-full px-5 mx-5 justify-items-center md:justify-evenly md:flex-row md:py-10 md:gap-10 md:flex-wrap lg:px-10 lg:gap-15 xs:gap-5 xs:py-10 ">
          {projects.map((project) => (
            <Cards props={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
