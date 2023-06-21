import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent"
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Contact from "./components/Contact";
import RestrauntDetail from "./components/RestrauntDetail";
// console.log("head",heading);


import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";






const App = () =>{
    return (
        <div className="app">
            <HeaderComponent />
         <Outlet />
        </div>
    )
}
const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<BodyComponent />
            },
            {
                path:'/about',
                element:<About />
            }, 
            {
                path:'/contact',
                element:<Contact />
            },{
                path:'/restraunt/:resId',
                element:<RestrauntDetail />
            }
        ],
        errorElement:<ErrorPage />
    }
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router={router} />);
