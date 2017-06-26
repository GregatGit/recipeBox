import React, {Component} from 'react'
import data from '../data/recipes.json'

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
      <div>Main - Board</div>
    )
  }
}

export default MainBoard
