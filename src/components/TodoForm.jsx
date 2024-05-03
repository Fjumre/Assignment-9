import React, {useState} from "react";


const TodoForm = ({todo, setTodo, setTasks, tasks})=> {
   

    const handleSubmit = (evt)=>{
        evt.preventDefault();
        //console.log(todo);
        todo.id=Math.floor(Math.random()*1000);
        setTasks([...tasks, todo])

    }

    const changeTodo= (evt)=>{
        setTodo({
            ...todo, 
            [evt.target.id]: evt.target.value
        });
    }

    return(
        <>

        <form onSubmit={handleSubmit}>
        Title <input id= "title" type= "text" value={todo.title} placeholder="Write a new todo" onChange={changeTodo}/><br/>
        User ID <input id="userId" type= "text" value={todo.userId} placeholder="Write a new user ID" onChange={changeTodo}/><br/>
        <input type="submit" value = "Add todo"/>
        </form>

        </>
    )
 }
 

 export default TodoForm