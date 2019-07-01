import React from 'react'
import Drawer from './Components/Drawer'

class UI extends React.Component {
  render () {
    return (
      <div>
        <Drawer/>
        {this.props.children}
      </div>
    )
  }
}

export default UI;