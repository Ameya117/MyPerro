import React from 'react'

const CommingSoonCard = () => {
  return (
    <>
    <div className='block lg:hidden'>
      <div className="mx-4 my-6 md:m-10 lg:m-16 h-28 md:h-36 lg:h-72 bg-[#D9D9D9] rounded-lg flex flex-row justify-between">
        <div className=" flex flex-col justify-center items-center pl-2 w-1/2 lg:w-2/3 ">
          <div className='flex flex-col my-2 md:flex-row'>
            <h1 className='orange-text font-bold text-md md:text-xl lg:text-5xl text-center'>DOG 	&nbsp;</h1>
            <h1 className='font-bold text-md md:text-xl lg:text-5xl text-center'>TRAINING</h1>
          </div>
          <div>
            <h1 className='font-semibold h-auto text-sm md:text-xl lg:text-5xl text-center'>COMING SOON</h1>
          </div>
        </div>
        <div className=" flex justify-end w-full sm:w-1/2 lg:w-1/3 overflow-hidden relative">
          <img className='object-cover' src="./comingsoonIMG.png" alt="dog holding paw" />
        </div>
      </div>
    </div>

      <div className="lg:w-full w-5/6 h-48 lg:h-96 max-w-5xl mx-auto rounded-xl shadow-2xl overflow-hidden relative hidden lg:block">
        <img className="absolute inset-0 h-full w-full object-cover" src="/dogtrainingbg3.jpg" alt="dog training" />
        <div className="absolute inset-0 bg-yellow-900 bg-opacity-10"></div>
        <div className="flex h-full items-center justify-center relative">
          <div className=" flex flex-col justify-center items-center pl-2 w-1/2 lg:w-2/3 ">
          <div className='flex flex-col my-2 md:flex-row'>
            <h1 className='orange-text font-bold text-md md:text-xl lg:text-5xl text-center'>DOG 	&nbsp;</h1>
            <h1 className='font-bold text-md md:text-xl lg:text-5xl text-center text-white'>TRAINING</h1>
          </div>
          <div>
            <h1 className='font-semibold h-auto text-sm md:text-xl lg:text-5xl text-center text-white'>COMING SOON</h1>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}


export default CommingSoonCard
