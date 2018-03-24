import React, { Component } from 'react';

class MyStory extends Component {

	render() {
		const { showContent } = this.props;
		console.log('==> Inside MyStory render()');

		if (showContent) {
			return (
				<div>
					My Incredible Story in Motion.
				</div>
			);
		} else {
			return (
				<div></div>
			);
		}
	}
}

export default MyStory;
