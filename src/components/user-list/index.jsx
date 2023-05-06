import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {useEffect, useState} from "react";

export const UserList = () => {
  const userList = useSelector(state => state.userReducer.userList)
  const userName = useSelector(state => state.userReducer.userName)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const getUsersList = async () => {
    const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/usersData')
    if (result.data) {
      dispatch({type: 'ADD_USER', payload: result.data})
      dispatch({type: 'ADD_USER_NAME', payload: ''})
    }
  }
  useEffect(() => {
    getUsersList()
  }, [])

  useEffect(() => {
    if (userName.length) {
      getUsersList()
    }
  }, [userName])

  const deleteUser = async (id) => {
    await axios.delete(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/usersData/${id}`)
    getUsersList()
  }

  const editUser = (user) => {
    dispatch({type: 'EDIT_USER', payload: user})
  }


  return <div className='P-user-list'>
    {!loading && userList.length ? userList.map((item, index) => {
      return <div style={{display: 'flex'}}>
        <p>{item.firstName}</p>
        <button onClick={() => deleteUser(item._id)}>Delete</button>
        <button onClick={() => editUser(item)}>Edit</button>
      </div>
    }) : <p>User list was empty</p>}

    {loading ? <p>Loading users ...</p> : null}
  </div>
}