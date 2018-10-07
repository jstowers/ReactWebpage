import React, { Component } from 'react';
import { connect } from 'react-redux';

import CanvasContent from './CanvasContent';
import backgroundStyle from '../../style/background.css';


class Canvas extends Component {

	render() {
		const { canvas, id } = this.props;
		return <CanvasContent content={canvas} id={id} />
	}
}

function mapStateToProps({ canvas }) {
	return { canvas };
}

export default connect(mapStateToProps)(Canvas);
