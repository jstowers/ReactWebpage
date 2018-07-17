// MenuItemLeft
// July 13, 2018

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import fetchCanvas payload
import { fetchCanvas } from '../actions/index';
import GearSmall from './GearSmall';
import menuStyle from '../../style/menu.css';

class MenuItemLeft extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedItem: ''
		};
	}

	onMouseOverGear = (e) => {
		console.log('==> onMouseOverGear');
		e.preventDefault();
		this.setState({ selectedItem: e.target.id });
		this.props.fetchCanvas(e.target.id);
		this.setState({ selectedItem: ''});
	}

	render() {
		return (
			<div className='gear-location'>
				<GearSmall 
					id={this.props.id} 
					onMouseOver={this.onMouseOverGear}
				/>
				<div className='text-box'>{this.props.id}</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCanvas }, dispatch);
}

export default connect(null, mapDispatchToProps)(MenuItemLeft);
