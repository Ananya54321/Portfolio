'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import IconBox from './ui/IconBox';
import { skills } from "../data/data";
function Skills() {
  const SkillBox = ({ title, skills }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const list = skills.map((skill, index) => (
      <IconBox key={index} imgurl={skill} link="" className='h-12 m-1' alt="" />
    ));

    return (
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className='m-3 lg:m-5 p-4 border border-[#83C0F8] hover:shadow-2xl shadow-blue-500/50 transition-all rounded-md lg:w-[30%] bg-[#033D72]'
      >
        <p className='text-2xl mb-4 text-center imprima'>{title}</p>
        <div className='flex flex-wrap justify-between'>
          {list}
        </div>
      </motion.div>
    );
  };
  return (
    <div className="m-auto w-[100%] lg:m-5 lg:mt-10">
      <p className="rancho text-2xl md:text-5xl my-10 ml-10 md:ml-20">My Technical Skills:</p>
      <div className="flex w-[100%] flex-col md:flex-row justify-center items-center">
        {skills.map((skill, index) => (
          <SkillBox
            key={index}
            title={skill.title}
            skills={skill.skills}
          />
        ))}
        
      </div>
    </div>
  );
}

export default Skills;
