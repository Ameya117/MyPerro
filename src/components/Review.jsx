import React from 'react'
import StarRatings from './StarRatings'
import ReviewCarousel from './ReviewCarousel'


const Review = () => {
    return (
        <>
            <div className='ml-3 md:m-10 lg:m-16'>
                <h1 className='font-bold text-xl md:text-2xl lg:text-4xl'>Reviews</h1>
                <div className='flex flex-col '>
                    <div className='relative -bottom-6 w-auto'>
                        <img className="h-16  ml-0 md:ml-4 lg:ml-8" src="/quotes.png" alt="quotes" />
                    </div>
                    <div className='flex flex-row'>
                        <div className='ml-0 md:ml-4 lg:ml-8'>
                            <StarRatings />
                        </div>
                       
                        <div className='grid place-content-center m-auto h-1/2  lg:mx-auto lg:w-24'>
                            <ReviewCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review
