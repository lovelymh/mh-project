import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import App from './App';
import About from './About';
import NotFound from './NotFound';
import Navigators from './Navigators';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import User from './User';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {loggedIn: ''};
  //  this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
        this.callApi()
          .then(res => this.setState({ loggedIn: res }))
          .catch(err => console.log(err));
  }

  callApi = async () => {
    // const data = await fetch('/session_chk')
    //                   .then(res => res.json())
      const response = await fetch('/session_chk');
                      const body = await response.json();

                      if (response.status !== 200) throw Error(body.message);
  console.log('body: '+body);
                      return body;

  //return data;
  }

  render(){
    return(
      <BrowserRouter loggedIn={this.state.loggedIn}>
        <div>
          <Navigators loggedIn={this.state.loggedIn}/>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about/:name" component={About} />
            <Route path="/about" component={About} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/user" component={User} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
