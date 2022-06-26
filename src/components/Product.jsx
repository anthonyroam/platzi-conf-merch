import React from "react";

const Product = ({ product }) => {
    const { image, title, price, description } = product
    
    return (
        <div className="h-96 w-80">
            <div className="h-40 w-40 grid place-items-center">
                <img src={image} alt={title} />
            </div>
            <div>
                <h2>{title}</h2>
                <span>$ {price}</span>
                <p>{description}</p>
            </div>
            <button type="button">Comprar</button>
        </div>
    );
};

export { Product };