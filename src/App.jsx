import React, { useContext } from "react";
import "./index.css"
import {BrowserRouter as Router, Routes, Route, Outlet, Navigate} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import Login from "./pages/login/login"
import Merch from "./pages/add_merch/add_merch";
import ManageMerch from './pages/manage_merch/manage_merch'
import { UserContext, UserContextProvider } from "./context/UserContext"


function App()
{
    let user = useContext(UserContext)
    console.log(user)

    const RequireAuth = () => {
        return user ? <Outlet /> : <Navigate to="/login" />;
    }

    const IfnotAuth = () => {
    return user ?  <Navigate to="/" />: <Outlet /> 
    }
    
    return(
        <UserContextProvider>
            <div className="App">
                <Router>
                <Navbar />
                    <Routes>
                        <Route element={<RequireAuth />}>
                            <Route path="/" element={<Shop />} />
                            <Route path="/add_merch" element={<Merch />}></Route>
                            <Route path="/manage/:merchId" element={<ManageMerch />}></Route>
                        </Route>
                        
                        <Route element={<IfnotAuth />}>
                            <Route path="/login" element={<Login />} />
                        </Route>

                    </Routes>
                </Router>
            </div>
        </UserContextProvider>    
    );
}


export default App;