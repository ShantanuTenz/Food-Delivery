import React from 'react'
import AdminSideBar from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import Order from '../Orders/Order'
import Menu from '../Menu/Menu'
import FoodCategory from '../FoodCategory/FoodCategory'
import Ingredients from '../Ingredients/Ingredients'
import Event from '../Event/Event'
import RestaurantDetails from './RestaurantDetails'
import RestaurantDasboard from '../Dashboard/Dasboard'
import CreateMenuForm from '../Menu/CreateMenuForm'

const Admin = () => {
  const handleClose = ()=> {

  }
  return (
    <div>
      <div className='lg:flex justify-between'>
        <div>
          <AdminSideBar handleClose={handleClose} />
        </div>
        <div className='lg:w-[80%]'>
          <Routes>
            <Route path='/' element= {<RestaurantDasboard/>} />
            <Route path='/orders' element= {<Order/>} />
            <Route path='/menu' element= {<Menu/>} />
            <Route path='/category' element= {<FoodCategory/>} />
            <Route path='/ingredients' element= {<Ingredients />} />
            <Route path='/event' element= {<Event />} />
            <Route path='/details' element= {<RestaurantDetails />} />
            <Route path='/add-menu' element= {<CreateMenuForm />} />
          </Routes>
        </div>

      </div>
    </div>
  )
}

export default Admin
