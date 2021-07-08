import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click here</button>
        <h2>Max value is {this.props.maxValue}</h2>
      </div>
    )
  }
}

Counter.propTypes = {
  maxValue: PropTypes.number.isRequired
}

export default Counter