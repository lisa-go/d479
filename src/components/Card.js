import '../styles/card.css';

export default function Card({ d, currentPage }) {
  let imgSrc;
  try {
    imgSrc = require(`../images/${d.image}`);
  } catch (error) {
    console.error(`Cannot find Image: ${d.image}`);
    imgSrc = '';
  }
  return (
    <div className={`card ${currentPage.toLowerCase()}-card`}>
      <div
        id='card-header-container'
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}>
        <h5>{d.name}</h5>
      </div>
      <div id='card-head-container'>
        <div className='addr'>{d.address}</div>
        <div className='budget'>{d.budget}</div>
      </div>
      <p className='desc'>{d.short_description}</p>
      <div className='hour-cat-container'>
        <div>
          <p>Hours</p>
          <div className='hours'>{d.hours}</div>
        </div>
        <div className='category-container'>
          <p>Category</p>
          <div className='category'> {d.category}</div>
        </div>
      </div>
    </div>
  );
}
