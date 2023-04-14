const Login = ({closeModal})=>{
  return <div>
    <input type="text" placeholder='email'/>
    <input type="text" placeholder='password'/>

    <button>Add</button>
    <button onClick={()=>closeModal(false)}>Close</button>
  </div>
}
export default Login