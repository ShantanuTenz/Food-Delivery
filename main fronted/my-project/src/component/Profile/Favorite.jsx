import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { useDispatch, useSelector } from "react-redux";

const Favorite = () => {
  const {auth} = useSelector(store=>store)
  return (
    <div className=''>
      <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
      <div className='flex flex-wrap gap-3 justify-center'>
        {
          auth.favorites.map((item, index)=> <RestaurantCard key={index} item = {item} /> ) 
        }
      </div>
    </div>
  )
}

export default Favorite
