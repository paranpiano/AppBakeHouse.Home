import React , { Component } from 'react'
import './App.css';

class Subject extends Component {
   render() {
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class Toc extends Component {
  render() {
   return(
    <nav>
    <ul>
        <li>
            <li><a href="1.html"></a>HTML</li>
            <li><a href="2.html"></a>CSS</li>
            <li><a href="3.html"></a>JavaScript</li>
        </li>
    </ul>
  </nav>

   );
 }
}

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

function App() {
  return (
    <div className="App">
      <Subject title='WEB' sub="World wide web!"></Subject>
      <Subject title='REACT' sub="For UI"></Subject>
      <Subject title='DJANGO' sub="For Backend"></Subject>
      <Toc></Toc>
      <Content title='HTML' desc="HypterType markup Language"></Content>
    </div>
  );
}

export default App;
