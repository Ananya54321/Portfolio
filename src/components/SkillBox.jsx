'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion"

function SkillBox({ title, skills }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1","1.33 1"],
        
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const list = skills.map((skill, index) => (
    <img key={index} src={skill} className='h-12 m-1' alt="" />
  ));
  
  return (
    <motion.div
    ref={ref}
     style={{
        scale: scaleProgress,
        opacity: opacityProgress
     }}
    className='m-3 lg:m-5 p-4 border border-[#83C0F8] hover:scale-110 transition-all rounded-md lg:w-[30%] bg-[#033D72]'>
      <p className='text-2xl mb-4 text-center imprima'>{title}</p>
      <div className='flex flex-wrap justify-between'>
        {list}
      </div>
    </motion.div>
  );
}

export default SkillBox;
