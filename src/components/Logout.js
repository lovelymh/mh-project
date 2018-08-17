import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {



  render(){
    if(!this.state.loggedIn){
    return(
      <Redirect to = {{
            pathname: '/'
          //  state: {this.state.data}  /// HERE I WILL SEND THE RELEVANT INFORMATION THAT THE SERVER SENDS TO THE COMPONENT A
      }}/>
    );
  }
  }
}

export default Logout;
