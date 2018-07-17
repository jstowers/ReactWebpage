// Menu Container
// Friday, July 13, 2018

import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItemLeft from '../components/MenuItemLeft';
import MenuItemRight from '../components/MenuItemRight';
import menuStyle from '../../style/menu.css';

class Menu extends Component {

	constructor(props) {
		super(props);

		this.state = {
			menuItems: [
				'About',
				'Experience',
				'Skills',
				'Passions'
			],
		};
	}

	displayMenuItems = (item) => {
		
		return (
			<tr key={item}>
				<td className='menu-tab'>
					<MenuItemLeft id={item} />
				</td>
				<td><MenuItemRight id={item} menuItem={this.props.canvas}/></td>
			</tr>
		);
	}

	render() {
		return (
			<div className='menu'>
				<table className="menu-items">
					<tbody>
						{ this.state.menuItems.map(this.displayMenuItems) }
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps({ canvas }) {
	return { canvas };
}

export default connect(mapStateToProps)(Menu);

/* Old Menu Container

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import fetchCanvas payload
import { fetchCanvas } from '../actions/index';

import GearSmall from './GearSmall';
import Canvas from './Canvas';
import CanvasContent from './Canvas';
import bannerStyle from '../../style/banner.css';

class Menu extends Component {

	constructor(props) {
		super(props);

		this.state = {
			menuItems: [
				'About',
				'Experience',
				'Skills',
				'Passions'
			],
			selectedItem: '',
		};

		this.onMouseOverGear = this.onMouseOverGear.bind(this);
	}

	onMouseOverGear(e) { 
		e.preventDefault();
		this.setState({ selectedItem: e.target.id });
		this.props.fetchCanvas(e.target.id);
		this.setState({ selectedItem: ''});
	}

	displayMenuItems() {
		return this.state.menuItems.map(item => {
			return (
				<div key={item}>
					<div className='menu-tab'>
						<GearSmall
							id={item}
							rotate={'right'}
							onMouseOver={this.onMouseOverGear}
						/>
						<span>{item}</span>
						<CanvasContent content={this.state.selectedItem} id={item} />
					</div>
				</div>	
			);
		});
	}

	render() {
		return (
			<div>
				{this.displayMenuItems()}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCanvas }, dispatch);
}

export default connect(null, mapDispatchToProps)(Menu);
*/
