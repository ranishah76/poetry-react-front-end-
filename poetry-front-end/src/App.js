import React, { Component } from 'react';
import './App.css';
import Poem from './components/Poem'
import PoemList from './components/PoemList'
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'


class App extends Component {

render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
					  <h1 className="main-title">{this.props.poems[0]}</h1>
					</div>
				</div>
				<div className="main-content">
=				 <PoemList poems={this.props.poems}/>
				</div>
			</div>
		);
	}
}

export default App
