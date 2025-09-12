import Credits from './Credits';

export default function Footer({ currentPage, setCurrentPage }) {
  return (
    <footer>
      footy
      {currentPage == 'HOME' && <Credits />}
    </footer>
  );
}
