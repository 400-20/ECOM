import { wixClientServer } from '@/lib/wixClientServer';
import { products } from '@wix/stores';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const PRODUCT_PER_PAGE = 8;

const ProductList = async ({ 
  categoryId,
  limit 
}: { 
  categoryId: string;
 limit?: number;
 }) => {

  const wixClient = await wixClientServer();

  const productQuery = wixClient.products.queryProducts().eq('collectionIds', categoryId).limit(limit || PRODUCT_PER_PAGE)
    // .find();


    const res = await productQuery.find();
  return (
    <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap  mt-12'>
      {res.items.map((product: products.Product) => (

        <Link
          href={"/" + product.slug}
          className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
          key={product._id}>
          <div className='relative w-full h-80'>
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=''
              fill
              sizes='25vw'
              className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' />

            {product.media?.items && (
              <Image
              src={product.media?.items[1]?.image?.url || "/product.png"}
              alt=''
              fill
              sizes='25vw'
              className='absolute object-cover rounded-md' />)}
          </div>
          <div className='flex justify-between'>
            <span className='font-medium '>{product.name}</span>
            <span className=''>₹{product.price?.price}</span>
          </div>
          <div className='text-sm text-gray-500' dangerouslySetInnerHTML={product.description ? { __html: product.description } : undefined}></div>
          
          <button className='rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white w-max'>Add To Cart</button>
        </Link>


      ))}
    </div>
  )
}

export default ProductList
