import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Viewers from '../Dashboard/Viewers'
import Amount from './Amount'
import Users from './Users'
import Date from './Date'
import UserName from './UserName'
import Purchase from './Purchase'

class Dashboard extends Component {
  render () {
    return (
      <div id='form_dashboard'>
        <UserName />
        <Amount />
        <Purchase/>
        <Users />
        <Viewers/>
        <Date/>
        <Button variant='contained' 
        style = {{
          backgroundColor: '#3c8dbc',
          color: '#ffffff'
        }}>
        Ingresar Datos 
      </Button>
      </div>
    )
  }
}

export default Dashboard;