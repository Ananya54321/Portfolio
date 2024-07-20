import React from 'react'
import veda from '../assets/vedaai.png'

function Experience() {
  return (
    <div className='lg:m-20'>
         <div className='m-auto lg:m-20 p-4 hover:scale-110 hover:shadow-2xl transition-all border border-[#83C0F8] rounded-md w-[85%] xl:w-[30%] bg-[#033D72]'>
      <p className="rancho text-2xl md:text-3xl"> My Experience </p>
      <div className='flex justify-left gap-4 mt-3'>
        <img src={veda} alt="vedaai logo" className='h-20 ml-4' />
      <div>
        <p className='text-xl text-center imprima'>Internship at  Vedaai.io</p>
      <p>From July 2024 - Present</p>
      </div>
      </div>
    </div>
    </div>
   
  )
}

export default Experience
