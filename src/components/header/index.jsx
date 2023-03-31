import React from "react";
import Logo from '../../assets/images/logo.svg'
import './style.scss'
import {Link, NavLink} from 'react-router-dom'
import withRouter from "../with-router";

class Header extends React.Component {

  goToHomePage = () => {
    const {navigate,} = this.props
    navigate('/')
  }

  render() {
    return <header className={`G-flex G-align-center G-justify-between`}>
      <div className='P-logo'
           style={{backgroundImage: `url('${Logo}')`}}>
        {/*<img src={Logo} alt=""/>*/}
      </div>
      <div className='P-menu'>
        <ul className='G-flex'>

          {/* NavLink i  mijocov katarum e    ejeri  routingn,  iranq irancic nerkayacnum en a teg  vori mijocov haskacnum eqn te  vor  ejn  baci  to parametri mjicov  */}
          <li><NavLink className={({isActive, isPending}) =>
            isActive
              ? "P-active"
              : ""
          } to='/'>Home</NavLink></li>
          <li><NavLink className={({isActive, isPending}) =>
            isActive
              ? "P-active"
              : ""
          } to='/about-us'>About us </NavLink></li>
          <li><NavLink className={({isActive, isPending}) =>
            isActive
              ? "P-active"
              : ""
          } to='/contact-us'>Contact us</NavLink></li>
        </ul>
      </div>

      <button onClick={this.goToHomePage}> go to home page</button>
    </header>
  }
}

export default withRouter(Header)