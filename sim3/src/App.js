import React, { Component } from 'react'
import './App.css'
import Nav from './component/Nav/Nav'
import routes from './routes'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    console.log(this.props);
    
    return (
      <div className="App"> 
      {this.props.location.pathname === '/' ? null : <Nav />  }
        
        { routes }
      </div>
    );
  }
}

export default withRouter(App)
