'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Page = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        const data = await response.json()
        console.log(data)
        if (!data.success) {
            alert("Enter valid credentials")
        } else if (data.success) {
            localStorage.setItem("userEmail", credentials.email)
            localStorage.setItem("authToken", data.authToken);
            router.push('/');
        }
    }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='bg-[#0f0e19] font-[900] h-screen text-[#FEE69A] flex justify-center items-center text-[40px] sm:text-[48px] flex-col space-y-8'>
            <div>
                Login
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col sm:w-[30rem] w-5/6 justify-center items-center space-y-7'>
                <input type="email" name='email' onChange={handleChange} value={credentials.email} className='bg-transparent border-b-2 py-2 placeholder-[#fee79a81] border-[#fee79a81] transition-colors hover:border-[#FEE69A] focus:border-[#FEE69A] font-[200] w-full outline-none text-[16px] sm:text-[20px]' placeholder='Enter your email address' />
                <input type="password" name='password' onChange={handleChange} value={credentials.password} className='bg-transparent border-b-2 py-2 placeholder-[#fee79a81] border-[#fee79a81] transition-colors hover:border-[#FEE69A] focus:border-[#FEE69A] font-[200] w-full outline-none text-[16px] sm:text-[20px]' placeholder='Enter your password' />
                <div className='flex flex-col space-y-3 justify-center items-center'>
                    <input type="submit" value={'Login'} className='bg-transparent border-[1px] border-[#FEE69A] w-fit text-[16px] sm:text-[18px] transition-colors duration-300 font-bold hover:text-[#0f0e19] cursor-pointer hover:bg-[#FEE69A] px-6 py-2 rounded-full' />
                    <div className='text-[16px] font-[100]'>
                        Don't have an account? <Link href="/signup"><span className='text-[#7a7aec]'>Signup</span></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Page