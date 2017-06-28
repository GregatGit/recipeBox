import React from 'react'
import { shallow } from 'enzyme'
import Recipe from './recipe'

/*decscribe('Recipe component', () => {
  it('', () => {

  })
})
*/

test('Recipe component do something', () => {
  const component = shallow(<Recipe />)
  console.log(component)
})