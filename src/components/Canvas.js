import React, { Component } from 'react';
import { connect } from 'react-redux';

import CanvasContent from './CanvasContent';
import backgroundStyle from '../../style/background.css';

class Canvas extends Component {

	render() {
		return (
			<div className={backgroundStyle.contain}>
				<CanvasContent content={this.props.canvas} />
			</div>
		);
	}
}

function mapStateToProps({ canvas }) {
	return { canvas };
}

export default connect(mapStateToProps)(Canvas);
