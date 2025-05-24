import { useState } from 'react';
import axios from 'axios';

const BookForm = ({ onBookAdded }) => {
  const [book, setBook] = useState({
    title: '',
    edition: '',
    genre: '',
    author: '',
    publishingDate: '',
    length: '',
    breadth: '',
    thickness: '',
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/books', book);
    setBook({ title: '', edition: '', genre: '', author: '', publishingDate: '', length: '', breadth: '', thickness: '' });
    onBookAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      {['title', 'edition', 'genre', 'author', 'publishingDate', 'length', 'breadth', 'thickness'].map(field => (
        <div key={field}>
          <label>{field}:</label>
          <input type={field === 'publishingDate' ? 'date' : 'text'} name={field} value={book[field]} onChange={handleChange} required />
        </div>
      ))}
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
