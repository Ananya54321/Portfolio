import React from "react";
import education from "../assets/education.svg";
import cvr from "../assets/cvr.png";

function Education() {
  return (
    <div className="w-full p-5">
      <p className="rancho m-3 text-3xl md:text-5xl lg:m-5 lg:py-4 lg:mt-10 text-center lg:text-left">
        My Education:
      </p>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between imprima gap-10">
        <img
          src={education}
          alt="education in a classroom"
          className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] max-w-xs"
        />
        <div className="flex bg-[#033D72] flex-col w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] hover:scale-105 shadow-blue-500/50 hover:shadow-2xl transition-all m-5 p-4 border border-[#83C0F8] rounded-md">
          <div className="flex items-center gap-4">
            <img src={cvr} alt="CVR Logo" className="w-12 h-12" />
            <p className="text-lg md:text-xl lg:text-2xl">
              CVR COLLEGE OF ENGINEERING, IBRAHIMPATNAM
            </p>
          </div>
          <div className="mt-2 text-base md:text-lg">
            <p>Bachelor Of Technology</p>
            <p>From 2022 - 2026</p>
            <p>Major: Computer Science and Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
