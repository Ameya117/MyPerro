import React from 'react'

const CarouselCard = (props) => {
    const { title, imgsrc } = props;
    return (

        <div className=" place-content-center rounded-xl shadow-lg flex flex-row justify-between w-52 h-36 md:w-64 md:h-48 lg:w-full lg:h-80 bg-[#FFE6A6]" >
            <div className='m-auto w-1/2 flex flex-col text-center'>

                <h1 className='orange-text font-bold text-md md:text-xl lg:text-3xl'>
                    {title[0]}
                </h1>
                <h1 className='font-bold text-md md:text-lg lg:text-3xl'>
                    {title[1]}
                </h1>
                <button type='button' className='mt-2 px-4 py-2 text-2xs md:text-xs lg:text-sm border-1 border-black text-white bg-black rounded-full hover:bg-slate-700 mx-auto'>BOOK NOW</button>
            </div>
            <div className='w-1/2 bg-[#EEEEEE] rounded-lg overflow-hidden'>
                <img className='inset-0 h-full w-full object-cover ' src={imgsrc} alt="pic" />
            </div>
        </div>

    )
}

export default CarouselCard
