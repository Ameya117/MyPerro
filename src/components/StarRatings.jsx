import React from 'react'

const StarRatings = () => {
    return (
        <>
            <div className='bg-[#D9D9D9] h-auto pt-3 px-3 rounded-lg text-xs md:text-base lg:text-xl'>
                <div className="flex flex-col">
                    <div className='flex flex-col my-2 ml-2'>
                        <h1 className='font-bold'>OVERALL RATINGS</h1>
                        <h1><span className="fa fa-star checked-star"></span>
                            <span className="fa fa-star checked-star"></span>
                            <span className="fa fa-star checked-star"></span>
                            <span className="fa fa-star checked-star"></span>
                            <span className="fa fa-star"></span>
                        </h1>
                    </div>
                    <div className='flex flex-col my-2 ml-2'>
                        <h1 className='font-bold'>DOG WALKING</h1>
                        <h1><span className="fa fa-star checked-star"></span>
                            <span className="fa fa-star checked-star"></span>
                            <span className="fa fa-star checked-star"></span>
                            <span className="fa fa-star checked-star"></span>
                            <span className="fa fa-star"></span>
                        </h1>
                    </div>
                    <div className='flex flex-col my-2 ml-2'>
                        <h1 className='font-bold'>DOG BOARDING</h1>
                        <h1><span className="fa fa-star checked-star"></span>
                            <span className="fa fa-star checked-star"></span>
                            <span className="fa fa-star checked-star"></span>
                            <span className="fa fa-star "></span>
                            <span className="fa fa-star"></span>
                        </h1>
                    </div>
                    <button type='button' className='mx-auto h-8 orange-background text-sm md:text-lg rounded-md px-4 text-white font-semibold relative -bottom-3 hover:bg-orange-400'>RATE US</button>
                </div>
            </div>
        </>
    )
}

export default StarRatings