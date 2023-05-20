import {useEffect, memo} from "react";


const Box = ({count}) => {

  useEffect(()=>{
  },[])


  console.log('bbbbbbbbbbbbbb')

  return <div>
    Box
  </div>
}
export default memo(Box)