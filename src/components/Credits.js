import credits from '../jsons/credits.json';
import '../styles/credits.css';

export default function Credits() {
  return (
    <div id='footer-credits'>
      <h4>Image Credits</h4>
      <ol>
        {credits.map((c, i) => (
          <li key={i}>
            {c.author}. ({c.year}). <i>{c.title}</i>. {c.website}.
            <a
              href={c.url}
              target='_blank'
              rel='noopener noreferrer'>
              {c.url}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
