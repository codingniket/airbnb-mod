import React from 'react'
const Rental = ({title,image,price}) => {
  return (
    <div className='mx-2 pb-5'>
      <div className='shadow-md hover:bg-slate-100'>
        <img src={image} alt="" className='rounded p-3 ease-in object-cover'/>
        <div className='p-3 font-bold'>
        {title}
        </div>
        <div className='pl-3 pb-2'>
            {price}
        </div>
      </div>
    </div>
  )
}

export default Rental