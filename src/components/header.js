import React, { Component } from 'react';
import style from '../../style/style.css';

class Header extends Component {

	render() {
		return (
			<div>
				<header className='header'>
					<div className='heading-primary'>
						<span className="heading-primary-main">
							Joseph Stowers
						</span>
						<span className='heading-primary-sub'>
							Software Engineer
						</span>
					</div>
					<div className='heading-secondary'>
						<span className='heading-secondary-main'>
							Positively Driven, Creatively Built
						</span>
					</div>	
				</header>
			</div>
		);
	}
}

export default Header;
