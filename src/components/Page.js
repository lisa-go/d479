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

  // find unique categories
  let category;
  if (data.length >= 1) {
    const tempArray = data.map((d) => {
      return d.category;
    });
    category = Array.from(new Set(tempArray));
  }

  const [search, setSearch] = useState('');

  const [budgets, setBudgets] = useState({
    $: false,
    $$: false,
    $$$: false,
  });

  const [categories, setCategories] = useState([]);

  //pagination 6 cards at once
  const [pagination, setPagination] = useState(0);

  const [filteredArray, setFilteredArray] = useState(data);
  const handleFilter = () => {
    let tempArray = data;

    const activeBudgets = Object.keys(budgets).filter((key) => budgets[key]);
    if (activeBudgets.length > 0) {
      tempArray = tempArray.filter((item) =>
        activeBudgets.includes(item.budget)
      );
    }

    if (categories.length > 0)
      tempArray = tempArray.filter((item) =>
        categories.includes(item.category)
      );

    if (search.trim() !== '') {
      tempArray = tempArray.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredArray(tempArray);
    setPagination(0);
  };

  const clearFilters = () => {
    setSearch('');
    setBudgets({ $: false, $$: false, $$$: false });
    setCategories([]);
    setFilteredArray(data);
    setPagination(0);
  };

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
          {filteredArray
            .slice(pagination * 6, pagination * 6 + 6)
            .map((d, i) => (
              <Card
                d={d}
                key={`${currentPage[0].toLowerCase()}-${i}`}
                currentPage={currentPage}
              />
            ))}

          <div id='pagination-container'>
            <button
              onClick={() => setPagination(pagination - 1)}
              disabled={pagination === 0}>
              ‹
            </button>
            <p>Page {pagination + 1}</p>
            <button
              onClick={() => setPagination(pagination + 1)}
              disabled={pagination >= Math.ceil(filteredArray.length / 6) - 1}>
              ›
            </button>
          </div>
        </div>

        <Filter
          currentPage={currentPage}
          category={category}
          budgets={budgets}
          setBudgets={setBudgets}
          categories={categories}
          setCategories={setCategories}
          search={search}
          setSearch={setSearch}
          handleFilter={handleFilter}
          clearFilters={clearFilters}
        />
      </div>
    </div>
  );
}
