import React, {useEffect, useRef, useState} from 'react';
import SliderComponent from "./components/sliderComponent";
import UseRefComponent from "./components/useRefComponent";
import ProductBoxContainer from "./components/productBoxContainer";
import UseMemoBox from "./components/productBoxContainer/useMemoBox";
import UseCallBackBox from "./components/productBoxContainer/useCallBackBox";

function App() {
return <>
  {/*<UseRefComponent/>*/}
  {/*<ProductBoxContainer/>*/}
  {/*<UseMemoBox/>*/}
  <UseCallBackBox/>
</>
}

export default App;