import React from 'react'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishlistItem } from '../redux/slices/wishlistSlice'
import { addItemToCart } from '../redux/slices/cartSlice'

function Wishlist() {

  const wishListArray = useSelector((state) => state.wishlist)
  console.log(wishListArray);

  const dispatch = useDispatch()

  const wishes = ()=>{
    dispatch(addItemToCart(item))
    dispatch(deleteWishlistItem(item.id))
  }

  return (
    <>
      <h1 className='heading-w text-center pt-40 mb-20 text-4xl text-violet-900'>Wishlist</h1>


      {wishListArray?.length > 0 ?

        <div className="mt-5 mb-40 px-10 md:grid grid-cols-4">
          {wishListArray?.map((item) => (
            <div className=" p-2">
              <div className='p-3 shadow-2xl rounded'>
                <div className='flex justify-center'> <img src={item?.image} alt="no images" className='w-100 h-44' /></div>
                <h4 className='text-center text-2xl text-gray-600 my-4'>{item?.title.slice(0, 20)}...</h4>
                <p>{item?.description.slice(0, 100)}</p>
                <p className='text-xl'>Price: <span className='text-blue-600'>$ {item?.price}</span></p>

                <div className='flex justify-between mt-3'>
                  <button className='border p-2 rounded bg-red-600 hover:bg-red-500' onClick={() => dispatch(deleteWishlistItem(item?.id))}><FontAwesomeIcon size='xl' icon={faTrash} style={{ color: "white", }} /></button>
                  <button className='border p-2 rounded bg-green-600 hover:bg-green-500' onClick={()=>wishes(item)}><FontAwesomeIcon size='xl' icon={faCartShopping} style={{ color: "white", }} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>


        :

        <div className='w-full mt-10 md:grid grid-cols-3'>
          <div></div>
          <div>
            <img src="https://cdn.dribbble.com/users/530801/screenshots/2357094/present.gif" alt="" className='w-full h-90 mb-20' />
          </div>
          <div></div>
        </div>

      }

    </>
  )
}

export default Wishlist