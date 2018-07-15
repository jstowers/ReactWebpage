import React, { Component } from 'react';
import gearStyle from '../../style/gear.css';
import gearSVG from '../../img/gearSVG.svg';

// gear rotates clockwise
class GearSmall extends Component {

	render() {
		const { id, onMouseOver } = this.props;

		return (
			<img className='gear-size'
				id={id}
				alt="Rotating Gear"
				src={gearSVG}
				onMouseOver={onMouseOver}
			/>
		);
	}
}

export default GearSmall;
