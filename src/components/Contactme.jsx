import React from 'react'
import Button from '../components/Button'
import IconBox from '../components/ui/IconBox'
import gmail from '../assets/gmail.svg'
import leetcode from '../assets/leetcode.svg'
import mypic from '../assets/mypic.svg'
function Contactme() {
  return (
    <div className='bg-[#033D72] w-[100%] p-5 flex flex-col-reverse md:flex-row md:items-center md:justify-between'>
        <div className='w-[35%] flex flex-col gap-3'>
             <div className='flex flex-row items-center justify-left gap-4'>
        <p className='rancho text-3xl md:text-5xl m-2 lg:mt-10 lg:ml-20'>Ananya Pappula</p>
        <Button text="Resume" />
      </div>
      <p>Tech Enthusiast with Web Development Skills & Leadership Experience | Likes working in a fast-paced environment.</p>
    <div className='flex gap-3 mt-4'>
        <IconBox imgurl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" link="https://www.linkedin.com/in/ananya-pappula-1735b9288/" />
        <IconBox imgurl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" link="https://github.com/ananya54321" />
        <IconBox imgurl={gmail} link="mailto:ananyapappula2004@mgmail.com" />
        <IconBox imgurl={leetcode} link="https://leetcode.com/u/ananyapappula/" />
    </div>
        </div>
        <img className='w-[50%] md:w-[25%] hover:scale-100 hover:saturate-100' src={mypic} alt="my picture" />
     </div>
  )
}

export default Contactme
