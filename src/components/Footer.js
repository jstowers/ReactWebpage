// Footer
// October 6, 2018

import React, { Component } from 'react';
import bodyStyle from '../../style/body.css';
import LinkedInLogo from '../../img/LinkedIn-34px.png';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="contact-buttons">  
                <a href='https://www.linkedin.com/in/joestowers/'>
                    <img 
                        className="btn btn-linkedin"
                        src={ LinkedInLogo }
                    />
                </a>
            </div>
            <div className="copyright">
                © 2018, Joseph E. Stowers
            </div>
        </div>
    );
}

export default Footer;
