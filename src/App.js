import React , { Component } from "react";

import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Content from "./components/Content"
import './App.css';
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      mode: 'read',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World Wide Web!'},

      welcomeContent:{title:'Welcome', desc:'Hello, React!!'},
      contents: [
        {id: 1, title : 'HTML', desc: 'HTML is HyperText ...'},
        {id: 2, title : 'CSS', desc: 'CSS is for design'},
        {id: 3, title : 'JavaScrip', desc: 'JavaScript is for interactive'}
      ]
    }
  }

  render(){
    console.log('App render')
    var _title, _desc = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcomeContent.title;
      _desc = this.state.welcomeContent.desc;
    }
    else if(this.state.mode === 'read'){

      var i = 0;
      while (i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;

          break;
        }
        i = i +1;
      }
    }

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}

          // onChangePage={function(){
          //     this.setState({
          //       mode:'welcome'
          //     })
          //   }.bind(this)}

            onChangePage={() =>{ this.setState({ mode: 'welcome'})}}
          >

          
        </Subject>

        <TOC 
          data = {this.state.contents}
          onChangePage={(id) =>  {
              this.setState({
              mode:'read',
              selected_content_id : Number(id),
            })
          }}
        ></TOC>


        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
