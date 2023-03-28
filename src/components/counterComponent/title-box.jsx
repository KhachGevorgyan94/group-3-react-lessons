import React from "react";

class TitleBox extends React.Component {
  testInterval = null

  componentDidMount() {
    console.log('componentDidMount TitleBox')
    this.testInterval = setInterval(() => {
      console.log('Hi i am run')
    }, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount TitleBox')
    clearInterval(this.testInterval)
  }

  render() {
    return (
      <div>
        <h1>TEST TITLE</h1>
      </div>
    );
  }
}

export default TitleBox