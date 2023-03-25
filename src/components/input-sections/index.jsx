import React from "react";
import './style.scss'
import CustomInput from "../custom-input";

class InputSections extends React.Component {
  state = {
    inputValue: '',
    errorMessage: '',
    formData: {
      firstName: '',
      lastName: '',
      age: '',
      position: ''
    }
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value})
  }

  handleClick = () => {
    if (this.validation()) {
      console.log(this.state.inputValue)
    }

    console.log(this.state.formData)
  }

  validation = () => {
    let isValidation = true
    let errorText = ''
    if (!this.state.inputValue.trim().length) {
      errorText = 'Xndrum em racnel dasht@'
      isValidation = false
    }
    if (this.state.inputValue.length && this.state.inputValue.length > 20) {
      errorText = 'Texti erkarutyun@ chpetq e gerazanci 20@'
      isValidation = false
    }

    this.setState({errorMessage: errorText})

    return isValidation
  }

  handleMultiChange = (e) => {
    const {formData} = this.state // {formData:{}}
    formData[e.target.name] = e.target.value
    this.setState(formData)
  }

  render() {

    const {formData, inputValue} = this.state
    return <div className='P-input-section'>
      <div className='G-container'>
        <div className='P-title'>
          <h3>work with inputs</h3>
          <p>input Value: {inputValue}</p>
        </div>

        <div className={`P-input-block`}>
          <CustomInput name={'inputValue'}
                       placeholder={'inputValue'}
                       value={this.state.inputValue}
                       error={!!this.state.errorMessage}
                       errorText={this.state.errorMessage}
                       type='text'
                       onChange={this.handleChange}
          />
        </div>


        <div className='P-form-data'>
          <div className={`P-input-block-100`}>
            <label className='G-input'>
              <input placeholder='First Name'
                     type="text"
                     name={'firstName'}
                     value={formData.firstName}
                     onChange={this.handleMultiChange}
              />
            </label>
          </div>
          <div className={`P-input-block-33`}>
            <label className='G-input'>
              <input placeholder='Last Name'
                     type="text"
                     name='lastName'
                     onChange={this.handleMultiChange}
              />
            </label>
          </div>
          <div className={`P-input-block-33`}>
            <label className='G-input'>
              <input placeholder='age'
                     type="text"
                     name='age'
                     onChange={this.handleMultiChange}
              />
            </label>
          </div>
          <div className={`P-input-block-33`}>
            <label className='G-input'>
              <input placeholder='position'
                     type="text"
                     name='position'
                     onChange={this.handleMultiChange}
              />
            </label>
          </div>

        </div>
        <div className='P-send-message-btn'>
          <button onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    </div>
  }
}

export default InputSections