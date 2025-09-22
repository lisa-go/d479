import Credits from './Credits';
import '../styles/footer.css';
import palmtree from '../images/palm-tree.png';

export default function Footer({ currentPage, setCurrentPage }) {
  const allPages = ['Home', 'Play', 'Eat', 'Stay'];
  const faqIds = [
    ['National Holidays', 'nat-hol'],
    ['Power Outlets', 'pow'],
    ['Alcohol Hours', 'al-hr'],
    ['Drinking Age', 'drink'],
    ['English Speakers', 'eng'],
    ['Hospitals', 'hosp'],
    ['Crime', 'crime'],
    ['Currency', 'curr'],
    ['List of Holidays', 'holiday-list'],
  ];

  function changePage(e, page) {
    e.preventDefault();
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }

  function MoveOnClick(e, id) {
    e.preventDefault();
    setCurrentPage('MOVE');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  function FaqOnClick(e, id) {
    e.preventDefault();
    setCurrentPage('FAQ');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
  return (
    <footer>
      <div id='sitemap'>
        <div id='s1'>
          <div className='sm-sec'>
            <h3>Pages</h3>
            <ul>
              {allPages.map((p) => (
                <li
                  key={p}
                  onClick={(e) => changePage(e, p.toUpperCase())}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className='sm-sec'>
            <h3
              className='clickable'
              onClick={(e) => changePage(e, 'MOVE')}>
              Move
            </h3>
            <ul>
              <li onClick={(e) => MoveOnClick(e, 'gh-banner')}>Getting Here</li>
              <li onClick={(e) => MoveOnClick(e, 'ga-banner')}>
                Getting Around
              </li>
            </ul>
          </div>
        </div>

        <div className='sm-sec'>
          <h3
            className='clickable'
            onClick={(e) => changePage(e, 'FAQ')}>
            FAQs
          </h3>
          <ul>
            {faqIds.map((f) => (
              <li
                key={f[0]}
                onClick={(e) => FaqOnClick(e, f[1])}>
                {f[0]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id='flogo'>
        <img
          src={palmtree}
          alt='Palm tree icon'
        />
        <h3>
          Taniti
          <br />
          Tourism
        </h3>
      </div>
      {currentPage === 'HOME' && <Credits />}
    </footer>
  );
}
