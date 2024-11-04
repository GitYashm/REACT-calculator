import { useState } from 'react'
import '../css/calculator.css'
import Calculatorbtn from './Calculatorbtn'
import Display from './Display'
function Calculator() {
    const [calval, setcalVal] = useState("");

    const btnvalue = (event) =>{
        const btn = event.target.value;
        if(btn ==="AC"){
            setcalVal("");
        }
        else if(btn === "="){
            const result = eval(calval);
            setcalVal(result);
        }
        else{
            const result = calval + btn;
        setcalVal(result);
        }
        
    } 

    
  return (
    <>
   <div className="main">
   <div className="calculatoContainer">
    <Display displayNumber = {calval} />
    <Calculatorbtn value = {btnvalue} />
   </div>
   </div>
   </>
  )
}

export default Calculator