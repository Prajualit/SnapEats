"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const Page = () => {
  const [orderData, setOrderData] = useState("");

  const fetchMyOrder = async () => {
    // console.log(localStorage.getItem('userEmail'))
    await fetch("http://localhost:5000/api/myOrderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      setOrderData(response);
    });

    // await res.map((data)=>{
    //    console.log(data)
    // })
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <>
      <div className="bg-[#0f0e19] font-[900] w-full min-h-screen text-[#FEE69A] flex justify-start pt-8 items-center flex-col space-y-8">
        <Navbar></Navbar>
        <div className="w-full flex flex-col items-center">
          {Array(orderData) == [] && (
            <div className="text-[48px]">My Orders</div>
          )}
          <table className="w-full flex  justify-start space-y-4 items-center">
            <tbody className="w-full flex flex-col space-y-2">
              {orderData != {}
                ? Array(orderData).map((data) => {
                    return data.orderData ? (
                      data.orderData.order_data
                        .slice(0)
                        .reverse()
                        .map((item) => {
                          return item.map((arrayData, index) => {
                            return (
                              <div
                                key={index}
                                className="flex items-center justify-center space-y-3 w-full"
                              >
                                {arrayData.Order_date ? (
                                  <div className="m-auto mt-5 flex items-center justify-center flex-col w-full space-y-3">
                                    <div>{(data = arrayData.Order_date)}</div>
                                    <div className="bg-[#FEE69A] h-[1px] w-[80%]"></div>
                                  </div>
                                ) : (
                                  <>
                                    <div
                                      key={arrayData._id}
                                      className="border-[#1c233b] border-[1px] w-[350px] rounded-xl flex flex-col items-start bg-[#0f0e19]"
                                    >
                                      <Image
                                        className="rounded-t-xl h-[55%]"
                                        width={350}
                                        height={350}
                                        src={arrayData.img}
                                        alt=""
                                      />
                                      <div className="flex w-full px-4 py-3 justify-between">
                                        <div>Quantity : {arrayData.qty}</div>
                                        <div>
                                          Size: {arrayData.size || "--"}
                                        </div>
                                      </div>
                                      <div className="px-4 pb-3 flex flex-col space-y-3 w-full">
                                        <span className="font-[800] leading-7 text-[33px]">
                                          {arrayData.name}
                                        </span>
                                        <span className="font-[600]">
                                          {arrayData.price}/-
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                            );
                          });
                        })
                    ) : (
                      <div className=" text-[48px] flex items-center justify-center h-[80vh]">
                        No Orders!
                      </div>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Page;
