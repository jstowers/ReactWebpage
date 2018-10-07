import React, { Component } from 'react';
import Header from './Header';
import Menu from '../containers/Menu';
import Footer from './Footer';

class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<Menu />
				<Footer />
			</div>
		);
	}
}

export default App;
