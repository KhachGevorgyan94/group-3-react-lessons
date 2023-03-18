import React from "react";
import Logo from '../../assets/images/logo.svg'
import './style.scss'

class Header extends React.Component {
  render() {
    return <header className={`G-flex G-align-center G-justify-between`}>
      <div className='P-logo'
           style={{backgroundImage:`url('${Logo}')`}}>
        {/*<img src={Logo} alt=""/>*/}
      </div>
      <div className='P-menu'>
        <ul className='G-flex'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </div>
    </header>
  }
}

export default Header