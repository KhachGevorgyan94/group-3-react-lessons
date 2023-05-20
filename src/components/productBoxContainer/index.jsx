import Box from "./box";
import {useEffect, useState} from "react";

const ProductBoxContainer = () => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
  },[])
  console.log('aaaaaaaaaaaaaaa')

  return <div>
    <button onClick={()=>setCount(count+1)}>Click me</button>
    <Box />
    {count}
  </div>
}
export default ProductBoxContainer