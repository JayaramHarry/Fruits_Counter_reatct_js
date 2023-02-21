// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  onMangoesCount = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBananasCount = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes{' '}
            <span className="count">{banana}</span> bananas
          </h1>
          <div className="fruit-list-container">
            <div className="fruits-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoes"
              />
              <button
                className="button"
                type="button"
                onClick={this.onMangoesCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruits-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="bananas"
              />
              <button
                className="button"
                type="button"
                onClick={this.onBananasCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
