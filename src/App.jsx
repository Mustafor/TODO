import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  localStorage.setItem("todos", JSON.stringify(todos))
  return (
    <>
    <TodoForm setTodos={setTodos} todos={todos}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
