import React from 'react'
import logo from '../assets/logo.png' 
import {TbWorld} from 'react-icons/tb'
import {GoThreeBars} from 'react-icons/go'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineSearch} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='border flex items-center justify-between'>
        {/* Left */}
        <div className='flex p-6'>
         <img src={logo} alt="brand-logo" className='object-cover w-32'/>
        </div>

         {/* Middle */}
        <div className='hidden lg:flex relative shadow-sm shadow-gray-500 border rounded-full items-center justify-center'>
           <input type={"search"} 
           placeholder="" 
           className='py-2.5 w-[20rem] rounded-full outline-0'/>
           <div className='absolute flex justify-between w-full pr-16 pl-6 font-semibold text-gray-500'>
           <button className='w-full'>Place</button>
           <button className='border-x border-l px-6'>Time</button>
           <button className='w-full text-gray-600/60 pl-2'>Search Now</button>
           </div>
           <div className='bg-[#ff5a60] p-2 rounded-full mr-2'>
            <AiOutlineSearch className='text-white w-full  '/>
           </div>
         </div>

        
        {/* Right */}   
         <div className='flex  items-center pr-3 font-semibold text-gray-500'>
          <p className=''>Airbnb Home</p>

          <div className='mx-8'>
          <TbWorld className=''/>
          </div>

          
          <div className='flex rounded-full bg-slate-100 p-2 gap-2 shadow-md shadow-gray-400 hover:bg-white'>
             <GoThreeBars className='text-slate-400 h-4 w-4'/>
             <CgProfile className='text-slate-400 h-4 w-4' />
          </div>
         </div>
    </div> 
  )
}

export default Navbar;