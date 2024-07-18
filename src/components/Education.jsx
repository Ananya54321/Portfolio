import React from "react";
import education from "../assets/education.svg";
import cvr from "../assets/cvr.png";
function Education() {
  return (
    <div className="w-[100%] p-5">
      <p className="rancho m-3 text-3xl md:text-5xl lg:m-5 lg:mt-10">
        {" "}
        My Education:{" "}
      </p>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between imprima">
        <img src={education} alt="education in a classroom" />
        <div className="flex bg-[#033D72] flex-col w-[80%] lg:w-[40%] m-10 p-4 border border-[#83C0F8] rounded-md">
          <div className="flex items-center gap-4">
            <img src={cvr} alt="" />
            <p className="text-xl lg:text-2xl">CVR COLLEGE OF ENGINEERING, IBRAHIMPATNAM</p>
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
