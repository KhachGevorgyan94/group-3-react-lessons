import React from "react";
import './style.scss'

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


  state = {
    counter: 0,
  }

  increment = () => {
    this.setState({counter: ++this.state.counter})
  }
  decrement = () => {
    this.setState({counter: --this.state.counter})
  }


  render() {
    return <div className='P-counter-box'>
      <div className='P-counter-value'>
        {/*<span>{this.counter}</span>*/}
        <span>{this.state.counter}</span>
      </div>
      <div className='P-action-block'>
        <button onClick={this.decrement}> -</button>
        <button onClick={this.increment}> +</button>
      </div>
    </div>
  }
}

export default CounterComponent