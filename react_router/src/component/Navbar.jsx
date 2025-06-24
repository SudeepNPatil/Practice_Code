import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex justify-between bg-gray-300 p-4 px-10">

            <Link to="/Home">logo</Link>
            <div className="flex flex-row gap-16">
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Cart">Cart</Link>
            </div>

        </div>
    )
}