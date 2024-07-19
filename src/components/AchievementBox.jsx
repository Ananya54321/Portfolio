'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
function AchievementBox({ title, desc}) {
  const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1","1.33 1"],
        
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
    ref={ref}
     style={{
        scale: scaleProgress,
        opacity: opacityProgress
     }}
    className='mx-20 my-3 p-4 text-xl border border-[#83C0F8] flex flex-col gap-3 imprima rounded-md bg-[#033D72]'>
        <p className='text-3xl'>{title}</p>
      
      <p className=''>{desc}</p>
      
      
    </motion.div>
  );
}

export default AchievementBox;
