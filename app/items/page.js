'use client'
import React from 'react'
import Image from 'next/image'
import card1 from '@/components/assets/card1.jpg'
import Quantity from '@/components/Quantity.js'
import Quantityperpiece from '@/components/Quantityperpiece.js'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

const Items = () => {
    
    const [visibleCount, setvisibleCount] = useState(4)
    const showPizzas = () => {
        setvisibleCount(prevCount => Math.min(prevCount + 4, Pizzas.length));
    }
    const showlesspizzas = () => {
        setvisibleCount(4);

    }

    return (
        <div className='bg-[#0f0e19]'>
            <div className='p-8 mt-[90px] flex flex-col space-y-10 justify-center text-[#FEE69A]'>
                <div className='text-[40px] font-[900] flex justify-between'>
                    <span>
                        Pizzas
                    </span>
                    <div className='flex space-x-3'>
                        {visibleCount < Pizzas.length && (
                            <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show more
                            </button>
                        )}
                        {visibleCount !== 4 && (
                            <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <div className=' grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8 cards h-[30rem] overflow-auto scroll-smooth rounded-xl bg-[#141722] py-3 pr-3'>
                    {Pizzas.slice(0, visibleCount).map((item, index) => {
                        return (<>
                            <div key={index} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start bg-[#0f0e19]'>
                                <Image className='rounded-t-xl' width={350} src={card1} alt="" />
                                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                                    <div className='flex justify-between'>
                                        <Quantity />
                                        <Quantityperpiece />
                                    </div>
                                    <span className='font-[800] leading-7 text-[33px]'>
                                        {item.name}
                                    </span>
                                    <span className='font-[600]'>
                                        {item.rate}
                                    </span>
                                </div>
                            </div></>)
                    })}
                </div>
            </div>
            <div className='p-10 flex flex-col space-y-10 justify-center text-[#FEE69A]'>
                <div className='text-[40px] font-[900] flex justify-between'>
                    <span>
                        Burgers
                    </span>
                    <div className='flex space-x-3'>
                        {visibleCount < burgers.length && (
                            <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show more
                            </button>
                        )}
                        {visibleCount !== 4 && (
                            <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <div className=' grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8 cards h-[30rem] overflow-auto scroll-smooth rounded-xl bg-[#141722] py-3 pr-3'>
                    {burgers.slice(0, visibleCount).map((item, index) => {
                        return (<>
                            <div key={index} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start bg-[#0f0e19]'>
                                <Image className='rounded-t-xl' width={350} src={card1} alt="" />
                                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                                    <div className='flex justify-between'>
                                        <Quantity />
                                        <Quantityperpiece />
                                    </div>
                                    <span className='font-[800] leading-7 text-[33px]'>
                                        {item.name}
                                    </span>
                                    <span className='font-[600]'>
                                        {item.rate}
                                    </span>
                                </div>
                            </div></>)
                    })}
                </div>
            </div>
            <div className='p-10 flex flex-col space-y-10 justify-center text-[#FEE69A]'>
                <div className='text-[40px] font-[900] flex justify-between'>
                    <span>
                        Beverages
                    </span>
                    <div className='flex space-x-3'>
                        {visibleCount < beverages.length && (
                            <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show more
                            </button>
                        )}
                        {visibleCount !== 4 && (
                            <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <div className=' grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8 cards h-[30rem] overflow-auto scroll-smooth rounded-xl bg-[#141722] py-3 pr-3'>
                    {beverages.slice(0, visibleCount).map((item, index) => {
                        return (<>
                            <div key={index} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start bg-[#0f0e19]'>
                                <Image className='rounded-t-xl' width={350} src={card1} alt="" />
                                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                                    <div className='flex justify-between'>
                                        <Quantity />
                                        <Quantityperpiece />
                                    </div>
                                    <span className='font-[800] leading-7 text-[33px]'>
                                        {item.name}
                                    </span>
                                    <span className='font-[600]'>
                                        {item.rate}
                                    </span>
                                </div>
                            </div></>)
                    })}
                </div>
            </div>
            <div className='p-10 flex flex-col space-y-10 justify-center text-[#FEE69A]'>
                <div className='text-[40px] font-[900] flex justify-between'>
                    <span>
                        Desserts
                    </span>
                    <div className='flex space-x-3'>
                        {visibleCount < desserts.length && (
                            <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show more
                            </button>
                        )}
                        {visibleCount !== 4 && (
                            <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <div className=' grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8 cards h-[30rem] overflow-auto scroll-smooth rounded-xl bg-[#141722] py-3 pr-3'>
                    {desserts.slice(0, visibleCount).map((item, index) => {
                        return (<>
                            <div key={index} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start bg-[#0f0e19]'>
                                <Image className='rounded-t-xl' width={350} src={card1} alt="" />
                                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                                    <div className='flex justify-between'>
                                        <Quantity />
                                        <Quantityperpiece />
                                    </div>
                                    <span className='font-[800] leading-7 text-[33px]'>
                                        {item.name}
                                    </span>
                                    <span className='font-[600]'>
                                        {item.rate}
                                    </span>
                                </div>
                            </div></>)
                    })}
                </div>
            </div>
            <div className='p-10 flex flex-col space-y-10 justify-center text-[#FEE69A]'>
                <div className='text-[40px] font-[900] flex justify-between'>
                    <span>
                        Salads
                    </span>
                    <div className='flex space-x-3'>
                        {visibleCount < salads.length && (
                            <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show more
                            </button>
                        )}
                        {visibleCount !== 4 && (
                            <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <div className=' grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8 cards h-[30rem] overflow-auto scroll-smooth rounded-xl bg-[#141722] py-3 pr-3'>
                    {salads.slice(0, visibleCount).map((item, index) => {
                        return (<>
                            <div key={index} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start bg-[#0f0e19]'>
                                <Image className='rounded-t-xl' width={350} src={card1} alt="" />
                                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                                    <div className='flex justify-between'>
                                        <Quantity />
                                        <Quantityperpiece />
                                    </div>
                                    <span className='font-[800] leading-7 text-[33px]'>
                                        {item.name}
                                    </span>
                                    <span className='font-[600]'>
                                        {item.rate}
                                    </span>
                                </div>
                            </div></>)
                    })}
                </div>
            </div>
            <div className='p-10 flex flex-col space-y-10 justify-center text-[#FEE69A]'>
                <div className='text-[40px] font-[900] flex justify-between'>
                    <span>
                        Sandwiches
                    </span>
                    <div className='flex space-x-3'>
                        {visibleCount < sandwiches.length && (
                            <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show more
                            </button>
                        )}
                        {visibleCount !== 4 && (
                            <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <div className=' grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8 cards h-[30rem] overflow-auto scroll-smooth rounded-xl bg-[#141722] py-3 pr-3'>
                    {sandwiches.slice(0, visibleCount).map((item, index) => {
                        return (<>
                            <div key={index} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start bg-[#0f0e19]'>
                                <Image className='rounded-t-xl' width={350} src={card1} alt="" />
                                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                                    <div className='flex justify-between'>
                                        <Quantity />
                                        <Quantityperpiece />
                                    </div>
                                    <span className='font-[800] leading-7 text-[33px]'>
                                        {item.name}
                                    </span>
                                    <span className='font-[600]'>
                                        {item.rate}
                                    </span>
                                </div>
                            </div></>)
                    })}
                </div>
            </div>
            <div className='p-10 flex flex-col space-y-10 justify-center text-[#FEE69A]'>
                <div className='text-[40px] font-[900] flex justify-between'>
                    <span>
                        Wraps
                    </span>
                    <div className='flex space-x-3'>
                        {visibleCount < wraps.length && (
                            <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show more
                            </button>
                        )}
                        {visibleCount !== 4 && (
                            <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <div className=' grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8 cards h-[30rem] overflow-auto scroll-smooth rounded-xl bg-[#141722] py-3 pr-3'>
                    {wraps.slice(0, visibleCount).map((item, index) => {
                        return (<>
                            <div key={index} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start  bg-[#0f0e19]'>
                                <Image className='rounded-t-xl' width={350} src={card1} alt="" />
                                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                                    <div className='flex justify-between'>
                                        <Quantity />
                                        <Quantityperpiece />
                                    </div>
                                    <span className='font-[800] leading-7 text-[33px]'>
                                        {item.name}
                                    </span>
                                    <span className='font-[600]'>
                                        {item.rate}
                                    </span>
                                </div>
                            </div></>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Items
