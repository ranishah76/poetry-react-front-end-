import React, { Component } from 'react';
import SearchForm from './SearchForm'

export default class Test extends Component {

    state = {
      poems: [],
      currentPoem: {
        number: "",
        lines: "",
        title: "",
        linecount: ""
      }
    }

  componentDidMount() {

    let randomNumberBetween0and19 = Math.floor(Math.random() * 162);

    fetch('http://localhost:3000/api/v1/poems')
     .then(res => res.json())
     .then(json => this.setState({
       poems: json,
       currentPoem: {
         number: randomNumberBetween0and19,
         lines: JSON.parse(json[randomNumberBetween0and19]["lines"]),
         title: json[randomNumberBetween0and19]["title"],
         linecount: json[randomNumberBetween0and19]["title"]
       }
     }))
   }




  render(){
    console.log(this.state.currentPoem.lines)

    const array = ["Hello", "World", "I am on another line"]
    return(
    <div>
      <h1 className="title"> The Best of Poetry </h1>
      <p className="slogan"> All that glitters is not gold </p>
      <br/>
      <br/>
      <br/>
      <SearchForm/>
      <div className="random-poem">
        {this.state.currentPoem.title}
        <br/>
        <br/>
        <br/>
      </div>
      <pre className="random-poem">
        {this.state.currentPoem.lines === "" ? this.state.currentPoem.lines : this.state.currentPoem.lines.join('\n')}
      </pre>

    </div>
    )
  }

}
