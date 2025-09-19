import Nav from './Nav';
import activities from '../jsons/activities.json';
import food from '../jsons/food.json';
import lodging from '../jsons/lodging.json';
import Card from './Card';
import { useEffect, useState } from 'react';
import Filter from './Filter';

export default function Page({ currentPage, setCurrentPage }) {
  const [data, setData] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  const [search, setSearch] = useState('');

  const [budgets, setBudgets] = useState({
    $: false,
    $$: false,
    $$$: false,
  });

  const [categories, setCategories] = useState([]);

  const [pagination, setPagination] = useState(0);

  const [filteredArray, setFilteredArray] = useState(data);

  useEffect(() => {
    if (currentPage === 'PLAY') {
      setData(activities);
    } else if (currentPage === 'EAT') {
      setData(food);
    } else if (currentPage === 'STAY') {
      setData(lodging);
    }
  }, [currentPage]);

  useEffect(() => {
    const tempArray = data.map((d) => d.category);
    setAllCategories(Array.from(new Set(tempArray)));
    setFilteredArray(data); // reset filteredArray when data changes
    setPagination(0);
  }, [data]);

  const handleFilter = () => {
    let tempArray = data.slice();

    // Filter budgets
    const activeBudgets = Object.keys(budgets).filter((key) => budgets[key]);
    if (activeBudgets.length > 0) {
      tempArray = tempArray.filter((item) =>
        activeBudgets.includes(item.budget)
      );
    }

    // Filter categories
    if (categories.length > 0) {
      tempArray = tempArray.filter((item) =>
        categories.includes(item.category)
      );
    }

    // Filter search
    if (search.trim() !== '') {
      const q = search.toLowerCase();
      tempArray = tempArray.filter((item) =>
        item.name.toLowerCase().includes(q)
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
          {filteredArray.length === 0 && (
            <p>No results found. Please clear filters.</p>
          )}
          {filteredArray
            .slice(pagination * 8, pagination * 8 + 8)
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
              disabled={pagination >= Math.ceil(filteredArray.length / 8) - 1}>
              ›
            </button>
          </div>
        </div>

        <Filter
          currentPage={currentPage}
          allCategories={allCategories}
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
