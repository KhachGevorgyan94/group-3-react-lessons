import Box1 from "./components/box-1";
import {useEffect, useState} from "react";
import Box2 from "./components/box-2";
import Modal from "./components/modal";
import Login from "./components/login";
import QuestionModal from "./components/question-modal";

const App = () => {
  const [inputValue, setInputValue] = useState('Hi box 1')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenModalQuestion, setIsOpenModalQuestion] = useState(false)

  return <div className='P-data'>
    <Box1 inputValue={inputValue} onChange={setInputValue}/>
    <Box2 inputValue={inputValue}/>
    <button onClick={() => setIsOpenModal(true)}>Open Modal Login</button>
    <button onClick={() => setIsOpenModalQuestion(true)}>Open Modal question</button>

    {isOpenModal ? <Modal className='P-login-modal'
                          closeModal={setIsOpenModal}>
      <Login closeModal={setIsOpenModal}/>
    </Modal> : null}


    {isOpenModalQuestion ? <Modal className='P-login-modal'
                                  closeModal={setIsOpenModalQuestion}>
      <QuestionModal closeModal={setIsOpenModalQuestion}/>
    </Modal> : null}
  </div>
}

export default App

