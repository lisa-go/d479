import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Eat from './components/Eat';
import Faq from './components/Faq';
import Move from './components/Move';
import Play from './components/Play';
import Stay from './components/Stay';

export default function App() {
  let [currentPage, setCurrentPage] = useState('HOME');
  return (
    <div className='App'>
      {currentPage === 'HOME' && (
        <Home
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === 'EAT' && (
        <Eat
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage === 'FAQ' && (
        <Faq
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === 'MOVE' && (
        <Move
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === 'PLAY' && (
        <Play
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === 'STAY' && (
        <Stay
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
