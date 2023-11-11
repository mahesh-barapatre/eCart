import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setItem} from "../../app/itemDetailSlice"

function CartItem({title, price, image, func, Id}) {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  return (
    <div className='bg-blue-50 m-3 p-3 mb-2 h-60 w-40 flex justify-between hover:scale-105 transition ease-in-out duration-500 flex-col'>
        <img 
        onClick={()=>{
          dispatch(setItem(Id));
          navigate("/item")
        }}
        className='h-40 w-40' src={image} alt="electronics"></img>
      <div className='h-15 overflow-hidden w-full font-semibold text-overflow-ellipsis '>
        {title}
      </div>
      <div className='h-5 w-full flex justify-around items-center'>
        <div className='border border-solid border-blue-100 bg-blue-100 w-1/2 text-center'>
        ${price} 
        </div>
        <button 
        onClick={func}
        className='text-white w-1/2 p-1 text-sm bg-red-600'>Remove</button>
      </div>     
      
    </div>
  )
}

export default CartItem