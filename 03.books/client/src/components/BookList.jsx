import React from 'react'

const BookList = ({ books, deleteBook }) => {
  if (books.length === 0) {
    return <p style={{ textAlign: 'center', color: '#777' }}>No books 😕</p>
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
      }}
    >
      {books.map((book) => (
        <div
          key={book._id}
          style={{
            background: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          <h2 style={{ color: '#333', marginBottom: '8px' }}>{book.title}</h2>
          <p style={{ color: '#666', marginBottom: '4px' }}>
            Author: <strong>{book.author}</strong>
          </p>
          <p style={{ color: '#888' }}>Year: {book.year}</p>
          <button
            onClick={() => deleteBook(book._id)}
            style={{
              marginTop: '15px',
              background: '#ff5c5c',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.background = '#e84a4a')}
            onMouseLeave={(e) => (e.target.style.background = '#ff5c5c')}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default BookList
