import React from "react";
import ReactDOM from "react-dom/client";
// console.log("head",heading);
const val =1000;
const root = ReactDOM.createRoot(document.getElementById("root"));



const FunctionalHeading = () => (
    <div id="container">
      
<h1> rendering Functional Component {val}</h1> 
{test}
    </div>
);
const test = (
  <>
      <h2>Test</h2>
      <h2>hello</h2>
  </>
  
);

root.render(<FunctionalHeading />);
