import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [loginButtonVal,setLogginButtonVal] = useState('Login');


  useEffect(()=>{
console.log("inside effect 1")
  },[loginButtonVal])
    return (
      <div className="header">
        <img className="logoImage" src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" />
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              loginButtonVal==="Login"
             ? setLogginButtonVal('LogOut'): setLogginButtonVal('Login');
            }}>{loginButtonVal}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default HeaderComponent;