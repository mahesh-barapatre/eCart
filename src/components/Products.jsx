import React, { useEffect } from 'react'
import Item from './shared/Item'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../app/counterSlice'
import { add } from '../app/cartSlice'
import { customize } from '../app/sortSlice'


function Products() {
    
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.sort.value)

    useEffect(()=>{
        try {
            const getData = async() =>{
                await fetch('https://fakestoreapi.com/products?')
                .then(res=>res.json())
                // .then(json=>console.log(typeof(json)))
                .then(json=>dispatch(customize(json)))
                
            }
            getData();

        } catch (error) {
            console.log("error!!",error)
        }
    },[])

  return (
    <div className='flex overflow-auto flex-wrap justify-evenly h-full w-4/5 p-3'>
        
            
            {
                products.map((item)=>{
                    return(

                        <Item 
                        func={()=>{
                            dispatch(increment());
                            dispatch(add(item));
                        }}
      Id={item.id}                  
      key={item.id}                  
      image={item.image}
      title={item.title}
      price={item.price}
      />
      
      )
            })
        }
        
    </div>
  )
}

export default Products
