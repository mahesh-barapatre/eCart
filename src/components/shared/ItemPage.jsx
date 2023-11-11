import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function ItemPage() {
    const [item, setItem]=useState({})

    const id = useSelector((state)=>state.itemDetail.value)

    useEffect(()=>{
      // console.log(id.payload)
      const itemId = id.payload
        const getItem= async()=>{
            await fetch(`https://fakestoreapi.com/products/${itemId}`)
            .then(res=>res.json())
            .then(json=>setItem(json))
        }
        getItem();  
        // console.log(item)    
    },[])


  return (
    <div className='h-5/6 flex justify-evenly'>
      <div className='p-10'>
      <img className='h-5/6' src={item.image} alt="product" />
      </div>
      <div className='w-3/5 flex flex-col justify-center p-10'>
          <div className='mb-3 font-bold text-3xl'>{item.title}</div>
          <div className='mb-3 font-bold text-2xl'>{item.category}</div>
          <div className='mb-3 text-xl'>{item.description}</div>
          <div className='font-semibold text-2xl'>${item.price}</div>
      </div>
    </div>
  )
}

export default ItemPage
