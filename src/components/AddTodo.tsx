import { ChangeEvent, MouseEvent, useState } from "react";



const AddTodo = () => {
  const [value,setValue] = useState<string>('')

  const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{

   setValue(event.target.value)
  }

  const handleAdd = (event:MouseEvent<HTMLButtonElement>) =>{
    console.log(value)
  }
  
  return (
   <div>
     <input type="text" value={value} onChange={handleChange}/>
     <button onClick={handleAdd}>Add</button>
   </div>
  )
}

export default AddTodo;