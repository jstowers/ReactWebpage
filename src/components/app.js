import React, { Component } from 'react';
import Header from './Header';
import Menu from '../containers/Menu';
import Body from './Body';

class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<Menu />
				<Body />
			</div>
		);
	}
}

export default App;
