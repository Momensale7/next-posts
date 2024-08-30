import React from 'react'
import Cart from '../../blog/components/Cart'
import NextPrev from '../../blog/components/NextPrev';
import { notFound } from 'next/navigation';


const page = async ({ params }) => {
  try {
    const id = Number(params.id)
    const url = `https://next-posts-ten.vercel.app/api/posts?id=${params.id}`;
    const res = await fetch(url);
    const post =await res.json()
    return (
      <div>
        <div className='grid grid-cols-12 mt-10'>
          <Cart body={post.body} title={post.title} id={post.id} image={post.photo} />
        </div>
        <div className='grid grid-cols-12 mt-3 pb-32'>
        <NextPrev id={id} />
        </div>
        </div>
        
     
    )
  } catch (error) {
    notFound()
  }

}

export default page
