import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImgList from './components/ImgList'
import cred from './cred.js';
import SearchForm from './components/SearchForm'

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			loadingState: true,
      query:'',
      poems: []
		};
	}

	componentDidMount() {
		this.performSearch();

      fetch('http://localhost:3000/api/v1/poems')
     .then(res => res.json())
     .then(json => this.setState({
       poems: json
     }))
	}

	performSearch = (query) => {
    this.setState({
      query: query
    })


		fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=15f06c9bfbbdb25fb394b039f7fd57aa77bdea281679af7752d36f2cc6a0a35e`)
			.then(res => res.json())
      .then(json => this.setState({
        imgs: json.results,
        loadingState: false
      }))
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};


	render() {
    console.log(this.state.poems[0])
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">{this.state.query}</h1>
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>
				<div className="main-content">
					{this.state.loadingState
						? <p>Loading</p>
						: <ImgList data={this.state.imgs} poems={this.state.poems}/>}
				</div>
			</div>
		);
	}
}

// <ImgList data={this.state.imgs} />
