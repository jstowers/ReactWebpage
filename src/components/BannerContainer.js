// BannerContainer.js
// Friday, March 16, 2018

import React, { Component } from 'react';
import GearSmall from './GearSmall';
import bannerStyle from '../../style/banner.css';

class BannerContainer extends Component {

	render() {
		/*

		// At this time, I'm not sure I want to try
		// and use inline CSS styling along with Bootstrap styling.
		// Keeping some styling in a CSS file and another in a data object
		// is difficult to keep track of.

		const { container, item } = styles;  
		return (
			<div className='row' style={container}>
				<div className='col-md-4 left-col'>
					<GearSmall />
				</div>
				<div className='col middle-col'>
					The Big Unveil
				</div>
				<div className='col-md-4 right-col'>
					<GearSmall />
				</div>
			</div>
		);
		*/
		return (
			<div className='row'>
				<div className='col-sm-2 col-lg-4 left-col'>
					<GearSmall rotate={'right'} />
				</div>
				<div className='col middle-col'>
					My Content
				</div>
				<div className='col-sm-2 col-lg-4 right-col'>
					<GearSmall rotate={'left'} />
				</div>
			</div>
		);
	}
}

/*
const styles = {
	container: {
		display: 'inline-flex',
		height: 200,
		//width: 200,
		flexDirection: 'row',
		backgroundColor: 'red'
	},
	item: {
		width: 100,
		height: 100,
		margin: 'auto',
		backgroundColor: 'blue'
	}
};
*/

export default BannerContainer;
