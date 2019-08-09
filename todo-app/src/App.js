import React from 'react';
import logo from './logo.svg';
// import './App.css';

function Todo() {
  const [input, setInput] = React.useState('')

  const [todos, setTodos] = React.useState([])
  const [finishedCount, setFinishedCount] = React.useState(0)
  const [cancelledCount, setCancelledCount] = React.useState(0)

  function handleAddTodo(event) {
    setTodos([...todos, input])
    setInput('')
  }

  function handleInputValueChange(event) {
    setInput(event.target.value)
  }

  function handleFinishTodo(todo, index) {
    setFinishedCount(finishedCount + 1)
    todos.splice(index, 1)
    setTodos([...todos])
  }

  function handleCancelTodo(todo, index) {
    setCancelledCount(cancelledCount + 1)
    todos.splice(index, 1)
    setTodos([...todos])
  }

  return (
    <div>
      <div>
        <span>已完成 {finishedCount} 件</span>
        <span> / </span>
        <span>已取消 {cancelledCount} 件</span>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              <span>
                <button onClick={() => handleFinishTodo(todo, index)}>完成</button>
                <button onClick={() => handleCancelTodo(todo, index)}>取消</button>
              </span>
            </li>
          )
        })}
      </ul>
      <div>
        <label>
          <input id="todo-input" 
                 name="todo-input" 
                 value={input} 
                 onChange={handleInputValueChange}
          />
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
