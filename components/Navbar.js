'use client'
import { useState } from 'react'
import React from 'react'
import logo from './assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/app/Modal'
import Cart from '@/components/Cart'

const Navbar = () => {

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  }

  const closeHamburger = () => {
    document.getElementById("hamburger").style.left = '1000px'
    setTimeout(() => {
      document.getElementById("hamburger").style.display = 'none'
    }, 100);
  }
  const openHamburger = () => {
    document.getElementById("hamburger").style.display = 'block'
    setTimeout(() => {
      document.getElementById("hamburger").style.left = '0px'
    }, 100);
  }

  const [cartView, setCartView] = useState(false)

  return (
    <nav className='sm:px-16 px-8 z-50 py-3 w-full absolute top-0'>
      <ul className='flex items-center justify-between'>
        <li className='flex space-x-16 items-center justify-between'>
          <Image className='sm:w-[200px] w-[150px]' width={200} src={logo} alt="Logo" />
          <div className='lg:flex hidden items-center space-x-6'>
            <Link href="/">
              <button className='duration-300 text-[#FEE69A]  transition-colors font-bold group rounded-lg'>Home
                <div className='w-full h-[1px] transition-all group-hover:bg-[#FEE69A]'></div>
              </button>
            </Link>
            {(localStorage.getItem("authToken")) ?
              <>
                <Link href="/myorders">
                  <button className=' text-[#FEE69A] font-bold px-6 rounded-lg py-2 group'>My Orders
                    <div className='w-full h-[1px] transition-all group-hover:bg-[#FEE69A]'></div>
                  </button>
                </Link>
              </>
              : ""}
            <Link href="/about">
              <button className='duration-300 text-[#FEE69A]  transition-colors font-bold group rounded-lg'>About us
                <div className='w-full h-[1px] transition-all group-hover:bg-[#FEE69A]'></div>
              </button>
            </Link>
          </div>
        </li>
        <button onClick={openHamburger} className='text-[#FEE69A] lg:hidden border-[1px] border-[#FEE69A] transition-colors duration-300 hover:bg-[#FEE69A] hover:text-black p-2 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
            <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {(localStorage.getItem("authToken")) ?
          <li className='lg:flex space-x-5 hidden'>
            <button onClick={() => setCartView(true)} className='bg-[#FEE69A] text-black hover:bg-transparent hover:text-[#FEE69A] backdrop-blur-lg duration-300 border-[#FEE69A] transition-colors font-bold border-[1px] px-6 rounded-lg py-2'>My Cart</button>

            {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}

            <button onClick={handleLogout} className='duration-300 hover:text-white backdrop-blur-lg text-[#FEE69A] hover:bg-[#ff6565]  transition-colors font-bold border-[1px] border-[#FEE69A] hover:border-[#ff6565] px-6 rounded-lg py-2'>Logout</button>
          </li>
          :
          <>
            <li className='lg:flex space-x-5 hidden'>
              <Link href="/login">
                <button className='bg-[#FEE69A] text-black hover:bg-transparent hover:text-[#FEE69A] duration-300 backdrop-blur-lg border-[#FEE69A] transition-colors font-bold border-[1px] px-6 rounded-lg py-2'>Login</button>
              </Link>
              <Link href="/signup">
                <button className='duration-300 hover:text-black text-[#FEE69A] hover:bg-[#FEE69A] border-[#FEE69A] backdrop-blur-lg transition-colors font-bold border-[1px] px-6 rounded-lg py-2'>Signup</button>
              </Link>
            </li>
          </>
        }
      </ul>
      <div id='hamburger' onClick={closeHamburger} className='bg-[#0f0e19] h-screen w-full hidden absolute lg:hidden left-[1000px] transition-all top-0 px-6 py-5'>
        <button className='absolute text-[#FEE69A] hover:scale-110 transition-transform'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
            <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className='flex flex-col items-end justify-center'>
          <Link href="/">
            <button className='duration-300 text-[#FEE69A] text-[20px]  transition-colors font-bold group rounded-lg'>Home
              <div className='w-full h-[1px] transition-all group-hover:bg-[#FEE69A]'></div>
            </button>
          </Link>
          {(localStorage.getItem("authToken")) ?
            <>
              <Link href="/myorders">
                <button className=' text-[#FEE69A] text-[20px] font-bold rounded-lg py-2 group'>My Orders
                  <div className='w-full h-[1px] transition-all group-hover:bg-[#FEE69A]'></div>
                </button>
              </Link>
            </>
            : ""}
          <Link href="/about">
            <button className='duration-300 text-[#FEE69A] text-[20px]  transition-colors font-bold group rounded-lg'>About us
              <div className='w-full h-[1px] transition-all group-hover:bg-[#FEE69A]'></div>
            </button>
          </Link>
          {(localStorage.getItem("authToken")) ?
            <div className='flex space-x-5 absolute bottom-10'>
              <button onClick={() => setCartView(true)} className='bg-[#FEE69A] text-black hover:bg-transparent hover:text-[#FEE69A] backdrop-blur-lg duration-300 border-[#FEE69A] transition-colors font-bold border-[1px] px-6 rounded-lg py-2'>My Cart</button>

              {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}

              <button onClick={handleLogout} className='duration-300 hover:text-white backdrop-blur-lg text-[#FEE69A] hover:bg-[#ff6565]  transition-colors font-bold border-[1px] border-[#FEE69A] hover:border-[#ff6565] px-6 rounded-lg py-2'>Logout</button>
            </div>
            :
            <>
              <div className='flex space-x-5 absolute bottom-10'>
                <Link href="/login">
                  <button className='bg-[#FEE69A] text-black hover:bg-transparent hover:text-[#FEE69A] duration-300 backdrop-blur-lg border-[#FEE69A] transition-colors font-bold border-[1px] px-6 rounded-lg py-2'>Login</button>
                </Link>
                <Link href="/signup">
                  <button className='duration-300 hover:text-black text-[#FEE69A] hover:bg-[#FEE69A] border-[#FEE69A] backdrop-blur-lg transition-colors font-bold border-[1px] px-6 rounded-lg py-2'>Signup</button>
                </Link>
              </div>
            </>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
