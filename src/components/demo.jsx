import React, { useState } from "react";

export const Demo = () => {
  const [fname, setFname] = useState("");

  const [person, setPerson] = useState({});
  const [persons, setPersons] = useState([]);

  const updateFname = () => {
    setFname("Sonal");
    setPerson({ fname: fname, lname: "Chaplot" });
  };

  const addPerson = () => {
    const p = { fname: "John", lname: "Doe" };
    setPersons([...persons, { ...p, age:20 }]);

    setPerson({...person, fname: "John", lname: "JAne", age:30});
  };

  return (
    <div>
      <button onClick={updateFname}>Show name </button>
      <button onClick={addPerson}>Add</button>

      <h1>{fname}</h1>
      <h3>{person.lname}</h3>
      <h3>{person.age}</h3>


    {console.log(persons)}

      {persons && persons.map((p) => <h1>{p.age}</h1>)}
    </div>
  );
};
