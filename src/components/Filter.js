import React from 'react'
import FilterIcon from './FilterIcon'
import {BiSync,BiFootball} from 'react-icons/bi'
import {FaMountain,FaSwimmingPool} from 'react-icons/fa'
import {AiFillFire,AiFillHome} from 'react-icons/ai'
import {BsFillDoorClosedFill} from 'react-icons/bs'

// Creating an Array here

const sorting = [
    {title: "New", icon: <BiSync/>},
    {title: "Play", icon: <BiFootball/>},
    {title: "Adventure", icon: <FaMountain/>},
    {title: "Pool", icon: <FaSwimmingPool/>},
    {title: "Trending", icon: <AiFillFire/>},
    {title: "Rentals", icon: <AiFillHome/>},
    {title: "Rooms", icon: <BsFillDoorClosedFill/>},
];
const Filter = () => {
  return (
    <div className='p-4 border '>
     <div className='flex justify-center md:gap-2 lg:gap-4 -space-x-2'>
        {sorting.map((obg) => (
            <FilterIcon
             title={obg.title}
             icon = {obg.icon} 
             />))}
     </div>
    </div>
  )
}

export default Filter