import React, { Component } from 'react';
import Header from './Header';
import Menu from '../containers/Menu';

class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<Menu />
			</div>
		);
	}
}

export default App;
