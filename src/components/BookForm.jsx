import React, { useState, useEffect } from 'react';

const BookForm = ({ updated, setUpdated, editBook, initialBook }) => {
   
    const [book, setBook] = useState(initialBook);

    // Update form state when editBook changes
    useEffect(() => {
        if (editBook) {
            setBook(editBook);
        } else {
            setBook(initialBook);
        }
    }, [editBook]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setBook(prevBook => ({ ...prevBook, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = book.id ? `http://localhost:3001/books/${book.id}` : "http://localhost:3001/books";
        const method = book.id ? 'PUT' : 'POST';  // Determine method based on presence of an ID
        
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setUpdated(updated=>!updated);
            setBook(initialBook);  // Reset the book form after submission
        }).catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={book.title || ''} id='title' placeholder='Enter book title' onChange={handleChange} />
                <input type="text" value={book.author || ''} id='author' placeholder='Enter book author' onChange={handleChange} />
                <input type="number" value={book.rating || ''} id='rating' placeholder='Enter book rating' onChange={handleChange} />
                <input type="number" value={book.year_published || ''} id='year_published' placeholder='Enter year published' onChange={handleChange} />
                <button type='submit'>{book.id ? 'Update' : 'Submit'}</button>
            </form>
        </>
    )
}

export default BookForm;
