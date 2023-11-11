import React from 'react'
import { useSelector } from 'react-redux'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)

  return (
  <div className='rounded-full border-none text-white text-center h-7 w-7 bg-blue-600'>{count}</div>
  )
}