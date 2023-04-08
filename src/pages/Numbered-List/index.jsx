import './style.scss'

import React, {useState} from 'react';

function NumberedList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={addItem}>Add</button>
      <ol>
        {items.map((item, index) => (
          <li key={index}><span>{index + 1}</span> {item}</li>
        ))}
      </ol>
    </div>
  );
}

export default NumberedList;