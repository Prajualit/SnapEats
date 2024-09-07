'use client'
import React from 'react'
import Image from 'next/image'
import card1 from '@/components/assets/card1.jpg'
import Quantity from '@/components/Quantity.js'
import PizzaQuantityperpiece from '@/components/PizzaQuantityperpiece'
import Quantityperpiece from '@/components/Quantityperpiece'
import { useState, useEffect } from 'react'

const Fooditems = () => {
    const [foodCat, setFoodCat] = useState([])
    const [Pizzas, setPizzas] = useState([])
    const [Burgers, setBurgers] = useState([])
    const [Beverages, setBeverages] = useState([])
    const [Desserts, setDesserts] = useState([])
    const [Wraps, setWraps] = useState([])

    const loadPizzas = async () => {
        let response = await fetch("http://localhost:5000/api/pizzas",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        response = await response.json();
        setPizzas(response)
    }
    const loadBurgers = async () => {
        let response = await fetch("http://localhost:5000/api/burgers",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        response = await response.json();
        setBurgers(response)
    }
    const loadBeverages = async () => {
        let response = await fetch("http://localhost:5000/api/beverages",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        response = await response.json();
        setBeverages(response)
    }
    const loadDesserts = async () => {
        let response = await fetch("http://localhost:5000/api/desserts",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        response = await response.json();
        setDesserts(response)
    }
    const loadWraps = async () => {
        let response = await fetch("http://localhost:5000/api/wraps",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        response = await response.json();
        setWraps(response)
    }

    useEffect(() => {
        loadPizzas()
        loadBurgers()
        loadBeverages()
        loadDesserts()
        loadWraps()
    }, [])


    const [visibleCount, setvisibleCount] = useState(3)
    const showPizzas = () => {
        setvisibleCount(prevCount => Math.min(prevCount + 3, Pizzas.length));
    }
    const showlesspizzas = () => {
        setvisibleCount(3);
    }

    const handleItemCount = (e) => {
        e.target.rate = e.target.rate * e.value
    }

    return (
        <div className='bg-[#0f0e19]'>
            <div className='p-8 mt-14 flex flex-col space-y-10 justify-center text-[#FEE69A]'>
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
                        {visibleCount !== 3 && (
                            <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
                <div className=' grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-8 cards h-[30rem] w-fit overflow-auto scroll-smooth rounded-xl bg-[#141722] p-3 mx-auto'>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                    {Pizzas.slice(0, visibleCount).map((item, id) => {
                        return (<>
                            <div key={id} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start bg-[#0f0e19]'>
                                <Image className='rounded-t-xl h-[55%]' width={350} height={350} src={item.img} alt="" />
                                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                                    <div className='flex justify-between'>

                                        <select className='bg-[#FEE69A] text-black pl-4 pr-2 text-[15px] rounded flex items-center justify-center outline-none cursor-pointer hover:bg-[#fee79ad5] transition-all duration-300'>
                                            <option onClick={handleItemCount} rate = {item.rate[0]} value="1">1</option>
                                            <option onClick={handleItemCount} rate = {item.rate[0]} value="2">2</option>
                                            <option onClick={handleItemCount} rate = {item.rate[0]} value="3">3</option>
                                            <option onClick={handleItemCount} rate = {item.rate[0]} value="4">4</option>
                                            <option onClick={handleItemCount} rate = {item.rate[0]} value="5">5</option>
                                        </select>
                                        <select className='bg-[#FEE69A] text-black p-2 text-[15px] rounded flex items-center justify-center outline-none cursor-pointer hover:bg-[#fee79ad5] transition-all duration-300'>
                                            <option value="regular">Regular</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                        </select>
                                    </div>
                                    <span className='font-[800] leading-7 text-[33px]'>
                                        {item.name}
                                    </span>
                                    <span className='font-[600]'>
                                        {item.rate[0]}
                                    </span>
                                </div>
                            </div>
                            {Pizzas == [] && <div>No Pizzas Found</div>}
                        </>
                        )
                    })}
                </div >
            </div>
            <div className='p-10 flex flex-col space-y-10 justify-center text-[#FEE69A]'>
                <div className='text-[40px] font-[900] flex justify-between'>
                    <span>
                        Burgers
                    </span>
                    <div className='flex space-x-3'>
                        {visibleCount < Burgers.length && (
                            <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show more
                            </button>
                        )}
                        {visibleCount !== 3 && (
                            <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <div className=' grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-8 cards h-[30rem] w-fit overflow-auto scroll-smooth rounded-xl bg-[#141722] p-3 mx-auto'>
                    {Burgers.slice(0, visibleCount).map((item, index) => {
                        return (<>
                            <div key={index} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start bg-[#0f0e19]'>
                                <Image className='rounded-t-xl h-[55%]' width={350} height={350} src={item.img} alt="" />
                                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                                    <div className='flex justify-start items-center'>
                                        <select className='bg-[#FEE69A] text-black pl-4 pr-2 py-2 text-[15px] rounded flex items-center justify-center outline-none cursor-pointer hover:bg-[#fee79ad5] transition-all duration-300'>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                            <option value="">5</option>
                                        </select>
                                    </div>
                                    <span className='font-[800] leading-7 text-[33px]'>
                                        {item.name}
                                    </span>
                                    <span className='font-[600]'>
                                        {item.rate}
                                    </span>
                                </div>
                            </div>
                            {Burgers == [] && <div>No Burgers Found</div>}
                        </>)
                    })}
                </div>
            </div>
            <div className='p-10 flex flex-col space-y-10 justify-center text-[#FEE69A]'>
                <div className='text-[40px] font-[900] flex justify-between'>
                    <span>
                        Beverages
                    </span>
                    <div className='flex space-x-3'>
                        {visibleCount < Beverages.length && (
                            <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show more
                            </button>
                        )}
                        {visibleCount !== 3 && (
                            <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <div className=' grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-8 cards h-[30rem] w-fit mx-auto overflow-auto scroll-smooth rounded-xl bg-[#141722] p-3'>
                    {Beverages.slice(0, visibleCount).map((item, index) => {
                        return (<>
                            <div key={index} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start bg-[#0f0e19]'>
                                <Image className='rounded-t-xl h-[55%]' width={350} height={350} src={item.img} alt="" />
                                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                                    <div className='flex justify-start items-center'>
                                        <select className='bg-[#FEE69A] text-black pl-4 pr-2 py-2 text-[15px] rounded flex items-center justify-center outline-none cursor-pointer hover:bg-[#fee79ad5] transition-all duration-300'>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                            <option value="">5</option>
                                        </select>
                                    </div>
                                    <span className='font-[800] leading-7 text-[33px]'>
                                        {item.name}
                                    </span>
                                    <span className='font-[600]'>
                                        100
                                    </span>
                                </div>
                            </div>
                            {Beverages == [] && <div>No Beverages Found</div>}
                        </>)
                    })}
                </div>
            </div>

            <div className='p-10 flex flex-col space-y-10 justify-center text-[#FEE69A]'>
                <div className='text-[40px] font-[900] flex justify-between'>
                    <span>
                        Desserts
                    </span>
                    <div className='flex space-x-3'>
                        {visibleCount < Desserts.length && (
                            <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show more
                            </button>
                        )}
                        {visibleCount !== 3 && (
                            <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <div className=' grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-8 cards h-[30rem] overflow-auto scroll-smooth rounded-xl bg-[#141722] p-3 mx-auto w-fit'>
                    {Desserts.slice(0, visibleCount).map((item, index) => {
                        return (<>
                            <div key={index} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start bg-[#0f0e19]'>
                                <Image className='rounded-t-xl h-[55%]' width={350} height={350} src={item.img} alt="" />
                                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                                    <div className='flex justify-start items-center'>
                                        <select className='bg-[#FEE69A] text-black pl-4 pr-2 py-2 text-[15px] rounded flex items-center justify-center outline-none cursor-pointer hover:bg-[#fee79ad5] transition-all duration-300'>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                            <option value="">5</option>
                                        </select>
                                    </div>
                                    <span className='font-[800] leading-7 text-[33px]'>
                                        {item.name}
                                    </span>
                                    <span className='font-[600]'>
                                        {item.rate}
                                    </span>
                                </div>
                            </div>
                            {Desserts == [] && <div>No Desserts Found</div>}
                        </>)
                    })}
                </div>
            </div>
            <div className='p-10 flex flex-col space-y-10 justify-center text-[#FEE69A]'>
                <div className='text-[40px] font-[900] flex justify-between'>
                    <span>
                        Wraps
                    </span>
                    <div className='flex space-x-3'>
                        {visibleCount < Wraps.length && (
                            <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show more
                            </button>
                        )}
                        {visibleCount !== 3 && (
                            <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[20px]'>
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <div className=' grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-8 cards h-[30rem] overflow-auto scroll-smooth rounded-xl bg-[#141722] p-3 mx-auto w-fit'>
                    {Wraps.slice(0, visibleCount).map((item, index) => {
                        return (<>
                            <div key={index} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start  bg-[#0f0e19]'>
                                <Image className='rounded-t-xl h-[55%]' width={350} height={350} src={item.img} alt="" />
                                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                                    <div className='flex justify-between'>
                                        <select className='bg-[#FEE69A] text-black pl-4 pr-2 py-2 text-[15px] rounded flex items-center justify-center outline-none cursor-pointer hover:bg-[#fee79ad5] transition-all duration-300'>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                            <option value="">5</option>
                                        </select>
                                        <select className='bg-[#FEE69A] text-black p-2 text-[15px] rounded flex items-center justify-center outline-none cursor-pointer hover:bg-[#fee79ad5] transition-all duration-300'>
                                            <option value="regular">Regular</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                        </select>
                                    </div>
                                    <span className='font-[800] leading-7 text-[33px]'>
                                        {item.name}
                                    </span>
                                    <span className='font-[600]'>
                                        {item.rate}
                                    </span>
                                </div>
                            </div>
                            {Wraps == [] && <div>No Wraps Found</div>}
                        </>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Fooditems
