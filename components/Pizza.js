import React from 'react';
import Image from 'next/image';

const Pizza = ({ Pizzas, Search, setQuantities, quantities, item, dispatch, data }) => {



    const handleAddPizzastoCart = async (pizza) => {
        const { qty = 1, size = 'regular' } = quantities[pizza._id] || {};
        const finalPrice = qty * parseInt(pizza.rate[0][size]);

        let food = []
        for (const items of data) {
            if (items.id === item._id) {
                food = items;

                break;
            }
        }
        
        if (food != []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: item._id, price: finalPrice, qty: qty })
                return
            }
            else if (food.size !== size) {
                await dispatch({
                    type: "ADD",
                    img: item.img,
                    id: pizza._id,
                    name: pizza.name,
                    price: finalPrice,
                    qty: qty,
                    size: size
                });
                return
            }
            return
        }

        await dispatch({
            type: "ADD",
            img: item.img,
            id: pizza._id,
            name: pizza.name,
            price: finalPrice,
            qty: qty,
            size: size
        });
    };

    const setQty = (id, value) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: { ...prevQuantities[id], qty: parseInt(value) || 1 },
        }));
    };

    const setSize = (id, value) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: { ...prevQuantities[id], size: value || 'regular' },
        }));
    };

    const { qty = 1, size = 'regular' } = quantities[item._id] || {};
    const finalPrice = qty * parseInt(item.rate[0][size]);



    return (
        <>
            <div key={item._id} className='border-[#1c233b] border-[1px] w-[350px] h-[28rem] rounded-xl flex flex-col items-start bg-[#0f0e19]'>
                <Image className='rounded-t-xl h-[55%]' width={350} height={350} src={item.img} alt={item.name} />
                <div className='px-4 py-3 flex flex-col space-y-3 w-full'>
                    <div className='flex justify-between'>
                        <select onChange={(e) => setQty(item._id, e.target.value)} value={qty} className='bg-[#FEE69A] text-black pl-4 pr-2 text-[15px] rounded flex items-center justify-center outline-none cursor-pointer hover:bg-[#fee79ad5] transition-all duration-300'>
                            {[...Array(5)].map((_, i) => (
                                <option key={i} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <select onChange={(e) => setSize(item._id, e.target.value)} value={size} className='bg-[#FEE69A] text-black p-2 text-[15px] rounded flex items-center justify-center outline-none cursor-pointer hover:bg-[#fee79ad5] transition-all duration-300'>
                            <option value="regular">Regular</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                    <span className='font-[800] leading-7 text-[33px]'>
                        {item.name}
                    </span>
                    <span className='font-[600]'>
                        {finalPrice}/-
                    </span>
                    <button onClick={() => handleAddPizzastoCart(item)} id={item._id} name={item.name} className='duration-300 hover:text-black text-[#FEE69A] hover:bg-[#FEE69A] border-[#FEE69A] backdrop-blur-lg transition-colors font-bold border-[1px] px-6 rounded-lg py-2 focus:text-[#FEE69A] focus:bg-transparent'>
                        Add To Cart
                    </button>
                </div>
            </div>
            {Pizzas.filter((e) => e.name.toLowerCase().includes(Search.toLowerCase())).length === 0 && <div>No Pizzas Found</div>}
        </>
    );
};

export default Pizza;
