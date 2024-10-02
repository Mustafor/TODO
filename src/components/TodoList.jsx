import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, setTodos}) => {
  return (
    <ul className='w-[600px] space-y-5 p-5 rounded-md bg-slate-400 mx-auto mt-5'>
        {todos.map((item, index) => <TodoItem todos={todos} index={index} setTodos={setTodos} item = {item} key = {item.id}/>)}
    </ul>
  )
}

export default TodoList