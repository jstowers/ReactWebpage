import React, { Component } from 'react';
import headerStyle from '../../style/01-main.css';

class Header extends Component {

	render() {
		return (
			<div className = { headerStyle }>
				<h1>Joseph Stowers</h1>
				<h2>Software Engineer</h2>
				<h3>"Positively Driven, Creatively Built"</h3>
			</div>
		)
	}
}

export default Header;