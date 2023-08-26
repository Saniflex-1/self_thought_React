import React, { useState, useEffect } from 'react'

const Counter = () => {

    const [value , setValue] = useState(0);
    const increment =()=>{
        setValue(value + 1)
       
    }

    const moreComplex = ()=>{
        setTimeout(()=>{
            setValue(value + 1)
        }, 1000)
        setValue("You are the love of my love, my life is nothing without you dear")
    }

    useEffect(()=>{
      if(value>4){

        document.title = 'New Messages ' + value;
      }
    })
  return (
    <div>
      <h1>Counter</h1> <br />
      {/* <h2>{value}</h2> */}
      <button onClick={increment}>Add</button>
      <button onClick={()=>setValue(0)}>Reset</button>
      <button onClick={()=>setValue(value -1)}>Decrease</button> <br />
      <h1>{value}</h1>
      <button onClick={moreComplex}>moreComplex</button>

    </div>
  )
}

export default Counter;
