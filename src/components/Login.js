import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

class Login extends Component{

  state = {
    data: ''
  };

  handleSubmit = (e) => {

    e.preventDefault();
  //  console.log('this.refs.chk.checked: '+this.refs.chk.checked);
  //  var name = this.refs.task.value;
    var id = this.refs.task2.value;
    var password = this.refs.task3.value;
  //  var email = this.refs.task5.value;
    var reqBody = {id: id, password: password};

//    console.log('handleSubmit');

    fetch('/login',{
        method: 'POST',
        body: JSON.stringify(reqBody),
  //      cache: 'default',
        headers: {'Accept': 'application/json',
          'Content-Type': 'application/json'}
      })
    .then(res=>res.json())
    .then(res=> {
      //console.log(res);
      this.setState({ data: res.login });
    });
   }
  render(){
    if(this.state.data){
      var data = this.state.data
      console.log('data:'+data);
      return(
        <Redirect to = {{
              pathname: '/about/'+data
            //  state: {this.state.data}  /// HERE I WILL SEND THE RELEVANT INFORMATION THAT THE SERVER SENDS TO THE COMPONENT A
        }}/>
      )
    }
      return(
        <div className="Login">
          <section className="Login_form">
              <fieldset>
                <form onSubmit={this.handleSubmit}>
                  <div className="user_id">
                      <label for="userid">id</label>
                      <input type="text" placeholder="id" ref="task2" onChange={this.handleChange}/>
                  </div>
                  <div className="password">
                      <label for="password">비밀번호</label>
                      <input type="password" placeholder="비밀번호" ref="task3" onChange={this.handleChange}/>
                  </div>
                  <input type="submit" value="로그인"/>
                </form>
            </fieldset>
          </section>
        </div>
      );
    }
}

export default Login;
