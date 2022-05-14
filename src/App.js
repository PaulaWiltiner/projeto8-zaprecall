
import React from 'react';
import './assets/css/reset.css';
import './assets/css/style.css';
import WelcomePage from './Pages/WelcomePage'
import DeckPage from './Pages/DeckPage'
import  { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <div className='container'>
        <BrowserRouter>

          <Routes>

              <Route  path='/' element={<WelcomePage/>} />
              <Route path='/deckpage' element={<DeckPage />}/>

          </Routes>

        </BrowserRouter>
    </div>
  );
}