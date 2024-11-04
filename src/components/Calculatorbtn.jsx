function Calculatorbtn({value}) {
  return (
    <div className="btncontainer">
    <div className="btn1">
        <button value={"AC"} onClick={value} className='oper'>AC</button>
        <button value={"000"} onClick={value} className='oper'>000</button>
        <button value={"/"} onClick={value} className='oper'>/</button>
        <button value={"+"} onClick={value} className='oper'>+</button>
    </div>
    <div className="btn2">
        <button value={"7"} onClick={value}>7</button>
        <button value={"8"} onClick={value}>8</button>
        <button value={"9"} onClick={value}>9</button>
        <button value={"-"} onClick={value} className='oper'>-</button>
    </div>
    <div className="btn3">
        <button value={"4"} onClick={value}>4</button>
        <button value={"5"} onClick={value}>5</button>
        <button value={"6"} onClick={value}>6</button>
        <button value={"%"} onClick={value} className='oper'>%</button>
    </div>
    <div className="btn4">
        <button value={"1"} onClick={value}>1</button>
        <button value={"2"} onClick={value}>2</button>
        <button value={"3"} onClick={value}>3</button>
        <button value={"*"} onClick={value} className='oper'>X</button>
    </div>
    <div className="btn5">
        <button value={"0"} onClick={value}>0</button>
        <button value={"00"} onClick={value}>00</button>
        <button value={"."} onClick={value}>.</button>
        <button value={"="} onClick={value} className='equls oper'>=</button>
    </div>
    </div>
  )
}

export default Calculatorbtn