import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

export const CreateUser = () => {
  const userData = useSelector(state => state.userReducer.editableUser)
  const [textValue, setTextValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setTextValue(e.target.value)
  }

  const handleClick = () => {
    if (isEditMode) {
      editUserData()
    } else {
      createUserData()
    }
    setTextValue('')
  }

  const createUserData = async () => {
    if (textValue.length) {
      setLoading(true)
      const result = await axios.post('https://crudcrud.com/api/930f836115ae432ead0852485b104105/usersData',
        {firstName: textValue})
      if (result.data) {
        setLoading(false)
        dispatch({type: 'ADD_USER_NAME', payload: textValue})
      }
    }
  }

  useEffect(() => {
    if (userData.firstName) {
      setTextValue(userData.firstName)
      setIsEditMode(true)
    }
  }, [userData])

  const editUserData = async () => {
    if (textValue.length) {
      setLoading(true)
      const result = await axios.put(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/usersData/${userData._id}`,
        {firstName: textValue})
      setLoading(false)
      dispatch({type: 'ADD_USER_NAME', payload: textValue})
      setIsEditMode(false)
    }
  }


  return <div>
    <input type="text"
           onChange={handleChange}
           value={textValue}
           defaultValue={textValue}
           placeholder={'user name'}/>
    <button onClick={handleClick}>{loading ? 'Loading...' : isEditMode ? 'Edit User' : 'Create user'}</button>
  </div>
}
