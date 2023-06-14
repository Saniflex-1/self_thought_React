import React from "react";
import ReactDOM from "react-dom";
import Setup from "./useState/Counter"

import './index.css';


function Cars(){
  return(
    <div className="ok">
      
      {/* HOOKS useState */}
      <Setup/>
      
    </div>
  )
}







ReactDOM.render(<Cars/>, document.getElementById("root"));