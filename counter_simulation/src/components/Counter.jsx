import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Simulate fetching initial count value
  useEffect(() => {
    // Simulate API call
    const fetchInitialCount = () => {
      setTimeout(() => {
        const initialValue = 5; // Simulated fetched value
        setCount(initialValue);
      }, 1000); // Delay to simulate network
    };

    fetchInitialCount();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>{' '}
      <button onClick={() => setCount(count - 1)}>Decrement</button>{' '}
      <button onClick={() => setCount(count * 2)}>Double</button>{' '}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
