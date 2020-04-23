import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRed, setIsRed] = useState(false);

  return (
    <div style={{ margin: '10em' }}>
      <div
        style={isRed ? { color: 'red' } : undefined}>
        {count}
      </div>
      <button onClick={() => {
        setCount(count + 1);
        setIsRed((count + 1) % 3 === 0);
      }}>count up</button>
    </div>
  );
};