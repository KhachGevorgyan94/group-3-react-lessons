import React, {useEffect, useRef, useState} from "react";
import SliderComponent from "../sliderComponent";

const UseRefComponent = ()=>{

  const chatRef = useRef(null)

  const [showButton, setShowButton] = useState(false)
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  })
  const handleScrollData = (e) => {

  }

  useEffect(() => {
    console.log(chatRef)
    if (chatRef.current) {
      const size = chatRef.current.getBoundingClientRect()
      setBoxSize({width: size.width, height: size.height})
    }
    // chenq kirarum nman baner reacti mijavayrum
    // let x = document.getElementsByClassName('P-chat-content')
    //
    // console.log(x)
  }, [chatRef])

  const incrementSize = () => {
    setBoxSize({width: boxSize.width + 10, height: boxSize.height + 10})
  }

  useEffect(() => {
    // tarberak 1
    // setShowButton(boxSize.width > 130)
    // tarberak 2
    if (boxSize.width > 130) {
      setShowButton(true)
    }else{
      setShowButton(false)
    }
  }, [boxSize])

  const decrement = () => {
    setBoxSize({width: boxSize.width - 10, height: boxSize.height - 10})

  }

  console.log(boxSize)
  return <div className='P-chat-content'
              style={{
                width: boxSize.width > 0 ? boxSize.width + 'px' : '100px',
                height: boxSize.height > 0 ? boxSize.height + 'px' : '100px'
              }}
              ref={chatRef}>

    {showButton ? <button onClick={decrement}>decrement</button> : null}
    <button onClick={incrementSize}>increment</button>

    <SliderComponent/>
  </div>
}
export default UseRefComponent