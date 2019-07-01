import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}))

export default function OutlinedTextFields () {
  const classes = useStyles()

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <TextField
        required
        id='outlined-full-width'
        label='Campo Requerido'
        type='Number'
        style={{ margin: 8 }}
        placeholder='Nuevos usuarios'
        fullWidth
        margin='normal'
        variant='outlined'
        InputLabelProps={{
          shrink: true
        }}
      />


    </form>
  )
}