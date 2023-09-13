import React from 'react'

const Delievery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delievery App</h3>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp' alt='Food_Image'/>
        <div className='flex flex-col justify-center '>
          <p className='text-[#00df9a] font-bold'>Get the app</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on demand</h1>
          <p>
          
          A distinguishing characteristic of fast food is its convenience; in today's pervasive marketplace, consumers need not travel far to find a fast food outlet. This greater availability translates into a decrease in the full price of obtaining a meal, which contributes to greater consumption. Market-level data are used to estimate demand equations in two time periods, incorporating changes in availability as well as prices, income, and various demographic characteristics. Our findings show that greater availability has led to increased consumption.Fast food, such as burgers, fries, and soda, is one of the most common types of convenience foods. It is quick, fairly cheap, and easy to get, but it is also high in calories, fat, and sugar.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
    </div>
    </div>
  )
}

export default Delievery
