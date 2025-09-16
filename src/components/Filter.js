export default function Filter({ currentPage, data, category }) {
  return (
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
  );
}
