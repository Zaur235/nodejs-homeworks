import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookList from './components/BookList'

const App = () => {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    try {
      const res = await axios.get('/api/books')
      setBooks(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const deleteBook = async (id) => {
    try {
      await axios.delete(`/api/books/${id}`)
      setBooks(books.filter((b) => b._id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f4f5f7',
        fontFamily: 'Poppins, sans-serif',
        padding: '40px',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        Bookify Library
      </h1>

      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
        (backend elave eliyir)
      </p>

      <BookList books={books} deleteBook={deleteBook} />
    </div>
  )
}

export default App
