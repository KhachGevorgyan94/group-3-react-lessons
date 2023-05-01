import {useState} from "react";
import {useDispatch} from "react-redux";

export const CreateUser = () => {
  const [textValue, setTextValue] = useState()

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setTextValue(e.target.value)
  }

  const handleClick = () => {
    dispatch({type: 'ADD_USER', payload: textValue})
    setTextValue('')
  }


  return <div>
    <input type="text"
           onChange={handleChange}
           value={textValue}
           defaultValue={textValue}
           placeholder={'user name'}/>
    <button onClick={handleClick}>Create user</button>
  </div>
}
