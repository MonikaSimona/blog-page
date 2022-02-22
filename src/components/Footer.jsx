import React from 'react'
import { Icon } from '@iconify/react';



const Footer = () => {
    const year = new Date()
    return (
        <div className="footer-wrapper">
            <h3 className="footer-quote">
                Get Inspired.
            </h3>
            <div className="footer">
                <Icon icon="ph:copyright-thin" className='footer-icon' />
                <span className="footer-text">
                    All Blog {new Date().getFullYear()}
                </span>
                <span className="footer-text">
                    All rights reserved.
                </span>
            </div>
        </div>
    )
}

export default Footer