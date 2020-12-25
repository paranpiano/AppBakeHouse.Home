import React , { Component } from 'react'

class Content extends Component {
    render() {
     return(
      <ariticle>
      <h2>
      {this.props.title}
      </h2>
      {this.props.desc}
      </ariticle>
  
     );
   }
  }

  export default Content;
  