import Nav from './Nav';
import activities from '../jsons/activities.json';
import Card from './Card';
import { useState } from 'react';
import Filter from './Filter';

export default function Page({ currentPage, setCurrentPage }) {
  let data;
  if (currentPage === 'PLAY') {
    data = activities;
  } else if (currentPage === 'EAT') {
    data = activities;
  } else if (currentPage === 'STAY') {
    data = activities;
  }

  let category;
  if (data.length >= 1) {
    const tempArray = data.map((d) => {
      return d.category;
    });
    category = Array.from(new Set(tempArray));
  }

  //pagination 6 cards at once
  const [pagination, setPagination] = useState(0);

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
          {data.slice(pagination * 6, pagination * 6 + 6).map((d, i) => (
            <Card
              d={d}
              key={`${currentPage[0].toLowerCase()}-${i}`}
              currentPage={currentPage}
            />
          ))}

          <div id='pagination-container'>
            <button onClick={() => setPagination(pagination - 1)}>‹</button>
            <p>Page {pagination + 1}</p>
            <button onClick={() => setPagination(pagination + 1)}>›</button>
          </div>
        </div>

        <Filter
          currentPage={currentPage}
          data={data}
          category={category}
        />
      </div>
    </div>
  );
}
