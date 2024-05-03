
import React, { Fragment, useState, useEffect  } from 'react'


//function PersonViewer(props){
  //  return(
    //     <fragment>
      //   <div>name: {props.name}</div>
        // <div>age: {props.age}</div>
 
         //</fragment>
 //  );
 //}

function PersonViewer({name, email}){

    const [nameState, setNameState]= useState(name); //initial value from props, as in App.jsx
    const [users, setUsers]=useState([{
        name: "Dorthe Bentsen", email:"ggg@HTMLHRElement.com" },
    ]);
    useEffect(()=> {
        const myFirstPromise=fetch("https://jsonplaceholder.typicode.com/users");
        const mySecondPromise= myFirstPromise.then((response)=> response.json());
        mySecondPromise.then((data) => {
            setUsers(data);
        });


    }, []);

    return(
   
<>
{users.map((user)=> (

<div key = {user.id}>
<ShowName name= {user.name}/>
<div> email: {user.email}</div>
</div>
))}
 
</>

   );
 }

 const ShowName = ({name})=> <h3>{name}</h3>

export default PersonViewer;