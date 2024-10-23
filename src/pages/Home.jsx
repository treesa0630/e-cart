import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../hooks/usefetch'
import { useDispatch } from 'react-redux'
import { addWishlistItem } from '../redux/slices/wishlistSlice'
import { addItemToCart } from '../redux/slices/cartSlice'

function Home() {

  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);

  const dipatch = useDispatch()


  return (
    <>
      <div className="pt-40 mb-40 px-10 md:grid grid-cols-4">

        {
          data?.length > 0 &&
          data?.map((items) => (
            <div className="p-2">
              <div className='p-3 rounded shadow-lg'>
                <div className='flex justify-center'> <img src={items?.image} alt="no images" className='w-100 h-44' /></div>
                <h4 className='text-center text-2xl text-gray-600 my-4'>{items?.title.slice(0, 20)}...</h4>
                <p className='text-justify'>{items?.description.slice(0, 100)}</p>
                <p className='text-2xl'>Price: <span className='text-violet-900'>{items?.price}</span></p>
                <div className='flex justify-between'>
                  <button className='p-3 bg-red-700 rounded text-white' onClick={() => dipatch(addWishlistItem(items))}><FontAwesomeIcon icon={faHeart} /></button>
                  <button className=' p-3 bg-green-700 rounded text-white' onClick={()=>dipatch(addItemToCart(items))}><FontAwesomeIcon icon={faCartShopping} /></button>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default Home