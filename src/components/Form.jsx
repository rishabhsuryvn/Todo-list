import React, { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

    const onInputchange = (e)=>{
           setInput(e.target.value);
    }
    
    const updateTodo =(title, id, completed)=>{
      const newTodo = todos.map((todo)=>
        todo.id=== id ? {title,id,completed}: todo
      )
      setTodos(newTodo);
      setEditTodo("")
    }

    useEffect(()=>{
      if(editTodo){
        setInput(editTodo.title);
      }
      else{
        setInput("")
      }
    }, [editTodo,setInput]);

    const onSubmit = (e)=>{
        e.preventDefault();
        if(!editTodo){
          setTodos([...todos, {id: uuidv4(), title:input, completed:false}])
          setInput("");
        }
        else{
          updateTodo(input,editTodo.id, editTodo.completed);
        }
        

    };


  return (
    <form onSubmit={onSubmit}> 
        <input type='text' placeholder='Enter a Todo...' className='task-input'
            value={input}
            required
            onChange={onInputchange}
        />
        <button className='button-add' type='submit'>{
          editTodo ? "OK": "Add"
        }</button>
    </form>
  )
}

export default Form
