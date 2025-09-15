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

  let category;
  if (data.length >= 1) {
    const tempArray = data.map((d) => {
      return d.category;
    });
    category = Array.from(new Set(tempArray));
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
        <div className={`filters ${currentPage.toLowerCase()}-filters`}>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search'
          />
          <div id='filter-options-container'>
            <h5>Filter options</h5>
            <div id='budget-container'>
              <h6>Budget</h6>
              <div className='option'>
                <input
                  type='checkbox'
                  name='$'
                  id='$'
                />
                <p>$</p>
              </div>
              <div className='option'>
                <input
                  type='checkbox'
                  name='$$'
                  id='$$'
                />
                <p>$$</p>
              </div>
              <div className='option'>
                <input
                  type='checkbox'
                  name='$$$'
                  id='$$$'
                />
                <p>$$$</p>
              </div>
            </div>

            <div id='category-container'>
              <h6>Category</h6>
              {category.map((c) => (
                <div
                  className='option'
                  key={c}>
                  <input
                    type='checkbox'
                    name={c}
                    id={c}
                  />
                  <p>{c}</p>
                </div>
              ))}
            </div>
          </div>
          <button>Filter</button>
        </div>
      </div>
    </div>
  );
}
