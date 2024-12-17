'use client'
import React from 'react'
import { useDispatchCart, useCart } from '@/components/contextReducer'

const Page = () => {

    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div className='flex justify-center items-center'>
                <div className='text-[40px] text-[#FEE69A] font-extrabold text-center'>The Cart is Empty!</div>
            </div>
        )
    }

    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");
        // console.log(data,localStorage.getItem("userEmail"),new Date())
        let response = await fetch("http://localhost:5000/api/orderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString()
            })
        });
        console.log("Order Response: ", response.status)
        if (response.status === 200) {
            dispatch({ type: "DROP" })
        }
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0)
    return (
        <div className='bg-[#0f0e19] font-[900] w-full text-[#FEE69A] flex justify-start pt-8 items-center flex-col space-y-8'>
            <div className='w-full flex flex-col items-center' >
                <table className='w-full overflow-y-auto flex flex-col h-[65vh] justify-start space-y-4 items-center'>
                    <thead className='w-full flex justify-center'>
                        <tr className='text-xl p-2 flex justify-evenly items-center rounded-full bg-[#1e1c31] w-[80%]'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Option</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody className='w-full flex  flex-col space-y-2 overflow-y-auto'>
                        {data.map((food, index) => {
                            return (
                                <div key={index} className='flex justify-center items-center w-full'>
                                    <tr className='text-xl p-2 flex justify-evenly items-center w-[80%]'>
                                        <td className='text-center w-full'>{index + 1}</td>
                                        <td className='text-center w-full'>{food.name}</td>
                                        <td className='text-center w-full'>{food.qty}</td>
                                        <td className='text-center w-full'>{food.size || "--"}</td>
                                        <td className='text-center w-full'>{food.price}</td>
                                    </tr>
                                    <td><button type='button' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} className='duration-300 hover:text-black text-[#FEE69A] hover:bg-[#FEE69A] border-[#FEE69A] backdrop-blur-lg transition-colors font-bold border-[1px] px-6 rounded-lg py-2 focus:text-[#FEE69A] focus:bg-transparent'>Delete</button></td>
                                </div>
                            )
                        })}
                    </tbody>
                </table>
                <div className=' absolute bottom-6 flex flex-col space-y-4 items-center'>
                    <div className=''>Total Price: {totalPrice}/-</div>
                    <div>
                        <button onClick={handleCheckOut} className='duration-300 hover:text-black text-[#FEE69A] hover:bg-[#FEE69A] border-[#FEE69A] backdrop-blur-lg transition-colors font-bold border-[1px] px-6 rounded-lg py-2 focus:text-[#FEE69A] focus:bg-transparent'>Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
