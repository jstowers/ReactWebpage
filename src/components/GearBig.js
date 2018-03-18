import React, { Component } from 'react';
import '../../style/gear.css';
import gearPNG from '../../img/gearPNG.png';
import gearSVG from '../../img/gearSVG.svg';

class GearBig extends Component {

	render() {
		return (
			<div>
				<div>
					<img 
						className="gearSVG"
						alt="Big Gear"
						src={gearPNG} 
					/>
				</div>
				<div>
					<img 
						className="gearSVG"
						alt="Small Gear"
						src={gearSVG}
					/>
				</div>
			</div>
		);
	}
}

export default Gear;
