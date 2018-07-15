import React, { Component } from 'react';
import backgroundStyle from '../../style/background.css';

class CanvasContent extends Component {

	constructor(props) {
		super(props);

		this.AboutData = [
			'My name is Joe Stowers.  I am a software engineer.',
			'My code is clean, logical, and efficient.',
			'It can bust through a technical barrier, streamline a clunky process, and add bottomline value.'
		];

		this.ExperienceData = [
			'Yapstone - Software Engineer',
			'Freelance - Software Engineer',
			'Ryder Scott Company - Petroleum Engineer',
			'Tekell, Book, Allen & Morris - Attorney'
		];

		this.Skills = [
			'JavaScript',
			'React',
			'Redux',
			'Node',
			'Express',
			'Mongo'
		];
	}

	displayLineByLine(array) {
		return array.map((word, index) => (
			<div
				className='content'
				key={index}
			>{word}
			</div>
		));
	} 

	render() {
		const { id, content } = this.props;

		if (content === 'About' && id === 'About') {
			return this.displayLineByLine(this.AboutData);
		} else if (content[0] === id) {
			return this.displayLineByLine(this.ExperienceData);
		} else if (content[0] === id) {
			return this.displayLineByLine(this.Skills);
		}
		return <div />;
	}
}

export default CanvasContent;
