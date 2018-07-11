import React, { Component } from 'react';
import backgroundStyle from '../../style/background.css';

class CanvasContent extends Component {

	constructor(props) {
		super(props);

		this.myData = [
			'My name is Joe Stowers.  I am a software engineer.',
			'My code is clean, logical, and efficient.',
			'It can bust through a technical barrier, streamline a clunky process, and add cash-in-your-pocket value.'
		];
	}

	displayLineByLine(array) {
		return array.map((word, index) => 
			(
				<div 
					className='content'
					key={index}
				>{word}
				</div>
			)
		);
	} 

	render() {
		const { content } = this.props;
		console.log('CanvasContent content =', content);

		if (content[0] === 'About') {
			return (
				this.displayLineByLine(this.myData)
			);
		} else {
			return (
				<div>
					This is not About Me!
				</div>
			);
		}
	}
}

export default CanvasContent;
