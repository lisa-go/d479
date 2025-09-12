import Nav from './Nav';

export default function Page({ currentPage, setCurrentPage }) {
  return (
    <div id={currentPage.toLowerCase()}>
      <header>
        <h2>{currentPage}</h2>
        <Nav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </header>
      <div id='page-container'></div>
    </div>
  );
}
