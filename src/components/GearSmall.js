import React, { Component } from 'react';
import '../../style/gear.css';
import gearSVG from '../../img/gearSVG.svg';

// gear rotates left (counterclockwise) or right (clockwise)
class GearSmall extends Component {

	render() {
		const { rotate } = this.props;

		if (rotate === 'right') {
			return (
				<div className="right">
					<img 
						className="gearSVG"
						alt="Small Gear"
						src={gearSVG}
					/>
				</div>
			);
		} else {
			return (
				<div className="left">
					<img 
						className="gearSVG"
						alt="Small Gear"
						src={gearSVG}
					/>
				</div>
			);
		}
	}
}

export default GearSmall;
