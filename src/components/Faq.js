import Nav from './Nav.js';

export default function Faq({ currentPage, setCurrentPage }) {
  return (
    <div id='faq'>
      <header>
        <h2>{currentPage}</h2>
        <Nav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </header>
    </div>
  );
}
