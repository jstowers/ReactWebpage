// MenuItemLeft
// July 13, 2018

import React, { Component } from 'react';
import GearSmall from './GearSmall';
import menuStyle from '../../style/menu.css';

class MenuItemLeft extends Component {
	// <span className='text-box'>{this.props.id}</span>
	// add styling here for the polygon box
	render() {
		return (
				<GearSmall 
					id={this.props.id} 
					rotate={'right'}
				/>
		);
	}
}

export default MenuItemLeft;
