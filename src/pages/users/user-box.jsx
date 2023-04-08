import './style.scss'
const UserBox = ({item}) => {
  return <div className='P-user-box'>
    <p>firstName: {item.firstName}</p>
    <p>lastName: {item.lastName}</p>
    <p>age: {item.age}</p>
    <p>email: {item.email}</p>
  </div>
}
export default UserBox

