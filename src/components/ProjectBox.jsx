import React from 'react';

function ProjectBox({ title, desc, tech, gitlink }) {
  const list = tech.map((t, index) => (
    <img key={index} src={t} className='h-12 m-1' alt="" />
  ));
  
  return (
    <div className='mx-20 my-5 p-4 text-xl border border-[#83C0F8] flex flex-col gap-3 imprima rounded-md bg-[#033D72]'>
      <div className='flex justify-end'>
        <p className='text-3xl mb-4 w-[50%]'>{title}</p>
      <a href={gitlink}>
        <div className='bg-slate-50 rounded-xl h-14 w-14 flex justify-center items-center'>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github link for the project" className='h-12' />
        
        </div>
        </a>
      </div>
      
      <p className=''>{desc}</p>
      <div className='flex items-center gap-4'>
        <p className='text-2xl'>Tech Stack: </p> 
      <div className='flex flex-wrap justify-left'>
        {list}
      </div>
      </div>
      
      
    </div>
  );
}

export default ProjectBox;
