// BASIC REACTS
import React from 'react'

const CarBrands = (props) =>{
  const {model, type, color} = props;
  const clickHandler = () =>{
    alert("I love JS");
  }
  

  const complex = (color)=>{
    console.log(color);
  }
  return(
    <span className="name" onMouseOver={()=>{
      document.body.style.backgroundColor="steelblue"
    }}>
      {/* <h1>I love you</h1> */}
      {/* <Me/> */}
      <p>{props.job}</p>
      <h1 onClick={()=>console.log("I love you all")}>
      {type}
      </h1>
    <a href=""></a>

      {model}
      {color}
      <button type="button" onClick={clickHandler}>
        more
      </button>
      <button type="button" onClick={()=>complex(color)}>moreComplex</button>
    </span>
    
  )
}

export default CarBrands

// REACT HOOKS

