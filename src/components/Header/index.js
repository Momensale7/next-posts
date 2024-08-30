'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from "./Header.module.css"
import Menu from './Menu'

const Header = () => {
  const path = usePathname()
  return (
    <nav className="bg-slate-900 py-2 fixed top-0 left-0 right-0 z-10  ">
      <div className="navbar container w-[90%] m-auto flex justify-between items-center">
        <div className="text-blue-500 ">
          Logo
        </div>
        <ul className="flex items-center justify-between text-blue-500 ">
          <Menu/>

        </ul>
      </div>
    </nav>
  )
}

export default Header
