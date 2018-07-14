import React, { Component } from 'react';
import gearStyle from '../../style/gear.css';
import gearSVG from '../../img/gearSVG.svg';

// gear rotates left (counterclockwise) or right (clockwise)
class GearSmall extends Component {

	render() {
		const { id, rotate, onMouseOver } = this.props;

		if (rotate === 'right') {
			return (
				<div className="right">
					<img 
						id={id}
						className="gearSVG"
						alt="Small Gear"
						src={gearSVG}
						onMouseOver={onMouseOver}
					/>
				</div>
			);
		} else {
			return (
				<img 
					id={id}
					alt="Small Gear"
					src={gearSVG}
					onMouseOver={onMouseOver}
				/>
			);
		}
	}
}

export default GearSmall;
