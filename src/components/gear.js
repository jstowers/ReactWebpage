import React, { Component } from 'react';
import '../../style/image.css'
import gear from '../../img/gear.png';

class Gear extends Component {
  	render() {
	    return (
	      	<div>
	      		<img src={ gear }/>
  			</div>
	    );
  	}
}

export default Gear;