import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

// const Navigators = () => {
//     return (
//         <div className="Navigators">
//             <NavLink exact to="/"> Home </NavLink>
//             <NavLink to="/about"> About </NavLink>
//             <NavLink to="/signup"> Sign up </NavLink>
//             <NavLink to="/login"> Login </NavLink>
//         </div>
//     );
// };


class Navigators extends Component {
  constructor(props){
    super(props);
    this.state = {};
  //  this.handleLogout = this.handleLogout.bind(this);
  }

  render(){
        console.log('this.props.loggedIn: '+this.props.loggedIn);
    return(
              <div className="Navigators">
                  <NavLink exact to="/"> Home </NavLink>
                  <NavLink to="/about"> About </NavLink>
                  <NavLink to="/signup"> Sign up </NavLink>
                  {this.props.loggedIn ? <NavLink to="/logout"> Logout </NavLink> : <NavLink to="/login"> Login </NavLink>}
              </div>
    );
  }

}
export default Navigators;
