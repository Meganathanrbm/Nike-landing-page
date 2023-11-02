import React from 'react'
import { reviews } from '../constants'
import { star } from '../assets/icons'

function CustomerReview() {
  return (
    <section id="review" className="bg-pale-blue max-containr ">
      <h2 className='text-4xl text-center caplitalize font-bold font-palanquin '>What Our <span className='text-coral-red'>Customers</span> Say?</h2>
      <p className='mt-4 m-auto max-w-lg info-text text-center'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="flex items-center justify-evenly mt-24 max-lg:flex-col gap-14 flex-1">
        {
          reviews.map((review)=>(
            <div className=" flex justify-center items-center flex-col">
              <img src={review.imgURL}
               width={120}
               height={120}
               className='rounded-full object-cover'
               alt="customer" />
               <p className='info-text mt-6 max-w-sm text-center'>{review.feedback}</p>
               <div className="flex mt-3 gap-2.5 justify-center items-center">
                  <img src={star} alt="rating"
                  className='object-contain' />
                  <p className='text-xl font-monsterrat text-slate-gray '>(4.5)</p>
               </div>
               <h3 className='font-bold mt-1 text-center font-palanquin text-3xl'>{review.customerName}</h3>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReview