'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import achievements from "../assets/achievements.svg";
import { achievementslist } from '../data/data';
function Achievements() {
  const AchievementBox = ({ title, desc }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className='mx-20 my-3 p-4 text-xl border hover:scale-110 hover:shadow-2xl transition-all shadow-blue-500/50 border-[#83C0F8] flex flex-col gap-3 imprima rounded-md bg-[#033D72]'
      >
        <p className='text-3xl'>{title}</p>
        <p>{desc}</p>
      </motion.div>
    );
  };


  return (
    <div>
      <p className="rancho text-2xl md:text-5xl my-10 ml-20">My Achievements:</p>
      <div className="flex flex-col lg:flex-row justify-center items-center imprima">
        <img
          className="hover:animate-[wiggle_1s_ease-in-out_infinite] transition-all ml-10 w-[50%] h-[50]"
          src={achievements}
          alt="victory"
        />
        
        <div>
          {achievementslist.map((achievement, index) => (
            <AchievementBox
              key={index}
              title={achievement.title}
              desc={achievement.desc}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Achievements;
