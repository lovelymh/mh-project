import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import './index.css';
import Home from './components/Home';
// import App from './components/App';
// import About from './components/About';
// import NotFound from './components/NotFound';
// import Navigators from './components/Navigators';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import User from './components/User';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
// <BrowserRouter>
//   <div>
//     <Navigators/>
//     <Switch>
//       <Route exact path="/" component={App} />
//       <Route path="/about/:name" component={About} />
//       <Route path="/about" component={About} />
//       <Route path="/signup" component={Signup} />
//       <Route path="/login" component={Login} />
//       <Route path="/user" component={User} />
//       <Route component={NotFound} />
//     </Switch>
//   </div>
// </BrowserRouter>,
// document.getElementById('root')
// );

ReactDOM.render(
 <Home />,
document.getElementById('root')
);

registerServiceWorker();
