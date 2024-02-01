import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between p-5 lg:p-8 border-red-200 bg-slate-100'>
                <div>
                    {/* <img src="" alt="LOGO" /> */}
                    <h1 className='text-base md:text-lg lg:text-xl'>LOGO</h1>
                </div>
                <div className='flex flex-row'>
                    <ul className='flex flex-row'>
                        <li><h1 className='text-sm md:text-lg lg:text-2xl md:mr-6 mx-2 font-bold'><a href="#">Login</a></h1></li>
                        <li><h1 className='text-sm md:text-lg lg:text-2xl md:mr-6 mx-2 font-bold'><a href="#">About</a></h1></li>
                        <li><h1 className='text-sm md:text-lg lg:text-2xl md:mr-6 ml-2 font-bold'><a href="#">Contact Us</a></h1></li>
                    </ul>
                </div>
            </nav>
    </>
    )
}

export default Navbar