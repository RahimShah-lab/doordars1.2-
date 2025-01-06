import React from "react";
import EBooks from "../components/E-books/index";
import EStories from "./e-stories"
import EKite from "./e-kite"
// import AllProducts from "../components/eBooks01/index";
import { Routes, Route } from "react-router-dom";

function Ebooks() {
    return (
        <>
            <EBooks />
            <Routes>
                <Route path="/products/e-books" element={<EBooks />} />
                <Route path="/e-kite" element={<EKite />} />
                {/* <Route path="/e-books" element={<AllProducts />} /> */}
                <Route path="/products/e-stories" element={<EStories/>} />
            </Routes>
        </>
    );
}

export default Ebooks;
