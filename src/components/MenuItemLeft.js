// MenuItemLeft
// July 13, 2018

import React, { Component } from 'react';
import GearSmall from './GearSmall';
import menuStyle from '../../style/menu.css';

class MenuItemLeft extends Component {
	// 
	// add styling here for the polygon box
	render() {
		return (
			<div className='gear-location'>
				<GearSmall id={this.props.id} />
				<div className='text-box'>{this.props.id}</div>
			</div>
		);
	}
}

export default MenuItemLeft;
