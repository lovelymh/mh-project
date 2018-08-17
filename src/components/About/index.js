import React, { Component } from 'react';
import queryString from 'query-string';
import './style.css';

const About = ({location, match}) => {
  const query = queryString.parse(location.search);
  console.log(query);

  const detail = query.detail === 'true';

    return (
        <div>
            <h2>About, {match.params.name}</h2>
            {detail && 'detail: blahblah'}
        </div>
    );
};

// class About extends Component {
//   state = {
//     response: ''
//   };
//
//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }
//
//   callApi = async () => {
//     const response = await fetch('/about');
//     const body = await response.json();
//
//     if (response.status !== 200) throw Error(body.message);
//
//     return body;
//   };
//
//   render(){
//     return(
//       <div className="About">
//         <h1>About, {this.state.response ? this.state.response : ''}</h1>
//       </div>
//     );
//   }
// }

export default About;
