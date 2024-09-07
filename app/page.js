'use client'
import { Image } from "next/image";
import { useEffect, useState } from "react";
import Home from "@/components/Home";
import background from '@/components/assets/background.jpg'
import Navbar from "@/components/Navbar";
import Fooditems from "@/components/Fooditems"
import { CartProvider } from "@/components/contextReducer";

export default function Main() {


  return (
    <CartProvider>
      <div className="bg-[#0f0e19] text-white">
        <Home />
      </div>
      
    </CartProvider>
  );
}

