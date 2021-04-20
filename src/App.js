import React from 'react';

import Banner from './components/banner/Banner';
import Content from './components/content/Content';
import NavBar from './components/navbar/NavBar';
import Social from './components/social/Social';

import './app.css'

export default function App() {

    return (
        <div className='container'>

           <NavBar />

            <Content />

            <Banner />

          <Social />
            
        </div>
    )
}