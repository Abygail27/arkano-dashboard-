import React, { Component } from 'react';  
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './SignIn'
import fire from './fire';


class App extends Component {
 constructor(props){
   super(props);
     this.state = {
       user: {},
      
   }
 }

 componentDidMount(){
   this.authListener();
 }
  authListener() {

    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
       if (user) {
         this.setState ({ user }); 
       //  localStorage.setItem('user', user.uid);
       } else {
         this.setState({user: null });
        //  localStorage.removeItem('user');
 
       }
  
   });

}

render () {
  return (
    <div className = "App">
  {this.state.user ? (<Dashboard />) : (<SignIn/>)}
    </div>
       );
  
  }

}

export default App; 

