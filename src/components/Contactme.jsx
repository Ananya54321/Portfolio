import React from 'react';
import Button from '../components/Button';
import IconBox from '../components/ui/IconBox';
import gmail from '../assets/gmail.svg';
import leetcode from '../assets/leetcode.svg';
import mypic from '../assets/mypic.svg';

function Contactme() {
  return (
    <div className='bg-[#033D72] w-full p-5 flex flex-col-reverse md:flex-row md:items-center md:justify-between'>
      <div className='w-full md:w-[60%] lg:w-[50%] flex flex-col gap-3'>
        <div className='flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4'>
          <p className='rancho text-3xl sm:text-4xl md:text-5xl m-2 lg:mt-10 lg:ml-20 text-center sm:text-left'>Ananya Pappula</p>
          <Button text="Resume" />
        </div>
        <p className='text-center sm:text-left'>Tech Enthusiast with Web Development Skills & Leadership Experience | Likes working in a fast-paced environment.</p>
        <div className='flex justify-center sm:justify-start gap-3 mt-4'>
          <IconBox imgurl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" link="https://www.linkedin.com/in/ananya-pappula-1735b9288/" />
          <IconBox imgurl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" link="https://github.com/ananya54321" />
          <IconBox imgurl={gmail} link="mailto:ananyapappula2004@mgmail.com" />
          <IconBox imgurl={leetcode} link="https://leetcode.com/u/ananyapappula/" />
        </div>
      </div>
      <div className='flex justify-center md:justify-end w-full md:w-[40%] lg:w-[25%]'>
        <img className='w-[60%] md:w-full hover:scale-105 hover:saturate-100 transition-transform' src={mypic} alt="my picture" />
      </div>
    </div>
  );
}

export default Contactme;
