import React, {useState} from 'react'
import BookList from './BookList.jsx'
import BookForm from './BookForm.jsx'
import '../App.css'


const BookApp = () => {
    const initialBook = { id: '', title: '', author: '', rating: '', year_published: '' };

    const [updated, setUpdated]= useState(false);
    const [editBook, setEditBook] = useState(initialBook);
    

  return (
    <>
    
    
            <BookForm editBook={editBook} setUpdated={setUpdated} updated={updated} initialBook={initialBook} />
            <BookList setEditBook={setEditBook} setUpdated={setUpdated} updated={updated} />
      
      </>
  )
}

export default BookApp
