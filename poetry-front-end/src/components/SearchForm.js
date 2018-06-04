import React, { Component } from 'react';

export default class SearchForm extends Component {

	render() {
		return (
			<form className="search-form" onSubmit={props.handleSubmit}>
				<label htmlFor="search"></label>
				<input
          size="100"
					type="search"
					onChange={props.onSearch}
					value={props.query}
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
