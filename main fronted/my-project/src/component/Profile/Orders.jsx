import React, { useEffect } from 'react'
import OrderCart from './OrderCart'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../State/store.js';
import { getUsersOrder } from '../../State/Order/Action.js';

const Orders = () => {
  const {auth, cart, order} = useSelector( (store) => store );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt"); 

  useEffect(() => {
    dispatch(getUsersOrder(jwt));
  }, [auth.jwt])

  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-xl text-center py-7 font-semibold'>My orders</h1>
      <div className='space-y-5 w-full lg:w-1/2'>
        {
          order.orders.map((order) => order.items.map((item)=> <OrderCart order={order} item = {item} />))
        }
      </div>
    </div>
  )
}

export default Orders
