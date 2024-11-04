
import { useState } from "react";
import Datafetch from "./components/Datafetch";
import Input from "./components/Input";
import Calculator from "./components/Calculator";
function App() {
  
  const [data,setData]  = useState(["papaya","banana","orange"]);


  return (
    <>
    {/* <Input data = {data}/>
    <h1>Fisrt</h1>
    <Datafetch data = {data}/>
    <h1>Second</h1>
    <Datafetch data = {data}/> */}
    <Calculator/>
    </>
  )
}

export default App
