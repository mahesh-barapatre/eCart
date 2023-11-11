import React, { useEffect, useState } from 'react'
import CartItem from './shared/CartItem'
import { decrement } from '../app/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../app/cartSlice';

function Cart() {

    const dispatch = useDispatch();
    const cartList = useSelector((state)=>state.cart.value);

    const [price, setPrice] = useState(0);

    useEffect(() => {
      let sum = 0;
    
      for (let i = 0; i < cartList.length; i++) {
        sum += cartList[i].payload.price;
      }
    
      // Update the price after the loop
      setPrice(sum);
    }, [cartList]);

  return (
  <>
  
    <div className='p-5 text-3xl font-bold items-start '>
    total price:
    {price}
  </div>

    <div className='flex overflow-auto m-3 flex-wrap justify-start w-4/5 p-3'>
    {
        cartList.map((item)=>{
                return(
                    <CartItem
                    func={()=>{
                        dispatch(decrement());
                        dispatch(remove(item));
                    }}
                    Id={item.payload.id}
  key={item.payload.id}                  
  image={item.payload.image}
  title={item.payload.title}
  price={item.payload.price}
  />
  
  )
        })
    }

</div>
</>
  )
}

export default Cart
