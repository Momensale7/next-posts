import Link from 'next/link'
import React from 'react'
import Cart from './components/Cart'
import clientPromise from '@/app/lib/mongoroute';
  // & ssg default
  // * ssr
  // export const fetchCashe = "force-no-store"
  // ^isr
  // export const revalidate=5

const page = async() => {
  try {
    const res =await fetch("https://next-posts-ten.vercel.app/api/posts")

    var posts =await res.json()
  } catch (error) {
  }
// const client = await clientPromise;
//   const db = client.db("next");
//   const posts = await db.collection("posts").find({}).toArray();
//   console.log("this is posts",posts);
  return (
    <div>
      <div className='grid grid-cols-12 mt-10 mb-10'>
        {posts?.map((post,index)=>{
          return <Cart body={post.body} key={index} title={post.title} id={post._id} image={post.photo}/>
        })}
      </div>
    </div>
  )
}

export default page
