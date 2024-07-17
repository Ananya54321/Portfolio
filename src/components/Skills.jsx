import React from "react";
import SkillBox from "./SkillBox";
import { languages, frameworks, tools } from "../data/Links";
function Skills() {
  
  return (
    <div>
      <p className="rancho text-2xl md:text-5xl mt-10 ml-20"> My Technical Skills: </p>
      <div className="flex justify-center items-center">
        <SkillBox title="Programming Languages" skills={languages} />
      <SkillBox title="Frameworks" skills={frameworks} />
      <SkillBox title="Tools" skills={tools} />
      </div>
    </div>
  );
}

export default Skills;




