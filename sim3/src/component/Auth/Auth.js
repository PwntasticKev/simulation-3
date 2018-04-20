import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '', 
      password: ''
    }
  }
 registerUser() {
   axios.post('/register', { username:'',password:'' }).then(res => {
     this.setState({
       username: res.data,
       password: res.data
     })

   }) // post endpoints suck. 
 }

  

  render() {
    return (
      <div>
         <div className="login-container">
          <button className='button'>Login</button>
          <button className='button' onClick={e => this.registerUser()}>Register</button>
         </div>
      </div>
    )
  }
}

export default withRouter(Auth)
