import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'

function Footer() {
  return (
    <footer className='max-container'>
      <div className="flex max-lg:flex-col lg:mb-50 flex-wrap justify-between items-center lg:gap-10 gap-20">
        <div className="flex sm:max-w-lg flex-col items-start">
          <img src={footerLogo} width={160} height={160} alt="footerlogo" className='mb-10 object-contain' />
          <p className='text-white-400 font-monsterrat text-base leading-7  sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex justify-start gap-5 mt-8 align-center">
            {
              socialMedia.map((it,i)=>(
                <img key={i} src={it.src} alt='logo'
                width={150}
                height={46}
                 className='h-12 m-0 rounded-full bg-white p-3  w-12'/>
              ))
            }
          </div>
        </div>

        <div className="flex flex-1 lg:gap-20 justify-between flex-wrap gap-20">
          {footerLinks.map((it,i)=>(
            <div key={i} className="">
              <h4 className='text-2xl leading-normal font-monsterrat text-white font-medium mb-6'>{it.title}</h4>
              <ul>
              {it.links.map((link,i)=>(
                <li className='text-white-400 hover:text-slate-gray text-base leading-normal font-monsterrat mt-3'><a href={link.link}>{link.name}</a></li>
              ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="curser pointer flex justify-between flex-row max-sm:justify-center items-center  max-sm:flex-col mt-20 items-center">
                <p className='text-white cursor-pointer'><span className='text-xl'>©</span> Copyright. All rights reserved.</p>
                <p className='text-white cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer