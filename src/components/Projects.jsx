'use client';
import React, { useRef } from 'react';
import IconBox from './ui/IconBox';
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "../data/data";
function Projects() {
  const ProjectBox = ({ title, desc, tech, gitlink }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const list = tech.map((t, index) => (
      <img key={index} src={t} className='h-12 m-1' alt="" />
    ));

    return (
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className='mx-20 my-5 p-4 text-xl border hover:scale-110 hover:shadow-2xl transition-all border-[#83C0F8] flex flex-col gap-3 imprima rounded-md bg-[#033D72]'
      >
        <div className='flex justify-end'>
          <p className='text-3xl mb-4 w-[50%]'>{title}</p>
          <IconBox link={gitlink} imgurl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </div>
        <p>{desc}</p>
        <div className='flex items-center gap-4'>
          <p className='text-2xl'>Tech Stack: </p>
          <div className='flex flex-wrap justify-left'>
            {list}
          </div>
        </div>
      </motion.div>
    );
  };
 

  return (
    <div className='lg:m-10'>
      <p className="rancho text-2xl md:text-5xl my-10 ml-10">My Projects:</p>
      {projects.map((project) => <ProjectBox key={project.title} {...project} />)}
      
    </div>
  );
}

export default Projects;
