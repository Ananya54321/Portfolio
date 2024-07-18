import React from 'react';

function AchievementBox({ title, desc}) {
  
  return (
    <div className='mx-20 my-3 p-4 text-xl border border-[#83C0F8] flex flex-col gap-3 imprima rounded-md bg-[#033D72]'>
        <p className='text-3xl'>{title}</p>
      
      <p className=''>{desc}</p>
      
      
    </div>
  );
}

export default AchievementBox;
