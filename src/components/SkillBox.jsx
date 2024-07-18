import React from 'react';

function SkillBox({ title, skills }) {
  const list = skills.map((skill, index) => (
    <img key={index} src={skill} className='h-12 m-1' alt="" />
  ));
  
  return (
    <div className='m-3 lg:m-5 p-4 border border-[#83C0F8] hover:scale-110 transition-all rounded-md w-[30%] bg-[#033D72]'>
      <p className='text-2xl mb-4 text-center imprima'>{title}</p>
      <div className='flex flex-wrap justify-between'>
        {list}
      </div>
    </div>
  );
}

export default SkillBox;
