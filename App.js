import React from "react";
import ReactDOM from "react-dom/client";
// console.log("head",heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
  return (
    <div className="header">
      <img className="logoImage" src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCardComponent = () => {
  return (
    <div className="restraunt-card">
      <img
        className="restraunt-food-Image"
        alt="Food"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/db40cb52b0f5a2d3753356c5a88c09ce"
      />
      <div className="food-Detail">
        <h3>Pizza store</h3>
        <h4> 3.8 star</h4>
        <h4>Fast Food</h4>
        <h4>28 min</h4>
     
      </div>
    </div>
  );
};

const BodyComponent = () =>{
return (
    <div className="body">
<div>Search</div>
<div className="res-container">
<RestrauntCardComponent />
<RestrauntCardComponent />
<RestrauntCardComponent />
<RestrauntCardComponent />
<RestrauntCardComponent />
<RestrauntCardComponent />
<RestrauntCardComponent />
<RestrauntCardComponent />
<RestrauntCardComponent />
<RestrauntCardComponent />
<RestrauntCardComponent />
</div>
</div>

)

};


const App = () =>{
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
}


root.render(<App />);
