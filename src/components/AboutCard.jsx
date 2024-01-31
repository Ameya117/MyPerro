import React from 'react'

const AboutCard = () => {
    return (
        <>
        <div className='hidden lg:block'>
            <div className='rounder-lg flex flex-row bg-[#D9D9D9] h-36 md:h-48 lg:h-96 m-4 md:m-10 lg:m-16 rounded-lg '>
                <div className=' flex flex-col justify-center items-center w-1/6 pl-2 mx-auto'>
                    <h1 className='orange-text font-bold text-md md:text-xl lg:text-5xl'>ABOUT</h1>
                    <h1 className='font-bold text-md md:text-xl lg:text-5xl'>US</h1>
                    <button type='button' className='py-1 px-4 mt-2 mx-auto text-2xs md:text-base text-white bg-black rounded-full hover:bg-slate-700'>KNOW MORE</button>
                </div>
                <div className='bg-white-200 w-5/6 flex justify-center items-center'>
                    <img className="rounded-lg w-full ml-3 h-full bg-slate-100 object-cover" src="/comingsoonbg.jpg" alt="about us pic" />
                </div>
            </div>
        </div>
            <div className="lg:w-full w-5/6 h-48 lg:h-64 max-w-xl rounded-lg shadow-2xl overflow-hidden relative mx-auto my-6 blpck lg:hidden">
                <img className="absolute inset-0 h-full w-full object-cover" src="/comingsoonbg.jpg" alt="" />
                <div className="absolute inset-0 bg-yellow-900 bg-opacity-25"></div>
                <div className="flex flex-col relative pt-10 pl-8 mx-auto lg:pt-12 lg:pl-auto">
                    <h1 className='orange-text font-bold text-xl lg:text-5xl w-'>ABOUT</h1>
                    <h1 className='font-bold text-xl lg:text-5xl text-white'>US</h1>
                    <button type='button' className='py-1 px-4 mt-2 mr-auto text-2xs md:text-base text-white bg-black rounded-full hover:bg-slate-700 '>KNOW MORE</button>
                </div>
            </div>
        </>
    )
}

export default AboutCard
