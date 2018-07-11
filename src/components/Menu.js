import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import fetchCanvas payload
import { fetchCanvas } from '../actions/index';

import GearSmall from './GearSmall';
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
			selectedItem: ''
		};

		this.onMouseOverGear = this.onMouseOverGear.bind(this);
	}

	onMouseOverGear(e) { 
		// console.log('--- onMouseOverGear ---');
		// console.log('e.target.id =', e.target.id);
		e.preventDefault();
		this.props.fetchCanvas(e.target.id);
	}

	displayMenuItems() {
		return this.state.menuItems.map(item => {
			return (
				<div key={item}>
					<div className={bannerStyle.labelName}>{item}</div>
					<GearSmall
						id={item}
						rotate={'right'}
						onMouseOver={this.onMouseOverGear}
					/>
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
