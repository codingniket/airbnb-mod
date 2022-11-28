import React from 'react'
import cold from '../assets/cold.jpg'
import house from '../assets/Mansion.jpg'
import pool from '../assets/Pool.jpg'
import Rental from './Rental.js'

const Card = () => {
  const rentals = [
    {title:"Capetown, NRY", image: cold, price:"$5000"},
    {title:"Newyork, USA", image: house, price:"$10000"},
    {title:"CapeTown,SA", image: cold, price:"$5000"},
    {title:"Kerela,IND", image: pool, price:"$200"},
    {title:"CapeTown,SA", image: cold, price:"$5000"},
    {title:"Kerela,IND", image: pool, price:"$200"},
    {title:"CapeTown,SA", image: cold, price:"$5000"},
    {title:"Newyork, USA", image: house, price:"$10000"},];
  return (
    <div className='p-6'>
    <div className='grid grid-cols-1 gap-3 lg:grid-cols-4 md:grid-cols-2'>
    {rentals.map((obj)=><Rental 
       title={obj.title} 
       image={obj.image}
       price={obj.price}
         />
       )}
    </div>
      
    </div>
  )
}

export default Card