import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [lastExpression, setLastExpression] = useState('');

  const appendValue = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay('');
    setLastExpression('');
  };

  const calculate = () => {
    try {
      setLastExpression(display);
      const result = Function('"use strict";return (' + display + ')')();
      setDisplay(result.toString());
    } catch (err) {
      alert('Invalid expression');
      setDisplay('');
      setLastExpression('');
    }
  };

  return (
    <div className="calculator">
      <div className="display-row">
        {lastExpression && (
          <div className="expression-display">{lastExpression}</div>
        )}
        <input type="text" value={display} disabled />
      </div>
      <div className="button-grid">
        <div className="num-buttons">
          <button onClick={() => appendValue('7')}>7</button>
          <button onClick={() => appendValue('8')}>8</button>
          <button onClick={() => appendValue('9')}>9</button>
          <button onClick={() => appendValue('4')}>4</button>
          <button onClick={() => appendValue('5')}>5</button>
          <button onClick={() => appendValue('6')}>6</button>
          <button onClick={() => appendValue('1')}>1</button>
          <button onClick={() => appendValue('2')}>2</button>
          <button onClick={() => appendValue('3')}>3</button>
          <button onClick={() => appendValue('0')}>0</button>
          <button onClick={() => appendValue('.')}>.</button>
          <button onClick={calculate} className="equals">=</button>
        </div>
        <div className="op-buttons">
          <button onClick={clearDisplay} className="clear">C</button>
          <button onClick={() => appendValue('/')}>÷</button>
          <button onClick={() => appendValue('*')}>×</button>
          <button onClick={() => appendValue('-')}>−</button>
          <button onClick={() => appendValue('+')}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
