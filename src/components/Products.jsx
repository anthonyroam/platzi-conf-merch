import React from "react";
import { Product } from "./Product";

const Products = ({ products }) => {
    return (
        <div className="w-4/5 mx-auto">
            <div className="flex items-center justify-center gap-8 flex-wrap">
                {products.map(product => {
                    return <Product key={product.id} product={product} />
                })}
            </div>
        </div>
    );
};

export { Products };