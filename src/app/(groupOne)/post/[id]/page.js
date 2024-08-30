// 'use client'
import React from 'react'
import Cart from '../../blog/components/Cart'
import clientPromise from '@/app/lib/mongoroute';
import NextPrev from '../../blog/components/NextPrev';
// import NextPrev from '../../blog/components/NextPrev';


const page = async ({ params }) => {
  const res =await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post =await res.json()


  // const client = await clientPromise;
  // const db = client.db();
  // const id = Number(params.id)
  // console.log(id);

  // const post = await db.collection("posts").findOne({ _id: id });

  console.log(post);
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
