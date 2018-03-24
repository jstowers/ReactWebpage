import React, { Component } from 'react';
import backgroundStyle from '../../style/background.css';
import MyStory from './MyStory';

class Background extends Component {

	render() {
		const { showContent } = this.props;

		return (
			<div className="backgroundStyle contain">
				<div className="content">
					<MyStory showContent={ showContent } />
				</div>
			</div>
		);
	}
}

export default Background;
