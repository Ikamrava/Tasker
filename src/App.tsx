import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './model'
import { nanoid } from 'nanoid'
import TodoList from './components/TodoList'

const App: React.FunctionComponent = () => {
  const [todo,setTodo]= useState <string> ("")
  const [alltodo,setAlltodo] = useState<Todo[]>([])


  function HandleAdd(e:React.FormEvent){
    e.preventDefault()
    if(todo){
      setAlltodo(
        [...alltodo,{
        id:nanoid(),
        todo:todo,
        isDone: false
      }])
      setTodo("")
    }
  }




  function changeHandler(e:React.ChangeEvent<HTMLInputElement>){
    setTodo(e.target.value)
  }

  return (
  
    <div className="App">
      <header className='header'>Taskify</header>
      <InputField  todo = {todo} setTodo={changeHandler} onClick={HandleAdd} ></InputField>
      <TodoList alltodo = {alltodo} setAlltodo ={setAlltodo}/>
    </div>
    
  )
}

export default App
