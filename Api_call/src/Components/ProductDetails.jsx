import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


export default function ProductDetails() {

    const Productid = useParams();

    const products = useSelector((state) => state.product.products)


    return (
        <div className="flex flex-col pt-20">
            {products.map((item, index) => (

                Productid.productid == item.id ?
                    <div key={index} className="flex flex-row gap-5 px-20">

                        <div className="flex flex-col gap-6">
                            {item.plp_pdp_bridge.images.map((subimg) => (
                                <div className="w-44">
                                    <img src={`${subimg.url}`} alt={`${subimg.id}`} />
                                </div>
                            ))
                            }
                        </div>

                        <img src={`${item.imageUrl}`} alt={`${item.id}`} className="w-96 h-fit" />

                        <div className="flex flex-col px-4 border gap-1 ml-5">

                            <div className="flex flex-row gap-5 text-blue-500 text-xl font-semibold">
                                <h1>BESTSELLER</h1>
                                <h1>EXPRESS SHIPPING</h1>

                            </div>

                            <h1 className="text-2xl font-semibold mt-4">{item.title}</h1>

                            <p>{item.subTitle}</p>

                            <div className="flex flex-row mt-4 gap-3">
                                <p className="font-semibold text-2xl">₹ {item.discountedPrice}</p>

                                <p className="text-green-500 text-xl">{item.discount} %Off</p>

                            </div>

                            <p className="text-lg">MRP <span className="text-base line-through">{item.price}</span><span className="text-base">  Inclusive of all taxes</span></p>

                            <hr className="h-0.5 bg-black/50 w-full px-2 mt-5" />

                            <h1>Select Color</h1>
                            <div className="flex flex-row gap-4">
                                <img src="" alt="" />
                            </div>

                        </div>

                    </div>

                    :
                    null
            ))
            }

        </div>
    )
}