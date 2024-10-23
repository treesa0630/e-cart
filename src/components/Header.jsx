import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const[show , setShow]= useState(false)

  const wishlistArray = useSelector((state)=>state.wishlist)
  console.log(wishlistArray);

  const cartArray = useSelector((state)=>state.cartItem)
  

  const change =()=>{
    setShow(!show)
  }
  

  return (
    <>
      <div className=' bg-violet-900 p-9 w-full mb-5 md:flex'>
        <div className='flex w-full justify-between'>
          <Link to={'/'}><h1 className="text-white flex text-3xl "><FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff", }} className='me-4' />E-CART</h1></Link>

          <button className='border rounded md:hidden p-2' onClick={change} ><FontAwesomeIcon size='xl' icon={faBars} style={{ color: "#ffffff", }}  /></button>
        </div>




       { show &&
        <div className=' ms-16 mt-5 md:hidden flex'>
          <Link to={'/wishlist'}><button className='bg-transparent flex items-center border hover:bg-white hover:text-black text-white  py-2 md:px-3 px-2 ml-2 rounded '> <FontAwesomeIcon icon={faHeart} style={{ color: "#c52020", }} /> <p className='ml-2'>Wishlist</p> <span className='bg-stone-400 rounded ms-2 px-2'>{wishlistArray?.length}</span></button></Link>

          <Link to={'/cart'}><button className='bg-transparent flex items-center  border  hover:bg-white hover:text-black  text-white py-2 px-3  ml-2 rounded '> <FontAwesomeIcon icon={faCartShopping} style={{ color: "#1cd428", }} /> <p className='ml-2'>Cart</p> <span className='bg-stone-400 rounded ms-2 px-2'>{cartArray?.length}</span></button></Link>
        </div>
        }



        <div className=' ms-auto hidden md:inline-flex'>
          <Link to={'/wishlist'}><button className='bg-transparent flex items-center border hover:bg-white hover:text-black text-white  py-2 md:px-3 px-2 ml-2 rounded '> <FontAwesomeIcon icon={faHeart} style={{ color: "#c52020", }} /> <p className='ml-2'>Wishlist</p> <span className='bg-stone-400 rounded ms-2 px-2'>{wishlistArray?.length}</span></button></Link>

          <Link to={'/cart'}><button className='bg-transparent flex items-center  border  hover:bg-white hover:text-black  text-white py-2 px-3  ml-2 rounded '> <FontAwesomeIcon icon={faCartShopping} style={{ color: "#1cd428", }} /> <p className='ml-2'>Cart</p> <span className='bg-stone-400 rounded ms-2 px-2'>{cartArray?.length}</span></button></Link>
        </div>


      </div>
    </>
  )
}

export default Header