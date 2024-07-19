import React from "react";
import AchievementBox from "./AchievementBox";
import { codecraftlinks, facultyflowlinks, cobaltlinks } from "../data/Links";
import achievements from "../assets/achievements.svg";

function Achievements() {
  return (
    <div>
      <p className="rancho text-2xl md:text-5xl my-10 ml-20">
        {" "}
        My Achievements:{" "}
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center imprima">
        <img className="hover:animate-[wiggle_1s_ease-in-out_infinite] transition-all ml-10 w-[50%] h-[50]" src={achievements} alt="victory" />
      
      <div>
        <AchievementBox
          title="Bit-N-Build - Feb 2024"
          desc="Led a team of 4 and achieved 1st place out of 200+ teams, winning the Hackathon with our project."
        />
        <AchievementBox
          title="National-level Ideathon - Mar 2024"
          desc="Secured 5th place out of 100+ teams with an innovative prototype which acted as a blueprint for enhancing the college transport system."
        />
        <AchievementBox
          title="Google CyberSecurity Specialisation"
          desc="Completed the Google Cybersecurity Professional certificate course "
        />
      </div>
      </div>
    </div>
  );
}


export default Achievements;
