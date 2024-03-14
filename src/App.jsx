import React from "react";
import "./index.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import Login from "./pages/login/login"
import { UserContextProvider } from "./context/UserContext"


function App()
{
    return(
        <UserContextProvider>
            <div className="App">
                <Router>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </div>
        </UserContextProvider>    
    );
}


export default App;