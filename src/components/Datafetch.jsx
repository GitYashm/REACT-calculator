import { useState } from "react"

function Datafetch({data}) {
  if(data.length === ""){
    setError("Data is Empty");
  }
  return <>
  <div className="data">
  {data.map((item,index) =>(
    
      <li key={index}>{item} <button>Add</button></li>
    ))}
  </div>
  </>
}

export default Datafetch