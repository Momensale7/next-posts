'use client'
import React, { useState } from 'react'
const Like = () => {
    const [count,setCount]=useState(3)
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}} className='text-white rounded bg-blue-600 px-5 block ms-auto'>{count} <i class="fa-regular fa-thumbs-up"></i></button>
    </div>
  )
}

export default Like
