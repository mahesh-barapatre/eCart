import React from 'react'
import { useNavigate } from 'react-router-dom'
import Counter from './Counter'

function Navbar() {

  const navigate = useNavigate()

  return (
    <div className='h-1/6'>
    <header className=' w-full flex justify-around items-center'>
      <div className="text-4xl font-bold ">eCart</div>
      <nav className='flex justify-end p-3 '>
        <div 
        onClick={()=>navigate("/")}
        className='mr-2 p-2 rounded-lg font-bold border border-solid hover:scale-105 hover:bg-slate-100 cursor-pointer'>Home</div>
        <div 
         onClick={()=>navigate("/cart")}
        className='p-2 rounded-lg font-bold border border-solid hover:scale-105 hover:bg-slate-100 cursor-pointer'>Cart</div>
        <Counter/>
      </nav>
    </header>
        <div className="h-1 w-full bg-black"></div>
    </div>

  )
}

export default Navbar
