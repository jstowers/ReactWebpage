import React, { Component } from 'react';
import bodyStyle from '../../style/body.css';

class Body extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href='#' className='btn btn-white'>Contact Me</a>
            </div>
        )
    }

}

export default Body;
