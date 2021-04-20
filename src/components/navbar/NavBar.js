import React from 'react';

import './navbar.css'

export default function NavBar() {
    return (
        <div className='navbar'>

            <a href="#" className="logo">Lorem ipsum</a>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Category</a></li>
            </ul>

        </div>
    )
}