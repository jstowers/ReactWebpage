// BannerContainer
// Friday, March 16, 2018

import React, { Component } from 'react';
import Menu from './Menu';
import Canvas from './Canvas';

class BannerContainer extends Component {

	render() {
		return (
			<div className='row'>
				<div className='col-sm-4 col-lg-4'>
					<Menu />
				</div>
				<div className='col-sm-8 col-lg-8'>
					<Canvas />
				</div>
			</div>
		);
	}
}

export default BannerContainer;
