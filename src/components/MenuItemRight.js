// MenuItemRight
// typed content for each menu item
// July 17, 2018

import React, { Component } from 'react';
import backgroundStyle from '../../style/background.css';

class MenuItemRight extends Component {
	
	constructor(props) {
		super(props);

		this.AboutData = [
			'My name is Joe Stowers.    I am a software engineer in Austin.',
			'My code is clean, logical, and efficient.',
			'It can bust through a technical barrier, streamline a clunky process, ',
			'and add cash-in-your pocket value.'
		];
	
		this.ExperienceData = [
			{
				company: 'NIC',
				title: 'Developer III',
				location: 'Austin',
				duration: 'Current',

			},
			{
				company: 'Yapstone',
				title: 'Software Engineer',
				location: 'Austin',
				duration: '2017 to 2018',
			}, 
			{
				company: 'Freelance',
				title: 'Software Engineer',
				location: 'Austin',
				duration: '2016 to 2017',

			},
			{
				company: 'Ryder Scott Company',
				title: 'Petroleum Engineer',
				location: 'Houston',
				duration: '2010 to 2015',
			},
			/*
			{
				company: 'Tekell, Book, Allen & Morris',
				title: 'Attorney',
				location: 'Houston',
				duration: '2005 to 2010'
			}
			*/
		];

		this.Skills = [
			'JavaScript / React / Redux ',
			'Node / Express / MongoDB',
			'Jest / Enzyme / AWS',
			'Java / SQL Server',
		];

		this.Passions = [
			'Reggaeton',
			'Skis & Boards',
			'Guitars',
			'Cooking'
		]
	}

	displayExperience(array) {
		return array.map((item, index) => (
			<div className='content'key={index}>
				<span className='experience-title'>{item.title} - </span>
				<span className='experience-company'>{item.company} - </span>
				<span className='experience-location'>{item.location}, {item.duration}</span>
			</div>
		));
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
		const { id, menuItem } = this.props;

		if (menuItem[0] === 'About' && id === 'About') {
			return this.displayLineByLine(this.AboutData);
		} else if (menuItem[0] === 'Experience' && id === 'Experience') {
			return this.displayExperience(this.ExperienceData);
		} else if (menuItem[0] === 'Skills' && id === 'Skills') {
			return this.displayLineByLine(this.Skills);
		} else if (menuItem[0] === 'Passions' && id === 'Passions') {
			return this.displayLineByLine(this.Passions);
		}
		else return <div />;
	}
}

export default MenuItemRight;
