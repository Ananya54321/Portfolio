import React, { useState } from 'react';
import Hamburger from '../assets/hamburger.png';
import Close from '../assets/close.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  let Links = [
    { name: "Home", link: "/" },
    { name: "Skills", link: "/skills" },
    { name: "Education", link: "/education" },
    { name: "Projects", link: "/projects" },
    { name: "Achievements", link: "/achievements" },
    { name: "Contact Me", link: "/contact" },
  ];

  return (
    <div className='shadow-md w-full top-0 left-0'>
      <div className='md:flex items-center justify-between bg-[#033D72] py-2 md:px-10 px-7'>
        <div className='flex justify-left items-center font-bold text-2xl cursor-pointer imprima'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name="logo-web-component"></ion-icon>
          </span>
          <div>Portfolio</div>
        </div>
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden'>
          <img src={open ? Close : Hamburger} alt="Menu Icon" className='h-6' />
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#033D72] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 " : "top-[-490px]"}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-200 hover:underline hover:ease-in duration-500'>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
