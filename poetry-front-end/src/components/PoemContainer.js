import React, { Component } from 'react';
import poems from './poemData'
import PoemList from './PoemList'
import { Redirect, Link } from 'react-router-dom'

export default class PoemContainer extends Component {

    state = {
      poems: [],
      //currentPoemId:poems[4]
      query: "",
      isNotLoaded: true
    }

  componentDidMount() {

    fetch('http://localhost:3000/api/v1/poems')
     .then(res => res.json())
     .then( json => {
    return json.map( ({id,lines,title,linecount}) => { return {
      id,
      lines:JSON.parse(lines),
      title,
      linecount
    } } )
   }).then(json => {
     this.setState({
       poems:json,
    // currentPoem: {
    //   number: randomNumberBetween0and19,
    //   lines: JSON.parse(json[randomNumberBetween0and19]["lines"]),
    //   title: json[randomNumberBetween0and19]["title"],
    //   linecount: json[randomNumberBetween0and19]["linecount"]
    //  }
   })
 return json
 }
)

  this.setState({
    poems,
    isNotLoaded: false})
}

  onSearch = (e) => {
    const searchTerm = e.target.value
    this.setState({
      query: searchTerm
    })
    this.handleSubmit(searchTerm)
  }


render(){
  console.log(this.state.isNotLoaded)
  if (this.state.isNotLoaded) {
    return <h1> Loading </h1>
  } else {
    console.log(this.state.poems[23])
    return (

    <div>
      <h1 className="title"> The Best of Poetry </h1>
      <p className="slogan"> All that glitters is not gold </p>
      <br/>
      <br/>
      <br/>
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label htmlFor="search"></label>
        <input
          size="100"
          type="search"
          onChange={this.onSearch}
          value={this.query}
          name="search"
          placeholder="Search..."
        /> <br/>
         <button type="submit" id="submit" className="search-button">
          <i className="material-icons icn-search">Search</i>
        </button>
      </form>
      <br/>
      <br/>

      { this.state.isNotLoaded ? "Loading" : this.state.poems[23].title}
      <br/>



      <pre className="random-poem">
       </pre>
       <br/>
       <br/>
    </div>
    )
  }

}

}
