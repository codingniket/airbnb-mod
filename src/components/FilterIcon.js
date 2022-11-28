import React from 'react'

const FilterIcon = ({icon,title}) => {
  return (
    <div className='font-bold lg:text-[18px] md:text-[18px] flex items-center lg:gap-3 md:gap-3 hover:bg-slate-100 rounded-full p-3 text-[12px] gap-1' >
    {icon}
    {title}
    </div>
  )
}

export default FilterIcon