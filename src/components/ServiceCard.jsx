import React from 'react';

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div className="w-12 h-12 p-3 bg-coral-red rounded-full flex justify-center items-center ">
            <img src={imgURL} height={24} width={24} alt={label} />
        </div>
        <h3 className='text-3xl leading-normal font-bold mt-5 font-palanquin'>{label}</h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard