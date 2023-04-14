import React, {useEffect, useState} from "react";
import './style.scss'

const Box1 = ({inputValue, onChange}) => {
  const [boxValue, setInputValue] = useState('')
  useEffect(()=>{
    console.log(inputValue, 'Box1')
    setInputValue(inputValue)
  },[])


  const handleCLick = () => {
    onChange(boxValue)
    console.log(boxValue)
  }

  return <div className='P-box-1'>
    Box 1
    <input value={boxValue} type="text" onChange={(e) => setInputValue(e.target.value)}/>
    <button onClick={handleCLick}>Click me</button>
  </div>
}


export default Box1