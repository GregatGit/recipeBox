import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'


const style = {
  marginLeft: 20,
}

const Recipe = (props) => {
  let myIngredients = props.ingredientsArr.map((ingredient, index) => {
    return (
      <div key={index}>
        <TextField value={ingredient} style={style} underlineShow={false} />
        <Divider />
      </div>
    )
  })
  let recipeName = props.details
  return (
  <Card>
    <CardHeader
      title={recipeName.toUpperCase()}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <Paper zDepth={2}>
        {myIngredients}
      </Paper>
      <CardActions>
      <FlatButton label="Delete" onClick={props.deleteTheRecipe}/>
      <FlatButton label="Add" onClick={props.moreRecipes} />
    </CardActions>
    </CardText>
  </Card>
)}

export default Recipe
