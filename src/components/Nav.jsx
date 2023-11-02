import {headerLogo } from '../assets/images/index';
import { navLinks } from "../constants";
import { cancel, hamburger } from '../assets/icons';
import { useState } from 'react';




const Nav = () => {
  const [hamberActive, setHamberActive] = useState(false);
  return (
    <header className={`padding-x py-8  xl:mx-auto  absolute z-10 w-full`}>
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo}
          className='hover:'
           alt="logo" 
           width={130}
           height={29}/>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {
            navLinks.map((it)=>(
              <li key={it.label}>
                <a href={it.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
                >{it.label}</a>
              </li>
            ))
          }
        </ul>
        <div className="flex gap-2 wide:mr-24 font-montserrat max-lg:hidden font-medium text-lg leading-normal  ">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div onClick={()=> setHamberActive(!hamberActive)}
        className="max-lg:block hidden z-20 cursor-pointer hover:shadow-md text-white p-2 rounded-full">
          <img src={hamberActive? cancel  : hamburger}
           alt="hamburger"
           className='transform duration-500'
           width={hamberActive? 40  : 30}
           height={hamberActive? 40  : 30} />
        </div>
        <div className={`absolute top-0 left-0 w-full h-[100vh] bg-red-500 z-10 overflow-hidden transition-transform duration-500 transform 
          ${hamberActive ? 'translate-x-0' : 'translate-x-full'} max-lg:block`}>
          <ul className="flex-1 flex justify-center flex-col items-center gap-16 pt-20 ">
            {
              navLinks.map((it)=>(
                <li key={it.label} onClick={()=> setHamberActive(!hamberActive)}>
                  <a href={it.href}
                  className="font-montserrat leading-normal text-lg text-white font-semibold hover:text-black"
                  >{it.label}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav