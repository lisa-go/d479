import Nav from './Nav';
import activities from '../jsons/activities.json';
import Card from './Card';

export default function Page({ currentPage, setCurrentPage }) {
  let data;
  if (currentPage == 'PLAY') {
    data = activities;
  } else if (currentPage == 'EAT') {
    data = activities;
  } else if (currentPage == 'STAY') {
    data = activities;
  }

  return (
    <div id={currentPage.toLowerCase()}>
      <header>
        <h2>{currentPage}</h2>
        <Nav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </header>
      <div id='page-container'>
        <div className='card-container'>
          {data.map((d, i) => (
            <Card
              d={d}
              key={`${currentPage[0].toLowerCase()}-${i}`}
              currentPage={currentPage}
            />
          ))}
        </div>
        <div className='filters'>
          <p>filters</p>
        </div>
      </div>
    </div>
  );
}
