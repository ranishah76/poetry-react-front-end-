import React, { Component } from 'react';

export default class SearchForm extends Component {
	state = {
		searchText: ''
	};

	onSearchChange = e => {
		this.setState({ searchText: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	};

	render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit}>
				<label htmlFor="search"></label>
				<input
          size="100"
					type="search"
					onChange={this.onSearchChange}
					ref={input => (this.query = input)}
					name="search"
					placeholder="Search..."
				/> <br/>
				<button type="submit" id="submit" className="search-button">
					<i className="material-icons icn-search">Search</i>
				</button>
			</form>
		);
	}
}
