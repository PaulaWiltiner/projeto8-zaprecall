
import React from 'react';
import '../assets/css/style.css'
import '../assets/css/reset.css'
import WelcomePage from './WelcomePage/WelcomePage'

export default function App() {
    return (
      <React.Fragment>

        <div className='container'>
            <WelcomePage />
        </div>

      </React.Fragment>
    );
}