import React, { useEffect, useState } from "react";

export default function Product() {

    const [myProduct, setProduct] = useState([])

    useEffect(() => {

        fetch('https://www.nykaafashion.com/rest/appapi/V2/categories/products?categoryId=6825&PageSize=36&sort=popularity&currentPage=2&filter_format=v2&currency=INR&country_code=IN&apiVersion=5&deviceType=MSITE&device_os=mweb_android&sort_algo=default')
            .then(data => data.json())
            .then(data => {

                console.log(data)

                let products = data.response.products;

                setProduct(products);
            })

    }, [])


    return (
        <div className="py-28 flex flex-wrap gap-20 justify-center">

            {myProduct.map((items, index) => (

                <div key={index} className="rounded-3xl w-56 hover:scale-110 duration-700 ease-in-out cursor-pointer">
                    <img src={`${items.imageUrl}`} alt={`${items.id}`} className="w-fit h-fit rounded-3xl" />
                    <h1 className="text-md font-semibold pl-4 pt-2">{items.title}</h1>
                    <p className="text-gray-700 pl-4 pb-1">Prise :{items.price}</p>
                </div>
            ))}



        </div>
    )
}