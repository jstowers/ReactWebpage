import React, { Component } from 'react';
import '../../style/gear.css';
import gearPNG from '../../img/gearPNG.png';
import gearSVG from '../../img/gearSVG.svg'

class Gear extends Component {

  	render() {
	    return (
	      	<div>
	      		<div>
	      			<img className="gearSVG" 
	      		         src={ gearPNG }/>
	      		</div>
	      		<div>
	      			<img className="gearSVG"
        		         src={ gearSVG }/>
	      		</div>
        	</div>
	    );
  	}
}

export default Gear;