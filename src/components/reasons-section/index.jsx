import React from "react";
import './style.scss'
import Box from "../box";
import CounterComponent from "../counterComponent";

class ReasonsSection extends React.Component {
  state = {
    reasonsList: [
      {
        title: 'Bootstrap-powered',
        description: 'Bootstrap-powered description',
        icon: 'icon-manage-users'
      },
      {
        title: 'Bootstrap-powered',
        description: 'Bootstrap-powered description',
        icon: 'icon-manage-users'
      },
      {
        title: 'Bootstrap-powered',
        description: 'Bootstrap-powered description',
        icon: 'icon-manage-users'
      },
      {
        title: 'Bootstrap-powered',
        description: 'Bootstrap-powered description',
        icon: 'icon-manage-users'
      }
    ]
  }

  render() {
    return <section className='P-reasons-section'>
      <div className='G-container'>
        <div className='P-reasons-title'>
          <h3>Reasons to use this template</h3>
        </div>
        {/*<div className='P-reasons-list'>*/}
        {/*  /!*  Box  componen stexcecinq  vor@ vor@ argumentov  stanum e 3  parametrnern  hamapatasxan dashterov  *!/*/}
        {/*  {this.state.reasonsList.map((item, index) => {*/}
        {/*    return <Box icon={item.icon}*/}
        {/*                title={item.title}*/}
        {/*                description={item.description}/>*/}
        {/*  })}*/}

        {/*</div>*/}

        <CounterComponent/>
        <CounterComponent/>
        <CounterComponent/>
        <CounterComponent/>

      </div>
    </section>

  }
}

export default ReasonsSection