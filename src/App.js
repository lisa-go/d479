import './styles/pages.css';
import { useState } from 'react';
import Home from './components/Home';
import Faq from './components/Faq';
import Move from './components/Move';
import Page from './components/Page';
import Footer from './components/Footer';

export default function App() {
  let [currentPage, setCurrentPage] = useState('HOME');
  return (
    <div className='App'>
      <main>
        {currentPage === 'HOME' && (
          <Home
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        {(currentPage === 'EAT' ||
          currentPage === 'STAY' ||
          currentPage === 'PLAY') && (
          <Page
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
      </main>
      <Footer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
