import React from 'react'
import { useDispatch } from 'react-redux'
import { customize } from '../../app/sortSlice'

function InputCheckpoint({name}) {

  const dispatch = useDispatch()

  
  const getItemCategory = async(name)=>{
    let url="";

    if(name!=="All"){
      url =  `/category/${name}`
    }
    await fetch(`https://fakestoreapi.com/products${url}`)
    .then(res=>res.json())
    // .then(json=>console.log(typeof(json)))
    .then(json=>dispatch(customize(json)))
  }

  return (
    <div className='flex text-l justify-center items-center m-2'>
        <input
        onClick={(e)=>{
          if(e.target.checked){
            // console.log("object")
            getItemCategory(name);
          }
        }}
        type="radio" name='selector' id={name} />
        <label htmlFor={name}>{name}</label>
    </div>
  )
}

export default InputCheckpoint
