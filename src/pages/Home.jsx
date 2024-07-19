import React, { useRef } from "react";
import Button from "../components/Button.jsx";
import Navbar from "../components/Navbar.jsx";
import Achievements from "../components/Achievements.jsx";
import Education from "../components/Education.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Experience from "../components/Experience.jsx";
import AskMe from "../components/AskMe.jsx";
import working from "../assets/working.svg";
import Contactme from "../components/Contactme.jsx";

const Home = () => {
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0075A7] max-w-full min-h-screen">
      <Navbar scrollToSection={scrollToSection} sections={{ skillsRef, experienceRef, educationRef, projectsRef, achievementsRef, contactRef }} />
      
      <div className="flex justify-center lg:justify-between w-full items-center fade-in">
        <div className="w-[100%] flex flex-col m-5 md:w-[80%] lg:m-10 lg:ml-20 lg:w-[40%]">
          
            <p className="rancho text-3xl md:text-7xl ">Hello There, I'm Ananya!</p>
            <p className="pt-[1.5rem] text-2xl imprima">
              I am a full stack web developer who is passionate about creating
              impactful projects and finds peace in creating digital art.
            </p>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
              <Button text="Let's Connect!" />
            </div>
          
        </div>
        <div className="m-20">
          <img src={working} className="hidden lg:block" alt="a woman working on code and sipping tea" />
        </div>
      </div>

      
        <div ref={skillsRef}><Skills /></div>
      
      
        <div ref={experienceRef}><Experience /></div>
      
      
        <div ref={educationRef}><Education /></div>
      
      
        <div ref={projectsRef}><Projects /></div>
      
      
        <div ref={achievementsRef}><Achievements /></div>
      
      
        <div ref={contactRef}><AskMe /></div>
      
      
        <Contactme />
      
    </div>
  );
};

export default Home;
