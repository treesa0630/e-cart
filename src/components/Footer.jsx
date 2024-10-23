
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className='min-h-80 bg-violet-900 p-9 w-100 md:grid lg:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]'>
        <div className="text-white px-1 lg:px-10 mt-10 lg:mt-0">
          <div className="text-white text-3xl"><FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff", }} className='me-4' /><span>E-Cart</span></div>
          <div><p className='mt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, facilis cumque blanditiis recusandae tempore soluta earum commodi fugit rerum. Eius, tempore asperiores nobis consectetur nemo a sit ab labore autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quo temporibus magnam expedita, molestiae eum, recusandae quam voluptas eaque voluptates quia. </p></div>
        </div>

        <div className="text-white px-1 lg:px-10 mt-10 lg:mt-0">
          <div className=" text-3xl">Links</div>
          <div className='mt-6'>
            <ol>
              <Link to="/"><li>Home</li></Link>
              <Link to="/wishlist"><li>Wishlist</li></Link>
              <Link to="/cart"><li>Cart</li></Link>
            </ol>
          </div>
        </div>

        <div className="text-white px-1 lg:px-10 mt-10 lg:mt-0">
          <div className=" text-3xl">Guides</div>
          <div className='mt-6'>
            <ol>
              <li>React</li>
              <li>React Bootstrap</li>
              <li>Bootswatch</li>
            </ol>
          </div>
        </div>

        <div className="text-white px-1 lg:px-10 mt-10 lg:mt-0">
          <div className=" text-3xl">Guides</div>
          <div className='row mt-4 flex justify-between'>
            <input className='form-control w-5/6 rounded pl-1 text-black' type="text" placeholder='Email ID' name="" id="" />
            <button className='bg-orange-600 p-1 ml-2 rounded '>Subscribe</button>
          </div>

          <div className='row mt-4 flex justify-between'>
          <FontAwesomeIcon size='2xl' icon={faTwitter} style={{color: "#ffffff",}} />
          <FontAwesomeIcon size='2xl' icon={faLinkedin} style={{color: "#ffffff",}} />
          <FontAwesomeIcon size='2xl' icon={faFacebook} style={{color: "#ffffff",}} />
          <FontAwesomeIcon size='2xl' icon={faInstagram} style={{color: "#ffffff",}} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer