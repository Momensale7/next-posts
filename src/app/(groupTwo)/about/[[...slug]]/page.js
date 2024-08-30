import React from 'react'

const page = ({params}) => {
  console.log(params);
  
  return (
    <div>
      hello catch all
      <ul>routes</ul>
      {params.slug?.map((route)=>(<li>{route}</li>))}
      
    </div>
  )
}

export default page
