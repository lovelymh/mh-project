import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

class Signup extends Component{

  state = {
    data: ''
  };

  handleSubmit = (e) => {

    e.preventDefault();
  //  console.log('this.refs.chk.checked: '+this.refs.chk.checked);
    var name = this.refs.task.value;
    var id = this.refs.task2.value;
    var password = this.refs.task3.value;
    var email = this.refs.task5.value;
    var reqBody = {id: id, name: name, password: password, email: email};

    console.log('handleSubmit');

    fetch('/signup',{
        method: 'POST',
        body: JSON.stringify(reqBody),
  //      cache: 'default',
        headers: {'Accept': 'application/json',
          'Content-Type': 'application/json'}
      })
    .then(res=>res.json())
    .then(res=> {
      //console.log(res);
      this.setState({ data: res.name });
    });
      // .then(res => {
      // //  this.setState({ data: res.todo });
      // // setTimeout(() => null, 0);
      //    return res.text();
      // })
      // .then((res) => {
      //     if (res.ok){
      //       return res.json();
      //     } else {
      //       //throw new Error ('Something went wrong with your fetch');
      //     }
      //   }).then((json) => {
      //     this.setState({ data: json });
      //     console.log('json: '+json);
      //   })

        //
        // fetch('/api/hello0',{
        //     method: 'POST',
        //     body: JSON.stringify(reqBody),
        //     cache: 'default',
        //     headers: {'Accept': 'application/json',
        //       'Content-Type': 'application/json'}
        //
        //   })
        //   .then(res => {
        //   setTimeout(() => null, 0);
        //   return res.text();
        //   })
        //   .then((res) => {
        //       if (res.ok){
        //         return res.json();
        //       } else {
        //       }
        //     }).then((json) => {
        //       console.log(json);
        //     })
        //
        //  fetch('/api/hello2',{
        //      method: 'POST',
        //      body: JSON.stringify(reqBody2),
        //      cache: 'default',
        //      headers: {'Accept': 'application/json',
        //        'Content-Type': 'application/json'}
        //
        //    })
        //    .then(res => {
        //    setTimeout(() => null, 0);
        //    return res.text();
        //    })
        //    .then((res) => {
        //        if (res.ok){
        //          return res.json();
        //        } else {
        //        }
        //      }).then((json) => {
        //        console.log(json);
        //      })
        //
        //
        //       this._getMovies();
        //        this._getMovies1();
        //       this._getMovies2();

        // this.callApi()
        //   .then(res => {
        //     console.log('res:' + res);
        //   })
        //   .catch(err => console.log(err));

  }
  handleChange = (e) => {
    // this.setState({
    //   input: e.target.value
    // });
  }

  render(){
    if(this.state.data){
      return(
        <Redirect to = {{
              pathname: '/about'
            //  state: {this.state.data}  /// HERE I WILL SEND THE RELEVANT INFORMATION THAT THE SERVER SENDS TO THE COMPONENT A
        }}/>
      )
    }
    return(
      <div className="App">
          <section className="Query">
            <fieldset>
              <legend>회원가입</legend>
              <form onSubmit={this.handleSubmit}>
                <div className="user_name">
                    <label for="username">이름*</label>
                    <input type="text" placeholder="이름" ref="task" onChange={this.handleChange}/>
                </div>
                <div className="user_id">
                    <label for="userid">id*</label>
                    <input type="text" placeholder="id" ref="task2" onChange={this.handleChange}/>
                </div>
                <div className="password">
                    <label for="password">비밀번호*</label>
                    <input type="password" placeholder="비밀번호" ref="task3" onChange={this.handleChange}/>
                </div>
                <div className="password_chk">
                    <label for="password_chk">비밀번호 확인*</label>
                    <input type="password" placeholder="비밀번호 확인" ref="task4" onChange={this.handleChange}/>
                </div>
                <div className="email">
                    <label for="email">e-mail주소*</label>
                    <input type="text" placeholder="e-mail주소" ref="task5" onChange={this.handleChange}/>
                </div>
                <input type="submit" value="가입"/>
              </form>
          </fieldset>
          </section>
      </div>
    );
  }
}

export default Signup;
