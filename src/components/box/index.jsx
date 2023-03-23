import React from "react";

class Box extends React.Component {
  //    this.props  {title={''} description={''}}

  constructor(props) {
    console.log(props, 'props')
    super();
  }
  /**
   * Class componentin karox eqn poxancel  parametrner  ayl componentic
   *
   * ev ayd  poxancvac parametrnern hasaneli en linum  this.props  objecti mej
   * ayd ogject@  karox eqn tesnel  constructori  mej  ver@ nshvac tarberakum
   * aysinqn  inche stacvum, argumentov haytararvac parametrneri anunner@  ev  propsic  vercnelu anunner@ petq e  nujyn@ linen
   *
   *
   * **/
  render() {
    return <div className='P-box'>
      <i className={`icon ${this.props.icon}`}/>
      <h3>{this.props.title}</h3>
      <p>{this.props.description}</p>

      {/*{this.props.children}*/}
    </div>
  }
}

export default Box


