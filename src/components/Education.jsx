import React from "react";
import education from "../assets/education.svg";
import cvr from "../assets/cvr.png";
function Education() {
  return (
    <div>
      <p className="rancho text-2xl md:text-5xl mt-10 ml-20 w-full">
        {" "}
        My Education:{" "}
      </p>
      <div className="flex items-center justify-between m-5 imprima">
        <img src={education} alt="education in a classroom" />
        <div className="flex bg-[#033D72] flex-col w-[40%] m-10 p-4 border border-[#83C0F8] rounded-md">
          <div className="flex items-center gap-4">
            <img src={cvr} alt="" />
            <p className="text-2xl">CVR COLLEGE OF ENGINEERING, IBRAHIMPATNAM</p>
          </div>
          <div className="mt-2">
            <p className="text-xl"> Bachelor Of Technology</p>
            <p>From 2022 - 2026</p>
            <p>Major: Computer Science and Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
