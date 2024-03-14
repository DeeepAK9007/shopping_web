import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client"
import { UserContextProvider } from "./context/UserContext"


createRoot(document.getElementById("root")).render(
    <UserContextProvider>
        <App />
    </UserContextProvider>
)