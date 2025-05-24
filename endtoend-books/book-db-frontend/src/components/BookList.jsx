import { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:5000/api/books');
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book, idx) => (
        <div key={idx} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
          <p><strong>Title:</strong> {book.title}</p>
          <p><strong>Edition:</strong> {book.edition}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Publishing Date:</strong> {book.publishingDate}</p>
          <p><strong>Dimensions:</strong> {book.length} x {book.breadth} x {book.thickness} cm</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
