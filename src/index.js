import React from "react";
import ReactDOM from "react-dom";
import Setup from "./useState/Counter"
import All from "./CarBrands"
import Eff from "./useState/useStateBasics"

import './index.css';

function Cars(){
  return(
    <div className="ok">
      
      <Eff/>
      {/* <All/> */}
      <Setup/>
      
    </div>
  )
}







ReactDOM.render(<Cars/>, document.getElementById("root"));