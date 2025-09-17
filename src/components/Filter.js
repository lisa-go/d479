export default function Filter({
  currentPage,
  allCategories,
  budgets,
  setBudgets,
  categories,
  setCategories,
  search,
  setSearch,
  handleFilter,
  clearFilters,
}) {
  const toggleBudget = (b) => {
    setBudgets((prev) => ({ ...prev, [b]: !prev[b] }));
  };

  const toggleCategory = (c) => {
    setCategories((prev) =>
      prev.includes(c) ? prev.filter((item) => item !== c) : [...prev, c]
    );
  };

  return (
    <div className={`filters ${currentPage.toLowerCase()}-filters`}>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div id='filter-options-container'>
        <h5>Filter options</h5>
        <div id='budget-container'>
          <h6>Budget</h6>
          {['$', '$$', '$$$'].map((b) => (
            <div
              className='option'
              key={b}>
              <input
                type='checkbox'
                name={b}
                id={b}
                checked={budgets[b]}
                onChange={() => toggleBudget(b)}
              />
              <p>{b}</p>
            </div>
          ))}
        </div>

        <div id='category-container'>
          <h6>Category</h6>
          {allCategories.map((c) => (
            <div
              className='option'
              key={c}>
              <input
                type='checkbox'
                name={c}
                id={c}
                checked={categories && categories.includes(c)}
                onChange={() => toggleCategory(c)}
              />
              <p>{c}</p>
            </div>
          ))}
        </div>
      </div>
      <div id='filter-button-container'>
        <button onClick={handleFilter}>Filter</button>
        <button onClick={clearFilters}>Clear</button>
      </div>
    </div>
  );
}
