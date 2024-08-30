import React from 'react'
import Cart from '../../blog/components/Cart'
import NextPrev from '../../blog/components/NextPrev';


const page = async ({ params }) => {
  const url = `https://next-posts-ten.vercel.app/api/posts?id=${params.id}`;
  const res = await fetch(url);
  const post =await res.json()
  const id = Number(params.id)
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
}

export default page
