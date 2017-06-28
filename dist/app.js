import React from 'react'
import ReactDOM from 'react-dom'
import MainBoard from './components/mainboard'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <h1>Recipes</h1>
        <img alt="freeCodeCamp logo" src="https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp-alternative.png" />
        <p>a freeCodeCamp challange</p>
        <p>by Greg Duncan</p>
        <MainBoard />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-container'))
