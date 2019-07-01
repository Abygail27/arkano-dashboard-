import React, { Component } from 'react'
import {  CardActions } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import firebase from '../../firebase'
const firestore = firebase.firestore()

class Statistics extends Component  {
    constructor (props) {
      super(props)
      this.state = ({
        dataSales: []
      })
    }
  
    componentWillMount () {
      firestore.collection('sales').onSnapshot((querySnapshot) =>{
        const dataSales = []
        querySnapshot.forEach((doc) => {
          const { userNames, amount, purchase, users, viewers, date } = doc.data()
          let dataComplete = { userNames, amount, purchase, users, viewers, date  }
          dataSales.push(dataComplete)
        })
        this.setState({ dataSales })
  
      })
    }
  render () {
    const {dataSales} = this.state

    return (
      <div className='card_container'>
     
        <h1>Dashboard</h1>
        <p1>Estadística</p1>
      

         <div >
      <div className="card_purchase" >
  <div className="column">
    <div className="card" 
    style = {{
      backgroundColor: '#00c0ef',
      color: 'white'
    }}
    >
      <h3>150</h3>
      <p>NUEVAS COMPRAS</p>
      <CardActions>
            <Button size='small'>Más info</Button>
          </CardActions>
    </div>
  </div>
    </div>
    </div>



    <div >
      <div className="card_amount" >
  <div className="column">
    <div className="card" 
    style = {{
      backgroundColor: 'seagreen',
      color: 'white'
    }}
    >
      <h3>53%</h3>
      <p> incremento de compras</p>
      <CardActions>
            <Button size='small'
            >Más info</Button>
          </CardActions>
    </div>
  </div>
    </div>
    </div>

    <div >
      <div className="card_users" >
  <div className="column">
    <div className="card" 
    style = {{
      backgroundColor: '#ffb400',
      color: 'white'
    }}
    >
      <h3>44</h3>
      <p> Nuevos Usuarios</p>
      <CardActions>
            <Button size='small'>Más info</Button>
          </CardActions>
    </div>
  </div>
    </div>
    </div>

    <div >
      <div className="ncard_viewers" >
  <div className="column">
    <div className="card" 
    style = {{
      backgroundColor: '#dd4b39',
      color: 'white'
    }}
    >
      <h3>65</h3>
      <p> Nuevas ventas</p>
      <CardActions>
            <Button size='small'>Más info</Button>
          </CardActions>
    </div>
  </div>
    </div>
    </div>

      </div>
    )
  }
}

export default Statistics;


