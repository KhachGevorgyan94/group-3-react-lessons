import React from "react";
import './style.scss'
import TitleBox from "./title-box";

class CounterComponent extends React.Component {

  /**
   * Componentnern himnakanum bajanvac en  linum gaxaparapes 3  masi
   *
   * 1. popoxakanner pahelu  tiruyt {State}
   *
   * 2. funkcianeri hamar naxatesvac  turyt  voronc mijocov  peq e gorcoxutyunner katarel  mer popoxakanneri  het
   *
   * 3. gorcoxutyunneric kaxvac  ayd  popoxakanneri arjeqnern  cuyc tali view mijavar
   *
   * cankacac tesaki popoxutyuner katarum eqn staytum pahvac popoxakanneri  het
   * mimiayn ayd jamanak  react@ kahskana vor  petq e  tvyal  component@  render lini
   *
   * */


  constructor() {
    super();

    console.log(' step 1 run constructor')
  }


  state = {
    counter: 0,
    isCheck: false,
    isLoading: false,
    isShow: false
  }

  increment = () => {
    this.setState({counter: ++this.state.counter})
  }
  decrement = () => {
    this.setState({counter: --this.state.counter})
  }


  componentDidMount() {
    console.log('step 3 run componentDidMount')
    this.getUsersList()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps)
    console.log(prevState)
    console.log(this.state)
    console.log('step 4 componentDidUpdate')
    console.log(this.state.counter,'step 1 counter')


  }

  componentWillUnmount() {
  }

  getUsersList = () => {
    console.log('users list get in progress')
    console.log(this.state.isCheck, 'before setState')
    this.setState({isCheck: true, isLoading: true}, () => {
      console.log(this.state.isCheck, 'updated setState')
      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      //   .then(response => response.json())
      //   .then(json => {
      //     console.log(json)
      //     this.setState({isLoading: false})
      //   })
    })
    console.log(this.state.isCheck, 'after setState')

    // this.setState({isLoading:false})

  }


  toggleShowBox = () => {
    this.setState({isShow: !this.state.isShow})
  }

  render() {
    return <div className='P-counter-box'>

      {console.log('step 2 run render html')}
      {console.log(this.state.isCheck, 'step 2 run render html')}
      <div className='P-counter-value'>
        {/*<span>{this.counter}</span>*/}
        <span>{this.state.counter}</span>
      </div>
      <div className={`P-action-block ${this.state.isCheck ? 'P-red' : ''}`}>
        <button onClick={this.decrement}> -</button>
        <button onClick={this.increment}> +</button>
      </div>

      {this.state.isLoading ? <p>Loading....</p> : null}

      {/*  for will unmount*/}
      <button onClick={this.toggleShowBox}>Hide/ show box</button>
      {this.state.isShow ? <TitleBox/> : null}
    </div>
  }
}

export default CounterComponent