"use client"

import { url } from 'inspector'
import Image from 'next/image'
import React, { useState } from 'react'

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/11163069/pexels-photo-11163069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/25542632/pexels-photo-25542632/free-photo-of-coffee-pot-and-coffee-cup-on-window-sill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/17125135/pexels-photo-17125135/free-photo-of-a-cup-of-tea-and-a-bunch-of-chamomile-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/10699054/pexels-photo-10699054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]

const ProductImages = () => {

    const [index, setIndex] = useState(0)

    return (
        <div className=''>
            <div className='h-[500px] relative '>
                <Image 
                src={images[index].url} 
                alt='' 
                fill 
                sizes='50vw' 
                className='object-cover rounded-md  ' />
            </div>
            <div className='flex justify-between gap-4 mt-8 cursor-pointer'>
                {images.map((img, i) => (
                    <div 
                    className='w-1/4 h-32 relative gap-4 mt-8' 
                    key={img.id} 
                    onClick={() => setIndex(i)}>
                        <Image 
                        src={img.url} 
                        alt='' 
                        fill 
                        sizes='50vw' 
                        className='object-cover rounded-md' />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ProductImages
