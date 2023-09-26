import React, { useState } from 'react';

function Stack() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const pushToStack = () => {
    if (inputValue) {
      setStack([...stack, inputValue]);
      setInputValue('');
    }
  };

  const popFromStack = () => {
    if (stack.length > 0) {
      const updatedStack = [...stack];
      updatedStack.pop();
      setStack(updatedStack);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Stack Implementation</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter an item"
        />
        <button onClick={pushToStack}>Push</button>
        <button onClick={popFromStack}>Pop</button>
      </div>
      <div>
        <h2>Stack Contents:</h2>
        <ul>
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stack;
