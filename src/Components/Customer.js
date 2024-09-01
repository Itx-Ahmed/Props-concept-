import React from 'react';

const Customer = ({name,age,occupation}) => {
    const handle = (name) => {
         alert('Hello' + " "  + name)
    }
   
  return (
    <>
     <div>
         <h1>{name}</h1>
        <div>{age}</div>
        <div>{occupation}</div>
     </div>

      <button onClick={() => handle("Ahmad")}>Click Me</button>
      
    </>
  )
}

export default Customer;