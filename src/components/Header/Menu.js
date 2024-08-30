'use client'
import Link from 'next/link'
import React from 'react'
import { menuItems } from './menuItems'
import { usePathname } from 'next/navigation'

const Menu = () => {
    const path =usePathname()
  return (
    <>
    {menuItems.map((item)=>(
      <Link href={item.href} className={`${path == item.label ? styles.active : ''} me-4 hover:text-blue-300 hover:cursor-pointer`}>{item.label} </Link>
        ))}
 
      </>
  )
}

export default Menu
