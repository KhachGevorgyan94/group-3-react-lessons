import React from "react";

class CustomInput extends React.Component {


  //  this.props = {
  // name
  // placeholder
  // value
  // error
  // errorText
  // type
  // onChange
  //  }


  constructor(props) {
    super();
    console.log(props)
  }

  render() {
    return <div>
      <label className='G-input'>
        <input placeholder={this.props.placeholder}
               type={this.props.type}
               name={this.props.name}
               value={this.props.value}
               onChange={this.props.onChange}
        />
        {this.props.error ? <p className='P-error-text'>{this.props.errorText}</p> : null}
      </label>
    </div>
  }
}

export default CustomInput