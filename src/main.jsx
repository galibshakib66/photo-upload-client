import React from "react"; 
import ReactDOM from "react-dom/client"; 
import "./index.css"; 
import router from "./routes/Routes"; 
import { RouterProvider } from "react-router-dom"; 
import { ToastContainer } from "react-toastify"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import { Toaster } from "react-hot-toast"; 
import { HelmetProvider } from "react-helmet-async"; 
 
const queryClient = new QueryClient(); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
    <React.StrictMode> 
        <QueryClientProvider client={queryClient}> 
            <HelmetProvider> 
                <RouterProvider router={router} /> 
                <ToastContainer /> 
                <Toaster /> 
            </HelmetProvider> 
        </QueryClientProvider> 
    </React.StrictMode> 
); 
