import React from 'react'

const ReviewCard = (props) => {
  const { initial, review } = props;
  return (
    <div className='bg-[#D9D9D9] flex flex-col border-4 rounded-lg shadow-md border-[#727376]'>
      <div className='flex flex-row mt-2 ml-2 px-2 py-3'>
        <div className="bg-[#36598E] rounded-full md:rounded-[80%] lg:rounded-none lg:bg-transparent w-8 h-8 md:w-24 md:h-12 lg:w-auto lg:h-1/3 flex flex-row">
          <h1 className='text-center text-white font-bold lg:text-black lg:text-3xl mx-auto my-auto'>{initial}</h1>
          <h1><span className='text-center text-white font-bold lg:text-black lg:text-3xl hidden lg:block'>&nbsp;Name</span></h1>
        </div>
        <div className='mx-auto'>
          <h1 >
            <span className="fa fa-star checked-star text-xs md:text-base lg:text-xl"></span>
            <span className="fa fa-star checked-star text-xs md:text-base lg:text-xl"></span>
            <span className="fa fa-star checked-star text-xs md:text-base lg:text-xl"></span>
            <span className="fa fa-star checked-star text-xs md:text-base lg:text-xl"></span>
            <span className="fa fa-star text-xs md:text-base lg:text-lg"></span>
          </h1>
        </div>
      </div>
      <div className='ml-2 h-12 lg:h-48'>
        <p className='hidden md:block lg:text-xl'>{review}</p>
        <p className='block md:hidden'>{review.slice(0,10)}...</p>
      </div>
    </div>
  )
}

export default ReviewCard