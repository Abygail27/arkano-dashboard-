import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core'
import firebase from '../../firebase'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            amount: '',
            purchase: '',
            users: '',
            viewers: '',
            date: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.userName]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const db = firebase.firestore()
        db.collection('sales').add({
            userName: this.state.userName,
            amount: this.state.amount,
            purchase: this.state.purchase,
            users: this.state.users,
            viewers: this.state.viewers,
            date: this.state.date
        })
        this.setState({
            userName: '',
           amount: '',
            purchase: '',
            users: '',
            viewers: '',
            date: ''
        })

    }

    render() {
        return (

            <
        form id='form_dashboard' >
                <
                    TextField id='outlined-full-width'
                    label='Campo obligatoro*'
                    type='text'
                    name='names'
                    onChange={
                        this.onChange
                    }
                    value={
                        this.state.userName
                    }
                    style={
                        {
                            margin: 8
                        }
                    }
                    placeholder='Nombre'
                    fullWidth margin='normal'
                    variant='outlined'
                    InputLabelProps={
                        {
                            shrink: true,
                        }
                    }
                /> <
                    TextField id='outlined-full-width'
                    label='Campo obligatoro*'
                    type='number'
                    name='amount'
                    onChange={
                        this.onChange
                    }
                    value={
                        this.state.amount
                    }
                    style={
                        {
                            margin: 8
                        }
                    }
                    placeholder='Cantidad de compras'
                    fullWidth margin='normal'
                    variant='outlined'
                    InputLabelProps={
                        {
                            shrink: true,
                        }
                    }
                /> <
                    TextField id='outlined-full-width'
                    label='Campo obligatoro*'
                    type='number'
                    name='purchase'
                    onChange={
                        this.onChange
                    }
                    value={
                        this.state.purchase
                    }
                    style={
                        {
                            margin: 8
                        }
                    }
                    placeholder='Incremento de compras'
                    fullWidth margin='normal'
                    variant='outlined'
                    InputLabelProps={
                        {
                            shrink: true,
                        }
                    }
                /> <
                    TextField id='outlined-full-width'
                    label='Campo obligatoro*'
                    type='number'
                    name='users'
                    onChange={
                        this.onChange
                    }
                    value={
                        this.state.users
                    }
                    style={
                        {
                            margin: 8
                        }
                    }
                    placeholder='Nuevos usuarios'
                    fullWidth margin='normal'
                    variant='outlined'
                    InputLabelProps={
                        {
                            shrink: true,
                        }
                    }
                /> <
                    TextField id='outlined-full-width'
                    label='Campo obligatoro*'
                    type='number'
                    name='viewers'
                    onChange={
                        this.onChange
                    }
                    value={
                        this.state.viewers
                    }
                    style={
                        {
                            margin: 8
                        }
                    }
                    placeholder='Nuevas vistas'
                    fullWidth margin='normal'
                    variant='outlined'
                    InputLabelProps={
                        {
                            shrink: true,
                        }
                    }
                /> <
                    TextField id='outlined-full-width'
                    label='Campo obligatorio*'
                    type='date'
                    name='date'
                    onChange={
                        this.onChange
                    }
                    value={
                        this.state.date
                    }
                    style={
                        {
                            margin: 8
                        }
                    }
                    placeholder='Fecha'
                    fullWidth margin='normal'
                    variant='outlined'
                    InputLabelProps={
                        {
                            shrink: true,
                        }
                    }
                /> <Button onClick={
                        this.onSubmit
                    }
                    variant='contained'
                    color='primary' >
                    Enviar </Button> </form>
                  )
                }
              }
              
  export default Dashboard;