import React from 'react';
import logo from './logo.svg';
// import './App.css';

function Todo() {
  return (
    <div>
      <ul></ul>
      <div>
        <label>
          <input name="todo" />
        </label>
        <button>添加</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
