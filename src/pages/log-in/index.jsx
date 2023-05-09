import './style.css'
import {useState} from "react";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    if (formData.password && formData.email) {
      localStorage.setItem('test-token', formData.email + '_' + formData.password)
      window.location.reload()
    }
  }

  return <div className='P-login-block'>
    <div className='P-login-box'>
      <label>
        <input name={'email'} onChange={handleChange} type="text" placeholder='email'/>
      </label>
      <label>
        <input name={'password'} onChange={handleChange} type="password" placeholder={'Password'}/>
      </label>
      <button onClick={handleClick}>Log in</button>
    </div>
  </div>
}
export default LogIn