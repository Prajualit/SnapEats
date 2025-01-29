'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import logo from './assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/app/Modal'
import Cart from '@/components/Cart'

const Navbar = () => {
  const [authToken, setAuthToken] = useState(null)
  const [cartView, setCartView] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Access localStorage only after component mounts
    setAuthToken(typeof window !== 'undefined' ? localStorage.getItem("authToken") : null)
  }, [])

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("authToken")
      setAuthToken(null)
      window.location.reload()
    }
  }

  const closeHamburger = () => {
    if (typeof window !== 'undefined') {
      const hamburger = document.getElementById("hamburger")
      if (hamburger) {
        hamburger.style.left = '1000px'
        setTimeout(() => {
          hamburger.style.display = 'none'
        }, 100)
      }
    }
  }

  const openHamburger = () => {
    if (typeof window !== 'undefined') {
      const hamburger = document.getElementById("hamburger")
      if (hamburger) {
        hamburger.style.display = 'block'
        setTimeout(() => {
          hamburger.style.left = '0px'
        }, 100)
      }
    }
  }

  if (!isMounted) return null

  return (
    <nav className='sm:px-16 px-8 z-50 py-3 w-full absolute top-0'>
      <ul className='flex items-center justify-between'>
        {/* ... rest of your JSX ... */}
        
        {/* Updated conditional rendering */}
        {authToken ? (
          <li className='lg:flex fixed right-5 top-4 space-x-5  hidden'>
            <button onClick={() => setCartView(true)} className='bg-[#FEE69A] text-black hover:bg-transparent hover:text-[#FEE69A] backdrop-blur-lg duration-300 border-[#FEE69A] transition-colors font-bold border-[1px] px-6 rounded-lg py-2'>
              My Cart
            </button>
            {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
            <button onClick={handleLogout} className='duration-300 hover:text-white backdrop-blur-lg text-[#FEE69A] hover:bg-[#ff6565] transition-colors font-bold border-[1px] border-[#FEE69A] hover:border-[#ff6565] px-6 rounded-lg py-2'>
              Logout
            </button>
          </li>
        ) : (
          <li className='lg:flex space-x-5 hidden'>
            <Link href="/login">
              <button className='bg-[#FEE69A] text-black hover:bg-transparent hover:text-[#FEE69A] duration-300 backdrop-blur-lg border-[#FEE69A] transition-colors font-bold border-[1px] px-6 rounded-lg py-2'>
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className='duration-300 hover:text-black text-[#FEE69A] hover:bg-[#FEE69A] border-[#FEE69A] backdrop-blur-lg transition-colors font-bold border-[1px] px-6 rounded-lg py-2'>
                Signup
              </button>
            </Link>
          </li>
        )}
        
        {/* ... rest of your JSX ... */}
      </ul>
    </nav>
  )
}

export default Navbar