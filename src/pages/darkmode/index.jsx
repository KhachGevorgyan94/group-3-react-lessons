import React, {useState} from "react";
import './style.scss'

const DarkMode = ({title, description}) => {  // {title, description} = props
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    console.log(isDarkMode)
    setIsDarkMode(!isDarkMode)
  }

  return <div className={`P-box ${isDarkMode ?
    'P-dark-mode' : ''}`}>
    <h3>{title} </h3>
    {description ? <p>{description}</p> : null}
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, odit.</span>
    <label className='P-checkbox '>
      <input
        type="checkbox"
        onChange={toggleDarkMode}
        value={isDarkMode}
      />
      <p>Dark mode</p>
    </label>
  </div>
}

export default DarkMode