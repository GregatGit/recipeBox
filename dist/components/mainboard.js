import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import data from '../data/recipes.json'
import Recipe from './recipe'
console.log('the data = ', data)
const theRecipes = []

class MainBoard extends React.Component {
  constructor (props) {
    super(props)

    if (localStorage['myRecipes']){
      console.log('recipes in local')
    }else{
      console.log('loading local storage')
      //localStorage.setItem('myRecipes', JSON.stringify(data))
      this.updateLocalStorage(data)
      
    }
    this.state = {
    }
  }
  
  componentDidMount () {
    console.log('CDM', data)
    let myData = JSON.parse(localStorage.myRecipes)
    console.log('my Data ', myData)
    myData.forEach((recipe) => {
      this.setState(recipe)
    })
  }
  compareLocalStorage = (str) => {
    if (typeof str !== 'string'){
      str = JSON.stringify(str)
    }
    return (str === localStorage.myRecipes)
  }
  updateLocalStorage = (obj) => {
    localStorage.setItem('myRecipes', JSON.stringify(obj))
  }
  editRecipe = (recipe) => {
    this.setState(recipe)
  }
  addRecipe = (recipe) => {
    //this.setState(recipe)
    console.log(this.state.cake)
  }
  deleteRecipe = (recipeName) => {
    console.log(recipeName)
    // Object.keys(this.state).map((recipe, index) => {
    //   console.log(recipe)
    //   if (recipe !== recipeName){
    //     return 
    //   }
    // })
    const newState = this.state;
    delete newState[recipeName];
    this.setState(newState);
  }
  render () {
    const titles = Object.keys(this.state)
    const recipeCards = titles.map((name, index) => {
      return (
        <MuiThemeProvider key={index}>
          <Recipe 
            details={name}
            ingredientsArr={this.state[name]}
            moreRecipes={this.addRecipe}
            deleteTheRecipe={() => this.deleteRecipe(name)}      
          />
        </MuiThemeProvider>
      )
    })
    //console.log('rec',recipeCards)
    return (
      <div>
        <h1>Recipes</h1>
        {recipeCards}
      </div>
    )
  }
}

export default MainBoard
