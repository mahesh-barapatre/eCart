import React from 'react'
import InputCheckpoint from './shared/InputCheckpoint'

function CategorySelector() {
  return (
    <div className='p-5 items-start flex flex-col w-1/5'>
      <InputCheckpoint name={'All'} />
      <InputCheckpoint name={'electronics'} />
      <InputCheckpoint name={'jewelery'} />
      <InputCheckpoint name={"men's clothing"} />
      <InputCheckpoint name={"women's clothing"} />
    </div>
  )
}

export default CategorySelector
