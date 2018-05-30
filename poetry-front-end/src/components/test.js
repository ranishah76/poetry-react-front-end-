import React, { Component } from 'react';
import SearchForm from './SearchForm'
import flippingbook from './flippingbook.gif'
import logo from './green-shakespeare.jpg'
import './test.css'
export default class Test extends Component {

    state = {
      poems: [],
      currentPoem: {
        number: "",
        lines: "",
        title: "",
        linecount: ""
      },
      isNotLoaded: true
    }

  componentDidMount() {

    let randomNumberBetween0and19 = Math.floor(Math.random() * 162);

    fetch('http://localhost:3000/api/v1/poems')
     .then(res => res.json())
     .then(json => {

       this.setState({
       poems: json,
       currentPoem: {
         number: randomNumberBetween0and19,
         lines: JSON.parse(json[randomNumberBetween0and19]["lines"]),
         title: json[randomNumberBetween0and19]["title"],
         linecount: json[randomNumberBetween0and19]["title"]
       }
     }, () => setTimeout(() => this.setState({
       isNotLoaded: false
     }),2000))



   })
   }

  render(){
    if(this.state.isNotLoaded) {
      return <img src={flippingbook} alt="bg" class="bg"/>
    } return (
    <div>

      <img src={logo} id="logo"/>
      <br/>
      <br/>
      <br/>
      <div>
      <SearchForm/>
      </div>
      <div className="title">
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
