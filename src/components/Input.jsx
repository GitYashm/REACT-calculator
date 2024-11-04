import { useState } from 'react'

function Input({data}) {
    const[inputdata,setInputdata] = useState(data);
    const handleClick = (event)=>{
      // console.log(event);
       if(event.key ==="Enter"){
        const newItem = event.target.value;
        event.target.value = " ";
        const newItemlist = [...inputdata,newItem];
        setInputdata(newItemlist);
       }
  }
   return (
    <div>
        <input onKeyDown={handleClick} type="text" placeholder='Enter Your data'/>
        {inputdata.map((item,index)=>(
          <li key={index}>{item} <button >Add</button></li>
          ))}
        <button  style={{margin:"10px"}}>Add Item</button>
        
    </div>
  )
}

export default Input