import Nav from './Nav.js';
import '../styles/move.css';
import planeImg from '../images/rocker-sta-RSYBi_1fhfM-unsplash.jpg';

export default function Move({ currentPage, setCurrentPage }) {
  return (
    <div id='move'>
      <header>
        <h2>{currentPage}</h2>
        <Nav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </header>
      <div id='page-container'>
        <div
          id='gh-banner'
          style={{ backgroundImage: `url(${planeImg})` }}>
          <h4>GETTING HERE</h4>
        </div>
        <div id='info-box'>
          <div className='info'>
            <h5>Air Travel</h5>
            <p>
              Taniti is served by a small airport that can accommodate small
              jets and propeller planes.
            </p>
            <p>
              Taniti is in the process of expanding the airport so larger jets
              will be able to land on the island within the next few years.
            </p>
          </div>
          <div className='info'>
            <h5>Cruise Ships</h5>
            <p>
              There are cruise ships that dock in Yellow Leaf Bay for one night
              per week.
            </p>
          </div>
        </div>
        <div id='ga-banner'>
          <h4>GETTING AROUND</h4>
        </div>
        <div className='info'>
          <h5>Ground Transportation</h5>
          <ul>
            <li>
              <h6>Public buses</h6> serve Taniti City and run from 5 a.m. to 11
              p.m. every day.
            </li>
            <li>
              <h6>Private buses</h6> serve the rest of the island.
            </li>
            <li>
              <h6>Taxis</h6> are available in Taniti City
            </li>
            <li>
              <h6>Rental Cars</h6> can be rented from a local rental agency near
              the airport
            </li>
            <li>
              <h6>Bikes and helmets</h6> are available to rent from several
              vendors <strong>(helmets are required by law)</strong>.
            </li>
            <li>Taniti City is fairly flat and very walkable.</li>
            <li>
              Many tourists stay in the area surrounding Merriton Landing: this
              area is easy to explore on foot.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
