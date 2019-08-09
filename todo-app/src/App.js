import React from 'react';
import logo from './logo.svg';
// import './App.css';

function Todo() {
  const [todos, setTodos] = React.useState([])

  function handleAddTodo(event) {
    const todoInput = document.getElementById('todo-input')
    setTodos([...todos, todoInput.value])
    todoInput.value = ''
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
            </li>
          )
        })}
      </ul>
      <div>
        <label>
          <input id="todo-input" name="todo-input" />
        </label>
        <button onClick={handleAddTodo}>添加</button>
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
