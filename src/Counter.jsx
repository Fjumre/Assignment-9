import React, { useState, useEffect  } from 'react';

function CountButton({ number, setNumber, inputValue, setInputValue }) {
  
   
    useEffect(() => {
        const savedNumber = Number(localStorage.getItem("number"));
           setNumber(savedNumber);
     }, [setNumber]);
  
   const handleInputChange = (e) => {
      setInputValue(e.target.value); 
       
   };


   const handleSubtract = ( numToSubtract = Number(inputValue)) => { // Convert input to number
     
      const newNumber = number - numToSubtract;
      setNumber(newNumber);  
      localStorage.setItem("number", newNumber);
      setInputValue("");  
   };

   

   return (
      <div>
         <p>Current number: {number}</p>
        <button onClick={() => handleSubtract(1)}>Change</button><br/>
         <input
            id="numberInput"
            type="number"
            value={inputValue} 
            onChange={handleInputChange}  
            placeholder="Enter a number to subtract"
         /><br/>

         <button onClick={handleSubtract}>Subtract</button>
      </div>
   );
}

export default CountButton;
