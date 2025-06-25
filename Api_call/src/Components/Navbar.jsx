import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <div className="bg-gray-50 flex justify-between px-12 py-2 m-0 items-center fixed w-full">

            <img src="https://placehold.co/50" alt="logo" className="rounded-full cursor-pointer hover:scale-110 duration-500 ease-in-out" />
            <ul className="flex flex-row gap-20 ">
                <Link to='/Home'>Home</Link>
                <Link to='/Product'>Product</Link>
                <Link to='#'>Cart</Link>
                <Link to='#'>Wishlist</Link>
            </ul>

        </div>
    )
}