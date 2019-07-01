import React, { Component } from 'react'
import Amount from './Amount'
import Purchase from './Purchase'
import User from './User'
import View from './View'

class Statistics extends Component {
  render () {
    return (
      <div className='statistics-container'>
        
        <Amount/>
        <Purchase/>
        <User/>
        <View/>
      </div>
    )
  }
}

export default Statistics;