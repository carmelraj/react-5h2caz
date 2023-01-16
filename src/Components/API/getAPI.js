import React, { Component } from 'react';
import axios from 'axios';
class GetApi extends Component {
  constructor(){
    super()
    this.state = {
      posts=[]
    }
  }
  
  render() {
    return(<>
      <h1>Get</h1>

    </>)
  }
}
export default GetApi;
  