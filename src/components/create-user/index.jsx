import {useState} from "react";
import {useDispatch} from "react-redux";
import {addUser} from "../../store/slices/user-slice";

export const CreateUser = () => {
  const [textValue, setTextValue] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setTextValue(e.target.value)
  }

  const handleClick = () => {
    // redux
    // dispatch({type: 'ADD_USER', payload: textValue})
    // redux toolkit
    dispatch(addUser(textValue))
    setTextValue('')
  }


  return <div>
    <input type="text"
           onChange={handleChange}
           value={textValue}
           placeholder={'user name'}/>
    <button onClick={handleClick}>Create user</button>
  </div>
}
