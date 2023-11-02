import React, { useState } from "react";
import {data} from "../data";

const useStateBasi = () => {
  const [value, setValue] = useState(<div><input type="text" placeholder="say something" /></div>)

  const Good=()=>{
    setValue('Good afternoon')
  
    
  }
  return(
    <div>
      <h1>{value}</h1>
      <button onClick={Good}>Greetings</button>
    </div>
  )
}

export default useStateBasi;
