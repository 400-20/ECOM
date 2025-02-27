"use client"

import Image from 'next/image'
import React from 'react'

const CartModal = () => {
  const cartItems = true
  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#fff] top12 right-0 flex flex-col gap-6 z-20'>
      {!cartItems ? (
        <div className=''>Cart Is Empty</div>
      ) : (
        <>
        <h2 className='text-xl '>Shopping Cart</h2>
        {/* // list  */}
        <div className='flex flex-col gap-8'>
          {/* item   */}
        <div className='flex gap-4'>
            <Image src="https://images.pexels.com/photos/18523694/pexels-photo-18523694/free-photo-of-cup-of-coffee-next-to-a-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={72} height={96} className='object-cover rounded-md ' />
            <div className='flex flex-col justify-center w-full'>
              {/* top */}
              <div className=''>
                {/* title */}
                <div className='flex items-center justify-between gap-8'>
                  <h3 className='font-semibold '>Product Name</h3>
                  <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                </div>
                {/* desc  */}
                <div className='text-sm text-gray-500 '>
                  Available
                </div>
              </div>
              {/* bottom  */}
              <div className='flex justify-between text-sm'>
                <span className='text-gray-500'>Qty, 2</span>
                <span className='text-blue-500'>Remove</span>
              </div>
            </div>
          </div>



          {/* item   */}
        <div className='flex gap-4'>
            <Image src="https://images.pexels.com/photos/18523694/pexels-photo-18523694/free-photo-of-cup-of-coffee-next-to-a-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={72} height={96} className='object-cover rounded-md ' />
            <div className='flex flex-col justify-center w-full'>
              {/* top */}
              <div className=''>
                {/* title */}
                <div className='flex items-center justify-between gap-8'>
                  <h3 className='font-semibold '>Product Name</h3>
                  <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                </div>
                {/* desc  */}
                <div className='text-sm text-gray-500 '>
                  Available
                </div>
              </div>
              {/* bottom  */}
              <div className='flex justify-between text-sm'>
                <span className='text-gray-500'>Qty, 2</span>
                <span className='text-blue-500'>Remove</span>
              </div>
            </div>
          </div>
        </div>

        {/* // BOTTOM  */}
        <div className=''>
          <div className='flex items-center justify-between font-semibold'>
            <span className=''>Subtotal</span>
            <span className=''>$49</span>
          </div>
          <p className='text-gray-500 '>
Shipping and Taxes calculated at Checkout.
          </p>
          <div className='flex justify-between text-sm '>
            <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Carts</button>
            <button className='rounded-md py-3 px-4 bg-black text-white  '>Checkout</button>
          </div>
        </div>
        </>
      )}

    </div>


  )
}

export default CartModal
