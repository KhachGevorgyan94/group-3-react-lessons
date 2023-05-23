import {useSelector} from "react-redux";

export const UserList = () => {
  // redux
  // const userList = useSelector(state => state.userReducer.userList)
  //  redux toolit  nuyn tarbaerakov
  const userList = useSelector(state => state.userSlice.userList)

  return <div className='P-user-list'>
    {userList.length ? userList.map((item, index) => {
      return <p>{item}</p>
    }) : <p>User list was empty</p>}
  </div>
}