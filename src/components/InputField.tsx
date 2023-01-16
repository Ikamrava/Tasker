import React from 'react'
import "../components/inputField.css"

interface Props {
  todo:string,
  setTodo(e:React.ChangeEvent<HTMLInputElement>):void,
  onClick(e:React.FormEvent):void
  
}



function InputField({todo,setTodo,onClick}:Props){
   
 
  return (
    <div className='inputWrapper'>
      <form className='inputForm' onSubmit={onClick}>
        <input className='inputField' 
        type="text" 
        placeholder='Task'
        value={todo}
        onChange= {setTodo}
        />
        <button className='goBtn' type='submit'>Go</button>

      </form>
    </div>
  )
}

export default InputField
