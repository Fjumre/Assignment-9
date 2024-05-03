import React, { useEffect, useState } from "react"
import '../App.css'


export default ({updated, setUpdated, setEditBook})=> {
    
    
    const [books, setBooks]= useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/books")
        .then(res=>res.json())
        .then(data=>{
        setBooks(data)
    })
}, [updated])

const handleDelete = (e)=>{

fetch(`http://localhost:3001/books/${e.target.id}`, {
    method: 'DELETE'
}).then(()=> {
    setUpdated(!updated);
});
}

const handleEdit = (book) => {
    setEditBook(book); 
}


    


    return(
        <>
        <h1>Book List</h1>
        <table>
            <thead>
                <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Rating</th>
                <th>Publising</th>
                <th></th>
                <th></th>

                </tr>
            </thead>
            <tbody>
        {books.map((book)=>(
            <tr key={crypto.randomUUID()}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.rating}</td>
            <td>{book.year_published}</td>
            <td><button id={book.id} onClick={handleDelete} value={book.id}>Delete</button></td>
            <td><button onClick={() => handleEdit(book)}>Edit</button></td>


            </tr>
        ))}
        </tbody>
        </table>
        </>
    )
}