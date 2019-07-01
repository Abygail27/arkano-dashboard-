import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'


import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import '../style.css'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#222d32'
    
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

export default function ResponsiveDrawer (props) {
  const { container } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  function handleDrawerToggle () {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>

      <div className={classes.toolbar} 
      style = {{
        backgroundColor:'#3c8dbc',
        color: 'white'
       }}
      />  
      
      <Divider/> 
      <div className='user_content'> 
        <p>Usuario Apellido</p>
        <Avatar className=''>NN</Avatar>
      </div>
    </div>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}
      style = {{
        backgroundColor: '#367fa9'
      }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='Mailbox folders'>
        <Hidden smUp implementation='css'>
          <Drawer
          style = {{
            backgroundColor: '#1e2a2e'
          }}
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
            <Divider />
            <Link className='nav-link home' to='/'>Dashboard</Link>
            <Divider />
            <Link className='nav-link contact' to='/Stats'>Estadísticas</Link>
            <Divider />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            {drawer}
            <Divider />
            <Link className='nav-link home' to='/'>Dashboard</Link>
            <Divider />
            <Link className='nav-link contact' to='/Stats'>Estadísticas</Link>
            <Divider />
          </Drawer>
        </Hidden>
      </nav>

    </div>
  )
}