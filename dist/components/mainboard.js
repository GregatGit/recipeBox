import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import data from '../data/recipes.json'
import Recipe from './recipe'


class MainBoard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount () {
    console.log(data)
    data.forEach((recipe) => {
      this.setState(recipe)
    })
  }
  render () {
    return (
      <div>
        <h1>Main - Board</h1>
        <MuiThemeProvider>
          <Recipe />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default MainBoard
