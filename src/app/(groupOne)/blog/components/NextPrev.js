'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
const NextPrev = ({ id }) => {
    const router = useRouter()
    return (
        <div className=" col-span-8 col-start-4">
            <div className='flex justify-center items-center'>
                <button disabled={id===1?true:false}  onClick={() => router.replace(`/post/${id - 1}`)} className='bg-blue-400  hover:bg-blue-600 text-white px-5 py-2 me-2'>prev</button>
                <button onClick={() => router.replace(`/post/${id + 1}`)} className='bg-blue-400 hover:bg-blue-600 text-white px-5 py-2 ms-2'>next</button>
            </div>
        </div>
    )
}

export default NextPrev
