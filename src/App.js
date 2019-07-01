import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Drawer from './Components/Drawer'
import Dashboard from './Components/Dashboard/main'
import Statistics from './Components/Statistics/statistics'
import Ui from './Ui'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Ui>
          <Drawer/>
          <Switch className='container'>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/Stats' component={Statistics} />
          </Switch>
        </Ui>
      </Router>
    )
  }
}

export default App;

