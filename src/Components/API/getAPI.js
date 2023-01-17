import React, { Component } from 'react';
// import axios from 'axios';
class GetApi extends Component {
  constructor(){
    super()
    this.state = {
      posts=[]
    }
  }

  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then(res =>{
  //     console.log(res);
  //   })
  //   .catch(error =>{
  //     console.log(error);
  //   })
  // }
  render() {
    return(<>
      <h1>Get</h1>

    </>)
  }
}
export default GetApi;
  