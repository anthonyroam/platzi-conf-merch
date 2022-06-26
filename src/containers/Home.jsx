import React from "react";
import InitialState from "../InitialState";
import { Products } from "../components/Products";

const Home = () => {
    return (
        <Products  products={InitialState.products} />
    )
};

export { Home };