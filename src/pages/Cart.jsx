import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice'

function Cart() {

  const [total, setTotal]=useState(0)

  const dispatch = useDispatch((state)=>state.cartItem)

  const cartArray = useSelector((state)=>state.cartItem)
  console.log(cartArray);

  const navigate = useNavigate()

  const getTotal=()=>{
    if (cartArray?.length>0) 
      {
        setTotal(cartArray?.map((items)=>items.price).reduce((n1,n2)=>n1+n2))
      }
  }

  console.log(total);
  
  const handleCheckout= ()=>{
    alert('order placed successfully')
    dispatch(emptyCart())
    navigate('/')

  }


  useEffect(()=>{
    getTotal()
  },[cartArray])
  
  return (
    <>
    <div className='pt-32'>
      <h1 className='text-center text-4xl text-violet-900'>Cart</h1>
      {cartArray.length > 0 ?
      <div className='md:grid grid-cols-[2fr_1fr] my-10'>
        
          <div className=' md:py-5 md:px-20'>
          <table className='w-full border border-gray-400'>
            <thead>
              <tr>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>#</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Tittle</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Image</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Price</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Action</th>
              </tr>
            </thead>
            <tbody>
             {
             cartArray.map((items , index)=>(
              <tr>
              <td className='border border-gray-100 p-3 '>{index+1}</td>
              <td className='border border-gray-100 p-3'>{items?.title}</td>
              <td className='border border-gray-100 p-3 flex justify-center'><img src={items?.image} alt="no image" style={{width:'100px',height:'100px'}} /></td>
              <td className='border border-gray-100 p-3'>${items?.price}</td>
              <td className='border border-gray-100 p-3 text-center'>
                <button onClick={()=>dispatch(removeCartItem(items?.id))} className='bg-red-700  p-3 text-white rounded'><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
             )) }
            </tbody>
          </table>
        </div>
        
        <div className='pt-5 px-3'>
          <div className='p-3 shadow-lg'>
            <h1 className='text-center text-3xl'>Cart Summary</h1>
            <p className='mt-4 text-xl'>Total number of products : {cartArray?.length}</p>
            <p className='mt-2 text-xl'>Grand Total: ${total}</p>
            <button onClick={handleCheckout} className='w-full bg-green-600 text-white p-3 mt-4 hover:bg-white hover:border hover:border-green-600 hover:text-green-600'>Check Out</button>

          </div>
        </div>
      </div>


      :
      <div className='w-full md:grid grid-cols-3'>
        <div></div>
        <div className='flex justify-center items-center flex-col my-10'>
          <img src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt=""  className='w-full h-82' />
          <p className='text-center text-violet-800 mb-20 mt-4 text-xl'>Your Cart is <span className='text-red-600'>EMPTY</span></p>
          <Link to={'/'}><button className='bg-green-600 text-white p-3 rounded mt-3'><FontAwesomeIcon icon={faBackward} className='me-2'/>Start Shopping</button></Link>
        </div>
        <div></div>
      </div>
}
    </div>
    </>
  )
}

export default Cart
