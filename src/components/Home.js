import '../styles/home.css';
import Nav from './Nav';
import homeImage from '../assets/pete-garnett-unsplash.jpg';

export default function Home({ currentPage, setCurrentPage }) {
  return (
    <div id='home'>
      <img
        src={homeImage}
        alt='Crystal Clear Water in Wales'
      />
      <div id='home-content-container'>
        <h1>Taniti</h1>
        <Nav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
