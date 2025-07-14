import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "../Redux_toolkit/productSlice";

export default function Product() {

    const [myProduct, setmyProduct] = useState([])

    const dispatch = useDispatch();

    useEffect(() => {

        fetch('https://www.nykaafashion.com/rest/appapi/V2/categories/products?categoryId=6825&PageSize=36&sort=popularity&currentPage=2&filter_format=v2&currency=INR&country_code=IN&apiVersion=5&deviceType=MSITE&device_os=mweb_android&sort_algo=default')
            .then(data => data.json())
            .then(data => {

                console.log(data)

                let products = data.response.products;

                setmyProduct(products);
                dispatch(setProducts(products));
            })

    }, [])


    return (
        <div className="py-28 flex flex-wrap gap-20 justify-center">

            {myProduct.map((items, index) => (

                <Link to={`/Product/${items.id}`} key={index} className="rounded-3xl w-56 hover:scale-110 duration-700 ease-in-out cursor-pointer relative">
                    <img src={`${items.imageUrl}`} alt={`${items.id}`} className="w-fit h-fit rounded-3xl" />
                    <h1 className="text-md font-semibold pl-4 pt-2">{items.title}</h1>
                    <p className="text-gray-700 pl-4 pb-1">Prise :{items.price}</p>
                    <FaHeart className="absolute text-2xl top-3  right-3  text-white hover:text-red-600" />
                </Link>
            ))}

        </div>
    )
}