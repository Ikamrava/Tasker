import React from 'react'
import { Todo } from '../model'
import OneTodo from './OneTodo'
import "../components/todolist.css"

interface Props{
    alltodo:Todo[]
    setAlltodo:React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoList({alltodo,setAlltodo}:Props) {
    

    

 const allTasks = alltodo.map(item=>{
    if(item){
    return(
        <OneTodo
        key={item.id}
        todo={item}
        setAlltodo={setAlltodo}
        alltodo={alltodo}
        />)
    }
 
    
 })

  return (
    <div className='listsWrapper'>
      {allTasks}
    </div>
  )
}

export default TodoList
