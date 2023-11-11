import React from 'react'
import Products from './Products'
import CategorySelector from './CategorySelector'

function Home() {
  return (
    <div className='h-5/6 w-full flex'>
      <CategorySelector/>
      <div className="mb-5 h-full w-0.5 bg-black"></div>
      <Products/>
    </div>
  )
}

export default Home
