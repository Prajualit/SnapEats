'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/CreateUser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        })
        const data = await response.json()
        console.log(data)
        if (!data.success) {
            alert("Enter valid credentials")
        }
        else {
            router.push('/login')
        }
        setCredentials({ name: "", email: "", password: "", geolocation: "" })
    }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='bg-[#0f0e19] font-[900] h-screen text-[#FEE69A] flex justify-center items-center text-[40px] sm:text-[48px] flex-col space-y-8'>
                <div>
                    Signup
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col w-5/6 sm:w-[30rem] justify-center items-center space-y-7' action="">
                    <input onChange={handleChange} type="text" className='bg-transparent border-b-2 py-2 placeholder-[#fee79a81] border-[#fee79a81] transition-colors hover:border-[#FEE69A] focus:border-[#FEE69A] font-[200] w-full outline-none text-[16px] sm:text-[20px]' name='name' value={credentials.name} placeholder='Enter your name' />
                    <input onChange={handleChange} type="email" className='bg-transparent border-b-2 py-2 placeholder-[#fee79a81] border-[#fee79a81] transition-colors hover:border-[#FEE69A] focus:border-[#FEE69A] font-[200] w-full outline-none text-[16px] sm:text-[20px]' name='email' value={credentials.email} placeholder='Enter your email address' />
                    <input onChange={handleChange} type="password" className='bg-transparent border-b-2 py-2 placeholder-[#fee79a81] border-[#fee79a81] transition-colors hover:border-[#FEE69A] focus:border-[#FEE69A] font-[200] w-full outline-none text-[16px] sm:text-[20px]' name='password' value={credentials.password} placeholder='Enter your password' />
                    <input onChange={handleChange} type="text" className='bg-transparent border-b-2 py-2 placeholder-[#fee79a81] border-[#fee79a81] transition-colors hover:border-[#FEE69A] focus:border-[#FEE69A] font-[200] w-full outline-none text-[16px] sm:text-[20px]' name='geolocation' value={credentials.geolocation} placeholder='Enter your address' />
                    <div className='flex flex-col space-y-3 justify-center items-center'>
                        <input type="submit" value={'Signup'} className='outline-none bg-transparent border-[1px] border-[#FEE69A] w-fit text-[16px] sm:text-[18px] transition-colors duration-300 font-bold hover:text-[#0f0e19] cursor-pointer hover:bg-[#FEE69A] px-6 py-2 rounded-full' />
                        <div className='text-[16px] font-[100]'>
                            Already a user? <Link href="/login"><span className='text-[#7a7aec]'>Login</span></Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Page