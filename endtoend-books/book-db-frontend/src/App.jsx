import BookForm from './components/BookForm';
import BookList from './components/BookList';
import { useState } from 'react';

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="App">
      <h1>Book Database</h1>
      <BookForm onBookAdded={() => setRefresh(!refresh)} />
      <BookList key={refresh} />
    </div>
  );
}

export default App;
