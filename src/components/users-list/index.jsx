import React from "react";
import './style.scss'

class UsersList extends React.Component {
  /**
   * Cankacac component  voronq stexcum eqn  class objeci mijocov  ir mej  hasaneli e  {construcor} bajinn
   *
   * class  componentneri jamanak mer  bolor popoxakanner@ pahum enq Reacti hamar naxatesvac {state} objecti  tiruytum
   *
   * greladzevn  hetevyaln e
   *  state = {
   *     counter: 0,
   *     isDark: false,
   *     usersList: [
   *       {name: 'Khachik', age: 29},
   *       {name: 'Khachik 1', age: 29},
   *       {name: 'Khachik 2', age: 29},
   *       {name: 'Khachik 3', age: 29},
   *       {name: 'Khachik 4', age: 29},
   *     ]
   *   }
   *
   *   isk  stayti mej  pahvac popoxakanneri arjeqner@ popoxaelu hamar kirarum eqn
   *   hetevyal  Reacti  koxmic trvac  funkcian
   *   setState({}) ays  objecti mej spasum e hamapatasxa stayti key@ ev  iran hamapatsxan  nor popoxvox arejq@
   *   orinak ` this.setState({isDark: !this.state.isDark})
   *
   *
   *
   *   html  tiruytum  vorpiszi karoxananq kirareel  popoxakannern  ogtagorcum eqn {}  ays dzevavor pakagcern
   *   voronc mej arden karox eqn  grel  js lokikaner,  inch vor paymanner  kam  gorcxutyunner
   *
   *
   * **/
  constructor() {
    super();
    console.log('cccccccccccccccccc')
  }

  state = {
    counter: 0,
    isDark: false,
    usersList: [
      {name: 'Khachik', age: 29},
      {name: 'Khachik 1', age: 29},
      {name: 'Khachik 2', age: 29},
      {name: 'Khachik 3', age: 29},
      {name: 'Khachik 4', age: 29},
    ]
  }

  counter = () => {
    // console.log(this.state.counter++)
    this.setState({counter: ++this.state.counter})
    console.log('bbbbbbbbbbbbbbbb')
  }


  changeDarkMode = () => {
    this.setState({isDark: !this.state.isDark})
  }

  render() {
    return <section className={`P-users-list ${this.state.isDark ? 'P-dark-mode' : ''} `}>
      <div className='G-container'>
        <div>
          <h1>Counter : {this.state.counter}</h1>
          <button onClick={this.counter}>Click me</button>
          <button onClick={this.changeDarkMode}>{this.state.isDark ? 'Change Light Mode' : 'Change Dark Mode'}</button>
        </div>
        <div className='P-user-list-block'>
          <ul>
            {this.state.usersList.map((item, index) => {
              return <li key={index}>{item.name} {item.age}</li>
            })}
          </ul>
        </div>
      </div>
    </section>
  }
}

export default UsersList