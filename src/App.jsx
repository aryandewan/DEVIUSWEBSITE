import React from "react";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Resume from "./components/resume";

const App = () => {
  return (
    <main className="bg-[#111] text-white min-h-screen overflow-x-hidden">
      <Landing />
      <Projects />
      <Resume />
      <section className="h-screen">
        <h1>Contact</h1>
      </section>
    </main>
  );
};

export default App;
