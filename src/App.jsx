import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Erro');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <button className="btn" onClick={() => handleClick('1')}>1</button>
        <button className="btn" onClick={() => handleClick('2')}>2</button>
        <button className="btn" onClick={() => handleClick('3')}>3</button>
        <button className="btn" onClick={() => handleClick('+')}>+</button>

        <button className="btn" onClick={() => handleClick('4')}>4</button>
        <button className="btn" onClick={() => handleClick('5')}>5</button>
        <button className="btn" onClick={() => handleClick('6')}>6</button>
        <button className="btn" onClick={() => handleClick('-')}>-</button>

        <button className="btn" onClick={() => handleClick('7')}>7</button>
        <button className="btn" onClick={() => handleClick('8')}>8</button>
        <button className="btn" onClick={() => handleClick('9')}>9</button>
        <button className="btn" onClick={() => handleClick('*')}>*</button>

        <button className="btn" onClick={() => handleClick('0')}>0</button>
        <button className="btn" onClick={() => handleClick('.')}>.</button>
        <button className="btn" onClick={handleEqual}>=</button>
        <button className="btn" onClick={() => handleClick('/')}>/</button>

        <button className="btn clear" onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default App;
