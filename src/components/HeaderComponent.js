import { useState } from "react";

const HeaderComponent = () => {
  const [loginButtonVal,setLogginButtonVal] = useState('Login');
    return (
      <div className="header">
        <img className="logoImage" src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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