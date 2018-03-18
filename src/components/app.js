import React, { Component } from 'react';
import Header from './Header';
import BannerContainer from './BannerContainer';

class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<div>
					<BannerContainer />
				</div>
			</div>
		);
	}
}

export default App;
