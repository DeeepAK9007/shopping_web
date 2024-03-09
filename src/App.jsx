import React from "react";
import "./index.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
//import { ShopContextProvider } from "./context/shop-context";


function App()
{
    return(
    //<ShopContextProvider>
        <div className="App">
            <Router>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </div>
    //</ShopContextProvider>    
    );
}


export default App;