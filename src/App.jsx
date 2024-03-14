import React, { useContext } from "react";
import "./index.css"
import {BrowserRouter as Router, Routes, Route, Outlet, Navigate} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import Login from "./pages/login/login"
import { UserContext, UserContextProvider } from "./context/UserContext"


function App()
{
    let user = useContext(UserContext)

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