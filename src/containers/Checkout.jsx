import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const Checkout = () => {
    return (
        <div className="flex items-center justify-between w-3/5 mx-auto px-6 py-10">
            <div className="w-4/5">
                <h3 className="font-bold">Lista de pedidos</h3>
                <div className="flex items-center justify-between gap-8 w-full ">
                    <div className="flex items-center justify-between w-full border-b-2 border-gray-400">
                        <h4>ITEM NAME</h4>
                        <span>$ 18</span>
                    </div>
                    <button 
                        type="button" 
                    >
                        <FaTrashAlt className="text-large" />
                    </button>
                </div>
            </div>
            <div className="font-semibold">
                <h3>Precio total: $ 10</h3>
                <button 
                    type="button" 
                    className="px-4 py-2 border-2 rounded-md border-white bg-platzi-blue text-text-white"
                >
                    <Link to="/checkout/information">
                        Continuar pedido
                    </Link>
                </button>
            </div>
        </div>
    )
};

export { Checkout };