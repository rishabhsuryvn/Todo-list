import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck, faTrashCan, faPenToSquare} from '@fortawesome/free-solid-svg-icons'


const TodoList = ({todos, setTodos, setEditTodo}) => {
  
  const handleEdit =({id})=>{
    const findTodo = todos.find((todo)=> todo.id==id)
    setEditTodo(findTodo);
  }
  const handleComplete =(todo)=>{
     setTodos(
      todos.map((item)=>{
        if(item.id===todo.id){
          return {...item, completed: !item.completed}
        }
        return item;
      })
     )
  }

  const handleDelete =({id})=>{
    setTodos(todos.filter((todo)=> todo.id!==id));
  }
  return (
    <div> 
    {todos.map((todo)=>(
      <li className='list-item' key={todo.id}>
        <input type='text' value={todo.title}
        className={`list ${todo.completed ? "complete": ""}`}
        onChange={(e)=> e.preventDefault()}/>
        <button className='button-complete task-button' onClick={()=> handleComplete(todo)}>
        <FontAwesomeIcon icon={faCircleCheck} />
        </button>
        <button className='button-edit task-button' onClick={()=> handleEdit(todo)}>
        <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
        <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </li>
    )
    )}
     </div>
  )
}

export default TodoList
