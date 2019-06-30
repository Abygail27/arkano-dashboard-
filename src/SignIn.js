import  React, { Component } from 'react'
import fire from './fire';

 class SignIn extends Component {
     constructor (props) {
         super(props);
         this.login = this.login.bind(this);
         this.handleChange = this.handleChange.bind(this);
         this.state = {
             email: '',
             password: ''
         }
     }


     login(e) {
         e.preventDefault();
         fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
          }).catch((error) => {
                 console.log(error);  
            });
     }

     signup(e){
         fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
          }).catch((error) => {
              console.log(error);
          });
     }

     handleChange(e) {
         this.setState({ [e.target.name]: e.target.value });

     }

    render() {
        return (
            <div className = "col-md-6">
                <form>
                    <div className = "form-group">
                        <label htmlFor = "input-email">Email</label>
                        <input value = {this.state.email} onChange = {this.handleChange} type = "email" name= "email" placeholder = "email"></input>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "exampleInputPassword">Password</label>
                        <input value = {this.state.password} onChange = {this.handleChange} type = "password"
                        name = "password" className = "form-control" id = "exampleInputPassword1" placeholder = "password"/>
                        </div>
                        <button type = "submit" onClick = {this.login} className = "btn btn-primary">Login</button>
                        <button onClick ={this.signup} style = {{
                            marginLeft: '25px'
                        }}
                        className = "btn btn-sucess">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignIn;