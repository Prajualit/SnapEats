import React, { useState } from 'react';
import Image from 'next/image'

const Beverage = ({ Beverages, Search, qty, setQuantities, dispatch, data, item }) => {

    const setQty = (id, value) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: value,
        }));
    };
    
    const handleAddtoCart = async (beverage) => {
        const finalPrice = qty * parseInt(beverage.rate);

        let food = []
        for (const items of data) {
            if (items.id === item._id) {
                food = items;
                break;
            }
        }
        if (food != []) {
            if (food.id === item._id) {
                await dispatch({ type: "UPDATE", id: item._id, price: finalPrice, qty: qty })
                return
            }
            else if (food.id !== item._id) {
                await dispatch({
                    type: "ADD",
                    img: item.img,
                    id: beverage._id,
                    name: beverage.name,
                    price: finalPrice,
                    qty: qty,
                });
                return
            }
            return
        }

        await dispatch({
            type: "ADD",
            img: item.img,
            id: beverage._id,
            name: beverage.name,
            price: finalPrice,
            qty: qty,
        });
        console.log(data);
    };
    const finalPrice = parseInt(item.rate) * parseInt(qty);

    return (
        <>
            <div key={item._id} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start bg-[#0f0e19]'>
                <Image className='rounded-t-xl h-[55%]' width={350} height={350} src={item.img} alt="" />
                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                    <div className='flex justify-start items-center'>
                        <select onChange={(e) => setQty(item._id, e.target.value)} value={qty} className='bg-[#FEE69A] text-black pl-4 pr-2 py-2 text-[15px] rounded flex items-center justify-center outline-none cursor-pointer hover:bg-[#fee79ad5] transition-all duration-300'>
                            {[...Array(5)].map((_, i) => (
                                <option key={i} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>
                    <span className='font-[800] leading-7 text-[33px]'>
                        {item.name}
                    </span>
                    <span className='font-[600]'>
                        {finalPrice}/-
                    </span>
                    <button onClick={() => handleAddtoCart(item, qty)} className='duration-300 hover:text-black text-[#FEE69A] hover:bg-[#FEE69A] border-[#FEE69A] backdrop-blur-lg transition-colors font-bold border-[1px] px-6 rounded-lg py-2 focus:text-[#FEE69A] focus:bg-transparent'>Add To Cart</button>
                </div>
            </div>
            {Beverages.filter((e) => e.name.toLowerCase().includes(Search.toLocaleLowerCase())).length === 0 && <div>No Beverages Found</div>}
        </>
    )
}

export default Beverage
