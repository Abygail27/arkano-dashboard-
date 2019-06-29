import  React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
 
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';

const App = () => (
    <Router>
      <div>
     
  
      <Route path = '/dashboard' component = {Dashboard}></Route>
      <Route path = '/signin' component = {SignIn}></Route>
      </div>
      
    </Router>
       )
  

export default App; 