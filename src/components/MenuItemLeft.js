// MenuItemLeft
// July 13, 2018

import React, { Component } from 'react';
import GearSmall from './GearSmall';
import menuStyle from '../../style/menu.css';

class MenuItemLeft extends Component {

	// add styling here for the polygon box
	render() {
		return (
			<div>
				<GearSmall 
					id={this.props.id} 
					rotate={'right'}
				/>
				<span className='text-box'>{this.props.id}</span>
			</div>
		);
	}
}

export default MenuItemLeft;
