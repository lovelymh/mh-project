import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom'

class User extends Component {
  state = {};
  componentDidMount(){
    this._mounted = true;
    console.log('didmount');
    this._getMovies();
  }
//언마운트후 setState를 할라케서 설정
  componentWillUnmount() {
    this._mounted = false;
  }
  //나의 자체함수는 _로 시작하게 한다. react 함수와 구분하기 위함
  _renderMovies = () => {
    return(
      <h1>hello, user!!</h1>
    // <Redirect to = {{
    //       pathname: '/about'
    //     //  state: {this.state.data}  /// HERE I WILL SEND THE RELEVANT INFORMATION THAT THE SERVER SENDS TO THE COMPONENT A
    // }}/>
  );
  //   console.log('_renderMovies');
  // const movies = this.state.movies.map((movie, index) => {
  //   console.log(movie)
  //   return <Movie
  //     title={movie.title_english}
  //     poster={movie.medium_cover_image}
  //     key={movie.id}
  //     genres={movie.genres}
  //     synopsis={movie.synopsis}
  //     />
  // })
  // return movies
  }

  //비동기 모드로 함수를 작성.
  //await 모드란 _callApi 함수가 끝나길 기다리는 것임. RETURN VALUE와 관계 없이!
  //(await은 비동기 모드로 안하면 작동하지 않는다)
  //그러므로 setState는 callApi가 끝날때까진 수행되지 않음
  //setState에서 movies를 받았으므로 state가 변하게됨.. render()에서는 이를 인지하고 뿌리겠지?
  _getMovies = async () => {
   console.log('_getMovies');
  console.log('this._mounted:'+this._mounted);
  const movies = await this._callApi()
  this._mounted && this.setState({
    movies
  })

}

  _callApi = () => {
   console.log('_callApi');
  //promise는 비동기적이며, 성공과 실패의 시나리오에 따른 상황을 잘 설정할 수 있다.
  //리엑트에서 ajax 사용법
  return fetch('/user')
  .then(response => response.json()) //url을 fetch한 결과를 가져온 2비트 정보를 json으로 변환함
  .then((json) => {
    console.log(json);
   return json}) //화살표 표시(=>)는 return 작성 필요 x, 이 기능 자체에 return이 내재되어 있다.
  //.catch(err => console.log(err))
  }

  //Redirect는 re-render가 안됨...;;
  dd = () => {
    return(
        // <Redirect to = {{
        //       pathname: '/'
        //     //  state: {this.state.data}  /// HERE I WILL SEND THE RELEVANT INFORMATION THAT THE SERVER SENDS TO THE COMPONENT A
        // }}/>
        <div> {this.redirectToTarget} </div>
      )

   }
  // setLocation(value) {
  //   this.props.history.push('/about');
  // }
  redirectToTarget = () => {
    console.log(this.props);
    this.props.history.push('/');
  }
  render(){
    console.log('render');
    console.log('this.state.movies:'+this.state.movies);
  //  const locationId = this.props.match.params.locationId
    // if (this.state.movies){
    //   return(
    //     // <LocationPicker
    //     //   returnLocation={this.setLocation}
    //     //   locationId={locationId}
    //     // />
    //
    //     <div>
    //      <h1>hi, user page</h1>
    //
    //     //<button onClick={this.redirectToTarget}>Redirect</button>
    //     </div>
    //
    //   //  <h1>session</h1>
    //     // <Link to = {{
    //     //       pathname: '/about'
    //     //     //  state: {this.state.data}  /// HERE I WILL SEND THE RELEVANT INFORMATION THAT THE SERVER SENDS TO THE COMPONENT A
    //     // }}/>
    //
    // );
    // } else {
    //
    //     return(
    //       // <LocationPicker
    //       //   returnLocation={this.setLocation}
    //       //   locationId={locationId}
    //       // />
    //     //  <h1>no session</h1>
    //     <div>
    //       {this.state.movies ? this._renderMovies() : this.dd()}
    //     </div>
    //   //  <Link to="/">
    //     // <Link to = {{
    //     //       pathname: '/'
    //     //     //  state: {this.state.data}  /// HERE I WILL SEND THE RELEVANT INFORMATION THAT THE SERVER SENDS TO THE COMPONENT A
    //     // }}/>
    //   );
    // }
    return(
      <div>
          {this.state.movies ? this._renderMovies() : this.dd()}
      </div>
    );

  }
}

export default User;
