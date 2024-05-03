

import React, { useState, useEffect } from "react";

const TodoList = ({tasks, setTasks}) => {
   
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error("Error fetching tasks:", error));
   }, []);



 
    return (
        <>
       <div>TodoList</div>
     
       <hr />
       
       <ul>
       {tasks.map(task => (
   <li key={task.id}>
        <div> User ID: {task.userId}</div>
      <div> Title: {task.title}</div>
      <div> Completed: {task.completed ? "Yes" : "No"}</div>
   </li>
))}
</ul>
</>
    );
 }

 export default TodoList;
 