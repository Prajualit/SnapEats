'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import location from './assets/location.svg'
import search from './assets/search.svg'
import Navbar from './Navbar'
import Burger from './Burger'
import Beverage from './Beverage'
import Dessert from './Dessert'
import Wrap from './Wrap'
import Pizza from './Pizza'
import background from '@/components/assets/background.jpg'
import card1 from '@/components/assets/card1.jpg'
import { useState, useEffect } from 'react'
import { useDispatchCart, useCart } from './contextReducer'

const Home = () => {

  let dispatch = useDispatchCart();

  const [Search, setSearch] = useState('')
  const [Pizzas, setPizzas] = useState([])
  const [Burgers, setBurgers] = useState([])
  const [Beverages, setBeverages] = useState([])
  const [Desserts, setDesserts] = useState([])
  const [Wraps, setWraps] = useState([])
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("regular")
  const [quantities, setQuantities] = useState({});

  const priceRef = useRef();

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

  let data = useCart();

  const handleAddtoCart = () => {

  }

  return (
    <>
      <div className="bg-cover bg-center h-[100vh] -z-50 flex flex-col justify-center" style={{ backgroundImage: `url(${background.src})` }}>
        <Navbar />
        <div className='text-white'>
          <div className='flex flex-col space-y-8 justify-center items-center'>
            <div className='flex flex-col items-center justify-center'>
              <span className='text-[#FEE69A] text-center text-[48px] sm:text-[64px] font-[900] italic leading-normal'>SnapEats</span>
              <span className='text-center mx-3 text-[24px] sm:text-[36px] font-[400] leading-[43px]'>Discover the best food and drinks in your area</span>
            </div>
            <div className='flex items-center w-5/6 lg:w-2/3 xl:w-1/2 rounded-lg py-3 bg-white px-3 text-[15px] space-x-3'>
              <div className='w-full flex justify-start items-center space-x-2'>
                <Image src={search} alt="" />
                <input className='w-full font-[300] text-black outline-none bg-transparent' placeholder='Search for a cuisine or a dish' type="search" value={Search} onChange={(e) => { setSearch(e.target.value) }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#0f0e19]'>
        <div className='sm:p-8 mt-14 flex flex-col sm:space-y-10  justify-center text-[#FEE69A]'>
          <div className='sm:text-[40px] text-[30px] font-[900] flex sm:justify-between justify-around'>
            <span>
              Pizzas
            </span>
            <div className='flex space-x-3 flex-col justify-center items-center sm:flex-row'>
              {visibleCount < Pizzas.length && (
                <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[16px] sm:text-[20px]'>
                  Show more
                </button>
              )}
              {visibleCount !== 3 && (
                <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[16px] sm:text-[20px]'>
                  Show Less
                </button>
              )}
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 cards sm:h-[30rem] h-[28rem] w-fit overflow-auto scroll-smooth rounded-xl bg-[#141722] sm:p-3 mx-auto sm:scale-100 scale-[0.85]'>
            {Pizzas.filter((e) => e.name.toLowerCase().includes(Search.toLocaleLowerCase())).slice(0, visibleCount).map((item) => {
              const qty = quantities[item._id] || 1;
              return (
                <Pizza data={data} quantities={quantities} setQuantities={setQuantities} dispatch={dispatch} qty={qty} size={size} setSize={setSize} Pizzas={Pizzas} visibleCount={visibleCount} item={item} Search={Search}></Pizza>
              )
            })}
          </div>
        </div>
        <div className='sm:p-10 flex flex-col sm:space-y-10 justify-center text-[#FEE69A]'>
          <div className='sm:text-[40px] text-[30px] font-[900] flex sm:justify-between justify-around'>
            <span>
              Burgers
            </span>
            <div className='flex space-x-3 justify-center items-center flex-col sm:flex-row'>
              {visibleCount < Burgers.length && (
                <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[16px] sm:text-[20px]'>
                  Show more
                </button>
              )}
              {visibleCount !== 3 && (
                <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform text-[16px] sm:text-[20px]'>
                  Show Less
                </button>
              )}
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 cards sm:h-[30rem] h-[28rem] w-fit overflow-auto scroll-smooth rounded-xl bg-[#141722] sm:p-3 mx-auto sm:scale-100 scale-[0.85]'>
            {Burgers.filter((e) => e.name.toLowerCase().includes(Search.toLowerCase())).slice(0, visibleCount).map((item) => {
              const qty = quantities[item._id] || 1;
              return (<>
                <Burger Burgers={Burgers} qty={qty} setQuantities={setQuantities} dispatch={dispatch} data={data} item={item} Search={Search}></Burger>
              </>)
            })}
          </div>
        </div>
        <div className='sm:p-10 flex flex-col sm:space-y-10 justify-center text-[#FEE69A]'>
          <div className='sm:text-[40px] text-[30px] font-[900] flex sm:justify-between justify-around'>
            <span>
              Beverages
            </span>
            <div className='flex space-x-3 justify-center items-center sm:flex-row flex-col'>
              {visibleCount < Beverages.length && (
                <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform sm:text-[20px] text-[16px]'>
                  Show more
                </button>
              )}
              {visibleCount !== 3 && (
                <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform sm:text-[20px] text-[16px]'>
                  Show Less
                </button>
              )}
            </div>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 cards sm:h-[30rem] h-[28rem] w-fit mx-auto overflow-auto scroll-smooth rounded-xl bg-[#141722] sm:p-3 sm:scale-100 scale-[0.85]'>
            {Beverages.filter((e) => e.name.toLowerCase().includes(Search.toLocaleLowerCase())).slice(0, visibleCount).map((item) => {
              const qty = quantities[item._id] || 1;
              return (<>
                <Beverage Beverages={Beverages} qty={qty} item={item} setQuantities={setQuantities} dispatch={dispatch} data={data} Search={Search}>
                </Beverage>
              </>)
            })}
          </div>
        </div >
        <div className='sm:p-10 flex flex-col sm:space-y-10 justify-center text-[#FEE69A]'>
          <div className='sm:text-[40px] text-[30px] font-[900] flex sm:justify-between justify-around'>
            <span>
              Desserts
            </span>
            <div className='flex space-x-3 items-center justify-center sm:flex-row flex-col'>
              {visibleCount < Desserts.length && (
                <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform sm:text-[20px] text-[16px]'>
                  Show more
                </button>
              )}
              {visibleCount !== 3 && (
                <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform sm:text-[20px] text-[16px]'>
                  Show Less
                </button>
              )}
            </div>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 cards sm:h-[30rem] h-[28rem] overflow-auto scroll-smooth rounded-xl bg-[#141722] sm:p-3 sm:scale-100 scale-[0.85] mx-auto w-fit'>
            {Desserts.filter((e) => e.name.toLowerCase().includes(Search.toLocaleLowerCase())).slice(0, visibleCount).map((item) => {
              const qty = quantities[item._id] || 1;
              return (<>
                <Dessert Desserts={Desserts} qty={qty} item={item} data={data} dispatch={dispatch} setQuantities={setQuantities} handleAddtoCart={handleAddtoCart()} Search={Search}></Dessert>
              </>)
            })}
          </div>
        </div>
        <div className='sm:p-10 flex flex-col sm:space-y-10 justify-center text-[#FEE69A]'>
          <div className='sm:text-[40px] text-[30px] font-[900] flex sm:justify-between justify-around'>
            <span>
              Wraps
            </span>
            <div className='flex sm:space-x-3 sm:flex-row justify-center items-center flex-col'>
              {visibleCount < Wraps.length && (
                <button onClick={showPizzas} className='w-fit font-bold underline hover:scale-105 transition-transform sm:text-[20px] text-[16px]'>
                  Show more
                </button>
              )}
              {visibleCount !== 3 && (
                <button onClick={showlesspizzas} className='w-fit font-bold underline hover:scale-105 transition-transform sm:text-[20px] text-[16px]'>
                  Show Less
                </button>
              )}
            </div>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 cards sm:h-[30rem] h-[28rem] overflow-auto scroll-smooth rounded-xl bg-[#141722] sm:scale-100 scale-[0.85] sm:p-3 mx-auto w-fit'>
            {Wraps.filter((e) => e.name.toLowerCase().includes(Search.toLocaleLowerCase())).slice(0, visibleCount).map((item) => {
              const qty = quantities[item._id] || 1;
              return (<>
                <Wrap Wraps={Wraps} qty={qty} item={item} dispatch={dispatch} data={data} setQuantities={setQuantities} handleAddtoCart={handleAddtoCart()} Search={Search} ></Wrap>
              </>)
            })}
          </div>
        </div >
      </div >
    </>
  )
}

export default Home
