import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent"
// console.log("head",heading);
const root = ReactDOM.createRoot(document.getElementById("root"));








const App = () =>{
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
}


root.render(<App />);
