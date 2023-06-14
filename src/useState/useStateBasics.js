import React, { useState } from "react";
import {data} from "../data";

const useStateBasi = () => {
  const [gender, setName] = useState('Male');

  const handleClick = () =>{
    if (gender == "Male"){
      setName('Female')
    }else{
      setName("Male")
    }
  };
  const [people, setPeople] = React.useState(data);
  return (
    <div>
      {
        people.map((person)=>{
          const {id, name} = person;
          const removeItem = (id) =>{
            let newPeople = people.filter((person)=>person.id !==id);
            setPeople(newPeople);
          };

          const [persons, setPerson] = useState({
            name: "Agnes",
            Age: 26,
            Gender: "Female"
          })

          const changeGender =()=>{
            setPerson({...persons, Gender: "male"})
          }
          const [counter, setCount] = useState(0);
          return (
          <div>
            <h4 key={id}>
              {id}
              <h1>{persons.name}</h1>
              <h1>{persons.Gender}</h1>
              {name}
              <button onClick={()=>removeItem(id)}>Remove</button>;
              <button onClick={changeGender}>changeGender</button>
            </h4>
              <h1>{counter}</h1>

            </div>
          )
        })
      }
      <h1>{gender}</h1>
      <button onClick={handleClick}>changeGender</button>
      <button onClick={()=>setPeople([])}>Clear</button>
    </div>
  )
}

export default useStateBasi;
