import React , { Component } from 'react'
import './App.css';

class Subject extends Component {
   render() {
    return(
      <header>
        <h1>WEB</h1>
        world wide web! 
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
        HTML2
    </h2>
    HTML is Hyper Text Markup Lagnuage.
    </ariticle>

   );
 }
}


function App() {
  return (
    <div className="App">
      <Subject></Subject>
      <Toc></Toc>
      <Content></Content>
    </div>
  );
}

export default App;
