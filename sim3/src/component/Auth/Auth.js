import React, { Component } from 'react'
import axios from 'axios'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '', 
      password: ''
    }
  }
  componentDidMount() {
    axios.post('/register').then(res => {
      this.setState({
        username: res.data,
        password: res.data
      })

    }) // post endpoints suck. 

  }

  render() {
    return (
      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
    )
  }
}

export default Auth
