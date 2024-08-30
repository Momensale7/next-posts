import Link from 'next/link'
import React from 'react'
import Like from './Like'
import Image from 'next/image'
const Cart = ({body,title,id,image}) => {
    return (
        <div className=" col-span-8 col-start-4   mb-8  bg-slate-200 rounded-lg shadow-lg hover:shadow-[0_10px_25px_rgba(45,145,236,0.4)] transition-shadow duration-300 p-6">
            {/* <img src={image} className='w-screen h-[200px]'/> */}
            <div className="text-center flex items-center justify-center">
            <Image width={300} height={100} src={image}/>
            </div>
            <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
            <p className="text-gray-600 text-sm mb-4">{body}</p>
            <Link href={`post/${id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                Read More
            </Link>
            <Like/> 
            
        </div>
    )
}

export default Cart
