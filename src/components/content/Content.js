import React from 'react';

import backArrow from '../../img/backArrow.png'
import nextArrow from '../../img/nextArrow.png'

import './content.css'

export default function Content() {
    return (
        <div className="content">
            <a href="#" className="btn">GO!</a>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className="arrow-icons">
                <img src={backArrow} alt="back-arrow" />
                <img src={nextArrow} alt="next-arrow" />
            </div>
        </div>
    )
}