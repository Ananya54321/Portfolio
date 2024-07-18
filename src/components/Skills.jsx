import React from "react";
import SkillBox from "./SkillBox";
import { languages, frameworks, tools } from "../data/Links";


function Skills() {
  
  return (
    <div className="lg:m-5 lg:mt-10">
      <p className="rancho text-2xl md:text-5xl my-10 md:ml-20"> My Technical Skills: </p>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <SkillBox title="Programming Languages" skills={languages} />
      <SkillBox title="Frameworks" skills={frameworks} />
      <SkillBox title="Tools" skills={tools} />
      </div>
    </div>
  );
}

export default Skills;




