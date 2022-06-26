import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex items-center justify-between px-8 py-4 bg-platzi-blue text-text-white font-sans">
            <h1 
                className="text-2xl font-semibold"
            >
                <Link to="/">
                    PlatziConf Merch
                </Link>
            </h1>
            <div>
                <Link to="/checkout">
                 <FaShoppingCart className="text-xl" />
                </Link>
            </div>
        </div>
    );
};

export { Header };