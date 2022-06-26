import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
    return (
        <div className="flex w-3/5 mx-auto py-8">
            <div className="flex flex-col gap-4 w-4/5 ">
                <div>
                    <h2 className="font-bold text-xl">Informacion de contacto</h2>
                </div>
                <div>
                    <form action="" className="flex flex-col gap-2">
                        <input type="text" name="name" id="" placeholder="Full name" />
                        <input type="text" name="email" id="" placeholder="Email" />
                        <input type="text" name="address" id="" placeholder="Address" />
                        <input type="text" name="apto" id="" placeholder="Apto" />
                        <input type="text" name="city" id="" placeholder="Ciudad" />
                        <input type="text" name="country" id="" placeholder="Country" />
                        <input type="text" name="state" id="" placeholder="State" />
                        <input type="text" name="ZipCode" id="" placeholder="Zip code" />
                        <input type="text" name="phone" id="" placeholder="Phone" />
                    </form>
                </div>
                <div className="flex items-center justify-around">
                    <div>
                        Regresar
                    </div>
                    <div>
                        <Link to="/checkout/payment">
                            Pagar
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-1/5">
                <h3 className="font-bold text-xl">Pedido:</h3>
                <div >
                    <div className="flex items-center justify-between">
                        <h4>Item name</h4>
                        <span>$ 10</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export { Information };