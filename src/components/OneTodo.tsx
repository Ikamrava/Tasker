import React, { useState } from 'react'
import { Todo } from '../model'
import {AiFillEdit,AiFillDelete,AiOutlineCheck} from "react-icons/ai"
import "../components/todolist.css"

type Props ={
  todo:Todo,
  alltodo:Todo[],
  setAlltodo:React.Dispatch<React.SetStateAction<Todo[]>>
}




function OneTodo({todo,alltodo,setAlltodo}:Props) {

  const [edit,setEdit] = useState<boolean>(false)
  const [editTodo,setEditTodo] = useState<string>(todo.todo)

  function doneHandler(id:string){
    
         setAlltodo(alltodo.map((todo)=>
        todo.id === id ?{...todo,isDone:!todo.isDone} :todo
        ))
    }

  function deleteHandler(id:string){
     setAlltodo(alltodo.filter((todo)=>
        todo.id !== id 
        ))
  } 

  function editHandler(isDone:boolean,edit:boolean){
    
    if(!edit&& !isDone){
      setEdit(!edit)
    }else{
      setEdit(true)
    }
    
  }

  function handleedit(e:React.FormEvent,id:string){
    e.preventDefault()
    setAlltodo(alltodo.map((todo)=>
        todo.id === id ?{...todo,todo:editTodo} :todo
        ))
        setEdit(false)
  }

  return (

    <form className='card' onSubmit={(e)=>handleedit(e,todo.id)}>
      {
        edit? (<input value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}></input>):
        (todo.isDone ? 
    (<s className='singleText'>{todo.todo}</s>):
    (<p className='singleText'>{todo.todo}</p>)  
    )
      }
      

      
      
      <div className="iconwrapper">
        <span className="icon" onClick={()=>editHandler(todo.isDone,edit)}><AiFillEdit/></span>
        <span className="icon" onClick={()=>deleteHandler(todo.id)}><AiFillDelete/></span>
        <span className="icon" onClick={()=>doneHandler(todo.id)}><AiOutlineCheck/></span>
      </div>
      
    </form>
  )
}

export default OneTodo
