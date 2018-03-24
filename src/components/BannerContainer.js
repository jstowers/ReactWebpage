// BannerContainer.js
// Friday, March 16, 2018

import React, { Component } from 'react';
import GearSmall from './GearSmall';
import Background from './Background';
import bannerStyle from '../../style/banner.css';

class BannerContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showContent: ''
		};
	}

	render() {
		return (
			<div className='row'>
				<div className='col-sm-2 col-lg-4 left-col'>
					<GearSmall rotate={'right'} />
				</div>
				<div className='col middle-col'>
					<Background showContent={this.state.showContent} />
				</div>
				<div className='col-sm-2 col-lg-4 right-col'>
					<GearSmall 
						rotate={'left'} 
						onHover={(left) =>
							this.setState({ showContent: left })
						} 
					/>
				</div>
			</div>
		);
	}
}

export default BannerContainer;
