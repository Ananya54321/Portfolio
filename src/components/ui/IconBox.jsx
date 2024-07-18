import React from 'react'

function IconBox({imgurl, link, className}) {
  return (
    <>
     < a href={link}>
        <div className={`bg-slate-50 rounded-xl h-14 w-14 flex justify-center items-center ${className}`}>
        <img src={imgurl} alt="a link to a url" className='h-12' />
        
        </div>
        </a>
    </>
  )
}

export default IconBox
